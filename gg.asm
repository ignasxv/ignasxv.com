; guessing-game-ignas.asm
; ignas a. kamugisha

; CPU configuration
; (16F84 with RC osc, watchdog timer off, power-up timer on)

	processor 16f84A
	include <p16F84A.inc>
	__config _RC_OSC & _WDT_OFF & _PWRTE_ON

; some handy macro definitions

IFSET macro fr,bit,label
	btfss fr,bit ; if (fr.bit) then execute code following macro
	goto label ; else goto label	
      endm

IFCLR macro fr,bit,label
	btfsc fr,bit ; if (! fr.bit) then execute code following macro
	goto label ; else goto label
	  endm

IFEQ macro fr,lit,label
	movlw lit
	xorwf fr,W
	btfss STATUS,Z ; (fr == lit) then execute code following macro
	goto label ; else goto label
	 endm

IFNEQ macro fr,lit,label
	movlw lit
	xorwf fr,W
	btfsc STATUS,Z ; (fr != lit) then execute code following macro
	goto label ; else goto label
	 endm

MOVLF macro lit,fr
	movlw lit
	movwf fr
	  endm

MOVFF macro from,to
	movf from,W
	movwf to
  	  endm

; file register variables
curr  equ 0x0C    ; Register to hold the current state (output)
octr  equ 0x0D    ; Outer-loop counter for delay timing
ictr  equ 0x0E    ; Inner-loop counter for delay timing


; Define state values using one-hot encoding for simplicity
S1  equ B'00000001'   ; Represents State 1: Light 1 active
S2  equ B'00000010'   ; Represents State 2: Light 2 active
S3  equ B'00000100'   ; Represents State 3: Light 3 active
S4  equ B'00001000'   ; Represents State 4: Light 4 active
ERR equ B'00010000'   ; Represents Error state
WIN equ B'00100000'   ; Represents WIN state

; Initialize program memory
org 0x00
reset:
    goto init           ; On reset, jump to initialization routine

; Interrupt vector table (not used in this program)
org 0x08

; Initialization routine
init:
    ; Set up I/O ports
    bsf STATUS, RP0                ; Set RP0 to access Bank 1 registers
    MOVLF B'11000000', TRISB        ; Configure RB0 to RB5 as outputs (Lights and WIN/ERR)
    bcf STATUS, RP0                ; Clear RP0 to access Bank 0 registers
    MOVLF B'00000000', TRISA        ; Configure RA0 to RA3 as inputs (Switches G1-G4)

    ; Initialize the current state to S1 (start state)
    MOVLF S1, curr
    goto anchor                      ; Enter the main loop

; starting point for the program (turn on the current light and go on with the cycle)
anchor:
    ; Output the current state to PORTB to activate the corresponding light
    MOVFF curr, PORTB
    goto delay                      ; Proceed to delay for state transition timing

; Delay subroutine to create approximately 1-second delay
delay:
    MOVLF d'32', octr                ; Load outer-loop counter with 32
d1:
    clrf ictr                         ; Clear inner-loop counter
d2:
    decfsz ictr, F                    ; Decrement inner-loop counter
    goto d2                           ; Repeat inner loop until ictr is zero
    decfsz octr, F                    ; Decrement outer-loop counter
    goto d1                           ; Repeat outer loop until octr is zero
    goto CheckWofE                    ; After delay, check for WIN or ERR conditions

; Subroutine to check for WIN or ERR conditions
CheckWofE:
    ; Compare curr with WIN
    MOVLW WIN                          ; Load WIN constant into W
    XORWF curr, W                      ; XOR curr with WIN
    btfsc STATUS, Z                    ; Check if result is zero (curr == WIN)
    goto SOK_or_SERR                      ; If equal, handle WIN condition

    ; Compare curr with ERR
    MOVLW ERR                         ; Load ERR constant into W
    XORWF curr, W              ; XOR curr with ERR
    btfsc STATUS, Z                    ; Check if result is zero (curr == ERR)
    goto SOK_or_SERR                      ; If equal, handle ERR condition

    ; If neither WIN nor ERR, proceed with state rotation
    goto rotation_logic

; Subroutine to handle WIN or ERR states
SOK_or_SERR:
    MOVF PORTA, W                      ; Move input from PORTA to W
    ANDLW 0x0F                         ; Mask upper 4 bits, keep lower 4 (G1-G4)
    XORLW 0x00                         ; Compare with zero (no input)
    btfsc STATUS, Z                    ; If no input detected
    goto S4_to_S1                      ; Restart the game by going to state S1
    goto SOK_or_SERR                   ; Otherwise, stay in WIN or ERR state

; Subroutine for state rotation logic
rotation_logic:
    MOVF PORTA, W                      ; Read input from PORTA
    ANDLW 0x0F                         ; Mask upper 4 bits, keep lower 4 (G1-G4)
    XORLW 0x00                         ; Check if no input is detected
    btfsc STATUS, Z                    ; If no input
    goto next_please                   ; Proceed to rotate to next state

    ; Determine current state and jump to corresponding check
    MOVLW S1                            ; Load S1 constant
    XORWF curr, W                       ; Compare curr with S1
    btfsc STATUS, Z                     ; If equal
    goto look_for_G1                        ; Check guess for G1

    MOVLW S2                           ; Load S2 constant
    XORWF curr, W               ; Compare curr with S2
    btfsc STATUS, Z                     ; If equal
    goto look_for_G2                        ; Check guess for G2

    MOVLW S3                           ; Load S3 constant
    XORWF curr, W               ; Compare curr with S3
    btfsc STATUS, Z                     ; If equal
    goto look_for_G3                        ; Check guess for G3

    MOVLW S4                           ; Load S4 constant
    XORWF curr, W               ; Compare curr with S4
    btfsc STATUS, Z                     ; If equal
    goto look_for_G4                        ; Check guess for G4

; Subroutine to check guess for G1
look_for_G1:
    MOVLW PORTA                        ; Load PORTA input
    ANDLW 0x0F                         ; Mask upper 4 bits
    XORLW S1                           ; Compare with S1 state
    btfsc STATUS, Z                    ; If equal (correct guess)
    goto correct                       ; Jump to correct handler
    goto incorrect                          ; Else, jump to 'incorrect' handler

; Subroutine to check guess for G2
look_for_G2:
    MOVLW PORTA                        ; Load PORTA input
    ANDLW 0x0F                         ; Mask upper 4 bits
    XORLW S2                           ; Compare with S2 state
    btfsc STATUS, Z                     ; If equal (correct guess)
    goto correct                        ; Jump to correct handler
    goto incorrect                          ; Else, jump to incorrect handler

; Subroutine to check guess for G3
look_for_G3:
    MOVLW PORTA                        ; Load PORTA input
    ANDLW 0x0F                         ; Mask upper 4 bits
    XORLW S3                           ; Compare with S3 state
    btfsc STATUS, Z                     ; If equal (correct guess)
    goto correct                        ; Jump to correct handler
    goto incorrect                          ; Else, jump to incorrect handler

; Subroutine to check guess for G4
look_for_G4:
    MOVLW PORTA                        ; Load PORTA input
    ANDLW 0x0F                         ; Mask upper 4 bits
    XORLW S4                           ; Compare with S4 state
    btfsc STATUS, Z                     ; If equal (correct guess)
    goto correct                        ; Jump to correct handler
    goto incorrect                          ; Else, jump to incorrect handler

; Handler for correct guess (WIN state)
correct:
    MOVLW WIN                          ; Load WIN constant into W
    MOVWF curr                 ; Update curr to WIN
    goto anchor                         ; Return to main loop

; Handler for incorrect guess (ERR state)
incorrect:
    MOVLW ERR                          ; Load ERR constant into W
    MOVWF curr                 ; Update curr to ERR
    goto anchor                         ; Return to main loop

; Subroutine to rotate to the next state in the sequence
next_please:
    ; Compare curr with S1
    MOVLW S1                           ; Load S1 constant
    XORWF curr, W               ; Compare curr with S1
    btfsc STATUS, Z                     ; If equal
    goto S1_to_S2                      ; Transition to S2

    ; Compare curr with S2
    MOVLW S2                           ; Load S2 constant
    XORWF curr, W               ; Compare curr with S2
    btfsc STATUS, Z                     ; If equal
    goto S2_to_S3                      ; Transition to S3

    ; Compare curr with S3
    MOVLW S3                           ; Load S3 constant
    XORWF curr, W               ; Compare curr with S3
    btfsc STATUS, Z                     ; If equal
    goto S3_to_S4                       ; Transition to S4

    ; Compare curr with S4
    MOVLW S4                           ; Load S4 constant
    XORWF curr, W               ; Compare curr with S4
    btfsc STATUS, Z                     ; If equal
    goto S4_to_S1                        ; Restart the state sequence

; Transition from S1 to S2
S1_to_S2:
    MOVLW S2                           ; Load S2 constant
    MOVWF curr                 ; Update curr to S2
    goto anchor                         ; Return to main loop

; Transition from S2 to S3
S2_to_S3:
    MOVLW S3                           ; Load S3 constant
    MOVWF curr                 ; Update curr to S3
    goto anchor                         ; Return to main loop

; Transition from S3 to S4
S3_to_S4:
    MOVLW S4                           ; Load S4 constant
    MOVWF curr                 ; Update curr to S4
    goto anchor                         ; Return to main loop

S4_to_S1:
    MOVLW S1                           ; Load S1 constant
    MOVWF curr                 ; Update curr to S1
    goto anchor                         ; Return to main loop


; End of program
end
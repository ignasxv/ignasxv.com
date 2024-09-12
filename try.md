# Questions
![alt text](image.png)
Here’s the completed table using the markdown format for your given questions:

# 1. Converting unsigned numbers. 

## Converting 1437 (OCT) to binary and hexadecimal

| OCT | 1 | 4 | 3 | 7 |
|-----|---|---|---|---|
| BINARY (*split to three parts*) | 001 | 100 | 011 | 111 |

- **Full Binary (combined)**: **001100011111**

### Converting Binary to Hexadecimal
| SPLIT INTO 4 PARTS | 0011 | 0001 | 1111 |
|--------------------|------|------|------|
| HEX | 3 | 1 | F |

- **Full Hex (combined)**: **31F**

---

## Converting 10111000 (BIN) to Decimal

| BIT         | 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |
|-------------|-----|----|----|----|---|---|---|---|
| VALUE       |  1  |  0 |  1 |  1 | 1 | 0 | 0 | 0 |
| EXPRESSION  | 128*1 | 64*0 | 32*1 | 16*1 | 8*1 | 4*0 | 2*0 | 1*0 |
| CALCULATION | 128 + 32 + 16 + 8 = **184** |

- **Final Decimal**: **184**

---

## Converting 10111100011001 (BIN) to Hexadecimal

| SPLIT INTO 4 PARTS | 1011 | 1100 | 0110 | 1001 |
|--------------------|------|------|------|------|
| HEX                | B    | C    | 6    | 9    |

- **Full Hex (combined)**: **BC69**

---

## Converting 114 (DEC) to Binary

- **114 (DEC) to Binary**

- $\frac{114}{2}$ = 57 $\quad$ $\text{remainder} \ 0$ 
- $\frac{57}{2}$ = 28 $\quad$ $\text{remainder} \ 1$ 
- $\frac{28}{2}$ = 14 $\quad$ $\text{remainder} \ 0$ 
- $\frac{14}{2}$ = 7 $\quad$ $\text{remainder} \ 0$
- $\frac{7}{2}$ = 3 $\quad$ $\text{remainder} \ 1$ 
- $\frac{3}{2}$ = 1 $\quad$ $\text{remainder} \ 1$ 
- $\frac{1}{2}$ = 0 $\quad$ $\text{remainder} \ 1$




  

  **Final Binary**: **1110010**

---

## Converting 513 (DEC) to Octal

- **513 (DEC) to Octal**:


- $\frac{513}{8}$ = 64 $\quad$ $\text{remainder} \ 1$ 
- $\frac{64}{8}$ = 8 $\quad$ $\text{remainder} \ 0$ 
- $\frac{8}{8}$ = 1 $\quad$ $\text{remainder} \ 0$ 
- $\frac{1}{8}$ = 0 $\quad$ $\text{remainder} \ 1$

  **Final Octal**: **1001**

--- 

## Converting 100110.11 (BIN) to Decimal

### Whole Number Part: $100110_2$ (BIN) 

| BIT   | 32  | 16  | 8   | 4   | 2   | 1   |   |
|-------|-----|-----|-----|-----|-----|-----|---|
| VALUE | 1   | 0   | 0   | 1   | 1   | 0   |   |
| EXPRESSION | 1 $\times 2^5$ | 0 $\times 2^4$ | 0 $\times 2^3$ | 1 $\times 2^2$ | $1 \times 2^1$ | 0 $\times 2^0$ |  |
| CALCULATION | 32 + 0 + 0 + 4 + 2 + 0 | = 38 |

- **Decimal Value of Whole Number Part**: **38**

### Fractional Part: 0.11 (BIN)

| BIT   | $\frac{1}{2}$ |  $\frac{1}{4}$ |   |
|-------|--------------------|--------------------|---|
| VALUE | 1                  | 1                  |   |
| EXPRESSION | 1 $\times 2^{-1}$ | 1 $\times 2^{-2}$ |   |
| CALCULATION | 0.5 + 0.25 | = 0.75 |

- **Decimal Value of Fractional Part**: **0.75**

### Combined Result $ = 38_{10} + 0.75{10} = 38.75_{10} $


# 2. Determine whether addition with 2-complement causes an overflow 
### $10010101 + 1001010$
|          | `8` | 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
|----------|---|---|---|---|---|---|---|---|---|
| Carry    | `0` | 0 | 0 | 0 | 1 | 1 | 1 | 1 |   |
| Operand 1| `0` | 1 | 0 | 0 | 1 | 0 | 1 | 0 | 1 |
| Operand 2| `0` | 1 | 0 | 0 | 1 | 0 | 1 | 0 | 1 |
| Sum      | `1` | 0 | 1 | 0 | 1 | 0 | 0 | 0 | 0 |

###   $\text{The result has a different sign (ignoring the excess bit) so OVERFLOW OCCURS!}$

### $01011011 + 10010001 => \text{No overflow, numbers have different signs}$

# 3. Determine the Radix and the missing number x and y
## $3765 + y3x3 = 6340$
- $\text{Assumed possible Radices and reasoning}$ 

Radix | explanation
-- | -- 
BINARY | not possible (only 0s and 1s)
OCTAL | very possible since an overflow happened at a number beyong 7 
DECIMAL | Not likely since 5 + 3 would have been 10
HEXADECIMAL | Overflow will only happen at 15

weight | $8^3$  | $8^2$  | $8^1$  | $8^0$ 
-- | -- | -- | -- | -- 
n1 | 3 | 7 | 6 | 5
n2 | y | 3 | x | 3
sum | `6` | `3` | `4` | `0` 
$expression$ | $3 + y + 1 - 8 = 6$ | | $6 + 1 + x -8 = 4$ | 

- $x = 5$
- $ y = 10 => 10 - 8 = 2$ *$\text{we subtract 8 since there's no overflow implied}$* 

# 4. Complete the table ($\text{Use 6 bits}$ )
DECIMAL | SIGNED MAGNITUDE | 2'S COMPLEMENT | 1'S COMPLEMENT
-- | -- | -- | -- 
12 | `001100` | `111010` | `110011` 
X | `001010` | 110110 | `110101`
X | X | X |110111
X | X | X | 010111



# 5. Adding unsigned numbers

Num (HEX) |  |   |   | |
-- | -- | -- | -- | --
n1 | 3 | C | 5 | E
n2 | 1 | 2 | D | 4
$sum$ | `4`|  `F`  | `3` | `2`

Num (OCT) | | | |
-- | -- | -- | --
n1 | 4 | 3 | 2
n2 | 1 | 5 | 7
$sum | `6` | `1` |  `1`



















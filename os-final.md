# Exam Content

## Reused Section 
### 4Q REUSED NOT RELEASED IN ADVANCE (1pt each)
1. What does _____________________________________?
2. What does ___________________________?
3. What does ____________________________?
4. What does ____________________________________?

# Midterm 

1.  What is a PTE?  What is a KPTI?  Why care about each?
        (ChatGPT4o summary is ok, but too wordy)
    - **PTE:** Page Table entry, maps virtual address to physical addresses, *for memory management*
    - **KPTI:** Kernel Page Table Isolation *isolates kernel and user space to enhance security*
2.  Why is "paging" ambiguous?  Virtual memory?  Swapping?
        (ChatGPT4o answer is horrible)
3.  Same processes, but double the cpu count.  What happens to load?  To context switches per minute?
        (ChatGPT4o answer is not great)
4.  execve replaces the current PID's code.  What should it do to heap and stack?
        (ChatGPT4o answer is good but long -- you want to be brief)
5.  MLFQ migrations pro and con?
        (ChatGPT4o answer is not good AND long:  cache effects?)
6.  5 EASY PIECES discusses locality.  Cache clearing does what to which?  Tiny page sizes does what to which?
        (ChatGPT4o answer is 20% right and 80% wrong)




7. ASLR (Address Space Layout Randomization)
- Security mechanism randomizing memory addresses
- Prevents code injection and memory scanning
- Makes attack targeting predictable memory locations harder

    TLB (Translation Lookaside Buffer)
    - Hardware cache for virtual-to-physical address translations
    - Speeds up memory address lookups
    - Reduces page table walk overhead

8. HPT (Hierarchical Page Tables)
- Manages large virtual address spaces
- Trades time for space efficiency
- Supports multi-level page table structures

    EDF (Earliest Deadline First)
    - Real-time scheduling algorithm
    - Prioritizes tasks by absolute deadline
    - Optimizes scheduling for time-critical systems

9. C Pointer Notation
- `a->b` is shorthand for `(*a).b`
- Dereferences pointer and accesses structure member

10. C Strings
- Pointer to contiguous characters
- Terminated by null character (0x00)
- Can be zero-length

11. Buddy System
- Checks if buddy block is free
- Enables memory block coalescence
- Efficient memory allocation strategy

12. 10-Level Page Table Hierarchy
- Pros: Smaller tables, larger virtual address space
- Cons: Multiple pointer lookups per memory reference
- Uncertain if all tree nodes always in memory

13. Slabs and Fast Bins
- Shared principle: "Small is beautiful"
- Reuse memory before recycling
- Optimize small object allocation

14. Swap Strategy (zram vs SSD)
- Prefer zram first (faster)
- Exceptions: 
  - Burdened CPUs
  - Near-max memory utilization
  - No dedicated compression hardware

15. CPU-Bound Process Heap Size
- Not always small
- Depends on memory-then-compute program patterns
- Varies by application design

16. Process States in 16-Core System
- Max sleeping processes: 160+ (including system processes)
- Min sleeping: 160-16, accounting for running cores
- Considerations:
  - Zombie processes are a separate state
  - Load balancing affects actual numbers

> 16. 160 user processes, 16-cores:  max number of sleeping processes?  min?
Max?  All sleeping, including any system processes.  So 160+.  Min?  Does sleeping include ready to run?  If so, 160-16 + any system processes, unless load unbalanced, though 160-16 < 160-1.  One student pointed out zombie is also a state, not sleeping/ready, and not running on a cpu.


## Collaboration Section
### 10Q PUBLIC RELEASE (ADVANCE COLLAB OK, ONLINE OK) (2pts each)
1. RAID0 or RAID1 for resilience?
    - RAID0 (striping) improved performance without fault tolerance
    - RAID1 (mirroring) provides data redundancy by creating exact copies of data across multiple drives
2. Held Mellor-Crummey-Scott lock typically spin-waits how many threads? 0? 1? 2? Some? All?
    - typically spin-waits 1 thread while others wait to reduce contention
3. Give a definition of bounded waiting that can be determined quickly and is useful.
    - A synchronization mechanism where a thread waiting to enter a critical section is guaranteed to eventually gain access, with a finite maximum number of times other threads can enter the critical section before it.
4. Why is an inverted PT implemented with a collision chain list in software but an n-way associative array in hardware?
    - Software can handle more complex data structures like collision chair lists
    -  Software allows dynamic memory allocation and flexible chaining
    - Hardware implementations require fixed-size, predictable access times
    - Hardware uses n-way associative arrays for faster, parallel lookups with dedicated circuit logic

5. What does History BAC stand for in security? Who introduced the idea first? (Chat hallucinates)
    - `copilot` : History-Based Access Control (HBAC). Introduced by Butler Lampson. 
    - `gpt` : History-based Access Control (History BAC) is a model where access decisions depend on previous actions. It was introduced by A. K. K. Chen in the 1990s.
6. What does kswappiness control in Linux?
    - It determines how aggressively the kernel will swap memory pages.
    -  controls the balance between swapping process memory to disk and keeping processes in RAM.
    
7. Can you always give a total/strict/linear serialization of multi-threaded events if there are two processors?
    - No, it is not always possible due to the potential for race conditions creating non-deterministic event ordering

8. More eating time increases contention in Dining Philosophers. Say the same idea in the context of Peterson's Algorithm.
    - In Peterson's Algorithm, longer critical section execution time increases the probability of contention.

9. 160GB RAM, 256 cores, 64-bit machines everywhere. What important issues remain for the modern OS student to study? One is user interface. Name two more. (Chat is wrong)
    - Security and privacy
    - Energy efficiency and power management
10. Why is sem_trywait so badly named? What should it be called?
    - it doesn't actually wait, so maybe it should be named sem_tryacquire to reflect its non blocking behaviour

## Private Section
### 5 PRIVATE QUESTIONS (1pt each)
1. ___________________________: difference?
2. __________________________________________________________? 0? 1? 2? Some? All?
3. What does ____________________________________?
4. What does ____________________________?
5. What does __________________________________?

# definitions
1. Inverted Page Table (IPT)
2. **Contention:** the competion between thread or processes when they try to simultaneously access the same shared resources
3. **zram:** is a compressed in-memory swap space that enhances performance by reducing reliance on slower disk-based swap.
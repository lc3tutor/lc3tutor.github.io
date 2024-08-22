;
; LC3 Tutor - limituserinput.asm
;
; Prints a prompt to the user and gets the user input. If the
; input is not an uppercase letter the program alerts the user.
;
.ORIG x3000

    LEA R0, prompt1
    PUTS ; Print prompt1.

    GETC ; Gets one character from the user and puts into R0.
    OUT

    ; Check lower bound
    LD R1, ascii_A
    ADD R1, R1, R0
    BRn INVALID

    ; Check upper bound
    LD R1, ascii_Z
    ADD R1, R1, R0
    BRp INVALID

    ; Both conditions satisfied. Convert.
    LD R1, convert

    ; We now need to OR R0 with R1 to get the desired result.
    ; We can use DeMorgans principle to OR using AND and NOT.
    NOT R0, R0
    NOT R1, R1
    AND R1, R0, R1
    NOT R1, R1 ; The lower case letter is in R1.

    LEA R0, prompt2
    PUTS

    ADD R0, R1, #0 ; Put R1 in R0.
    OUT
    BRnzp FINISHED

INVALID
    ADD R1, R0, #0 ; Transfer input to R1.
    LEA R0, prompt3
    PUTS
    ADD R0, R1, #0 ; Transfer input to R0.
    OUT
    LEA R0, prompt4
    PUTS

FINISHED
    HALT

ascii_A .FILL #-65
ascii_Z .FILL #-90
convert .FILL x20
prompt1 .STRINGZ "Input an upper case letter: "
prompt2 .STRINGZ "\nThe lower case letter is: "
prompt3 .STRINGZ "\nInvalid input, "
prompt4 .STRINGZ " is not an uppercase letter."

.END
;
; LC3 Tutor - starpyramid.asm
;
; Basic lc3 program that prints a pyramid of characters
; with a character chosen by the user.
;
.ORIG x3000

BR  GET_PYRAMID_SIZE
TRY_AGAIN_SIZE
    LEA R0, TRY_AGAIN
    PUTS
GET_PYRAMID_SIZE
    LEA R0, PYRAMID_SIZE ; Size of pyramid.
    PUTS
    GETC
    OUT
    LD  R1, CHAR_ONE_NEG ; Check input between one and five.
    ADD R1, R1, R0
    BRn TRY_AGAIN_SIZE
    ADD R3, R1, #-4
    BRp TRY_AGAIN_SIZE
    ADD R1, R1, #1

    AND R0, R0, #0
    ADD R0, R0, #10 ; Line feed.
    OUT

    ; R1 has the pyramid size.
    AND R2, R2, #0 ; star counter.
    ADD R3, R1, #0 ; Level counter.

LEVEL_LOOP
    ; Print spaces then stars.
    LD R0, CHAR_SPACE
    ADD R1, R3, R3
    SPACE_START
        OUT
        ADD R1, R1, #-1
        BRp SPACE_START
    ADD R0, R0, #10 ; Star is #10 above space.

    ADD R1, R2, #0
    ADD R1, R1, R1
    ADD R1, R1, #1
    STAR_MIDDLE
        OUT
        ADD R1, R1, #-1
        BRp STAR_MIDDLE
    ADD R2, R2, #1

    ADD R3, R3, #-1
    BRn LEVEL_LOOP_BREAK
    AND R0, R0, #0
    ADD R0, R0, #10
    OUT
    BR  LEVEL_LOOP
LEVEL_LOOP_BREAK

    HALT

CHAR_SPACE   .FILL #32
CHAR_ONE_NEG .FILL #-49
PYRAMID_SIZE .STRINGZ "Size of the pyramid (1-5): "
TRY_AGAIN    .STRINGZ "\nImproper size, choose a size between one and five.\n"

.END
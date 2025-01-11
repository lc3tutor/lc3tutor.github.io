---
title: Basic Input / Output
description: How to utilize the LC3 GETC (TRAP x20) and OUT (TRAP x21) to get user input and to echo the input back to the user.
author: lc3tutor
date: 2024-05-15
category: pages
layout: post
slug: basic-input-output
permalink: /basic-input-output
prereqs: Requires basic knowledge of the AND and NOT LC3 commands.
---

This section introduces the OS Calls `GETC` for input and `OUT` and `PUTS` for output. The OS Calls are then demonstrated in an example program. This section on [Working with ASCII](/work-with-ascii) is useful for the material for this section.

## Basic Input

To get input from the user, we will use the OS call `GETC`. This OS call represents the LC3 instruction `TRAP x20`. When called, `GETC` polls the keyboard until a key is pressed then returns the character's [ASCII](/ascii-table){:target="_blank"} value in register `R0`. After `GETC` is called and the user inputs a character, we can then access the ASCII input in `R0` with other opcodes.

`GETC` polls the keyboard and will hang the program until a key is pressed. Check out this page, [advanced input](/), on how to get user input without hanging up the program. `GETC` only polls one character at a time, so it must be called many times if the user input is a string with more than one character.

[Below](#example-program) is a user program that demonstrates using `GETC`.

Note that `GETC` does not output the keystroke, it only stores it in R0. This is handled by the `OUT` OS call. It is useful to provide feedback to the user by echoing the input. The next section will go over using `OUT` and `PUTS` to output to the console.

## Basic Output

To output to the console we will rely on `OUT` and `PUTS`. `OUT` is the reverse operation of `GETC`. With `GETC` you take the input from the console and store its ASCII value in `R0`. With `OUT` we store the ASCII value of a character in `R0`, then print that character to the console. Just like `GETC`, `OUT` can only print one character at a time. First we prepare the ASCII value in `R0` through other opcodes. Once we have `R0` ready we can call `OUT`. One use of `OUT` is to echo the user input from `GETC`. Since `GETC` stores the ASCII value in `R0`, all you need to do is call `OUT` right after. This is shown in the example program.

`PUTS`, unlike `OUT`, can print a sequence of characters which we call a string. `PUTS` works a little differently than `OUT` and requires the use of the `LEA` opcode, which we will briefly cover here.

A string is a sequence of characters that are stored in memory. The string "Hey" takes up four memory locations. One for each character and then an extra location for the null terminator. The null terminator is a location with a value of x0000 and can be represented by the escape sequence '\0'. Below is a table showing how "Hey" would be stored in memory:

| Address  | Value  | Character |
| -------- | ------ | --------- |
| x30A3    | 0x0048 | H         |
| x30A4    | 0x0065 | e         |
| x30A5    | 0x0079 | y         |
| x30A6    | 0x0000 | \0        |

Rather than put an ASCII value in `R0`, for `PUTS` we must put the address of the first character of the string. This is where `LEA`, or Load Effective Address, comes into play. The string will normally have a label, such as `heyStr .STRINGZ "Hey"`. The label `heyStr` is actually attached to 'H'. Then we can use `LEA R0, heyStr` to get the address of 'H' and place it into `R0`. Now that we have the start address of "Hey", we call `PUTS`. When `PUTS` is called it will start at the address given in `R0` and print the character at each subsequent address until it finds a null terminator. In our case, since we gave it the start of "Hey", the whole string is printed.

## Example Program

The program below takes in a character from the user and outputs the lower case of that letter. Only uppercase letters are valid input but the input is not checked, so you can input non-letters. Check out this page, [limiting user input](/limit-user-input) to see how the user input can be limited to letters. The program does the following:

1. Outputs the first prompt to the console to let the user know what is needed.
2. The input is received from the user, stored in `R0`, then displayed back to the user.
3. The value x20 is prepared in `R1`.
4. The character is converted to lower case by OR'ing the input with x20. Since LC3 does not have an OR opcode we must rely on De Morgan's principle.
5. The output prompt is printed to the console.
6. The converted input is printed to the console.

{% include lc3code.html filename="basicinputoutput.asm" %}

Expected output with input `R`:
```text
Input an upper case letter: R
The lower case letter is: r
```
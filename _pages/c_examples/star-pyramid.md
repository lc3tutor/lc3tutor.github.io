---
title: Draw Star Pyramid
description: An example LC3 program that draws a pyramid made of stars.
author: lc3tutor
date: 2025-01-11
category: pages
layout: post
slug: draw-star-pyramid
permalink: /draw-star-pyramid
---

This example makes use of flow control to print a pyramid of stars based on the user's input.

## Example

{% include lc3code.html filename="starpyramid.asm" %}

## Usage

The example and simulator can be found in this [repository](https://github.com/lc3tutor/lc3code/tree/main). The `scripts/starpyramid.txt` file contains the commands needed to run the program. You can run the script directly with the [script command](/script-command) from the simulator using `script scripts/starpyramid.txt`.

<img src="{{ site.imageurl }}C/starpyramid.png" class="center_img">

## Walkthrough

### Stored Values

Lines 61-64 contain literals needed for our code to operate. We cannot directly hard code these values into an opcode due to the immediate value limitations. For example, we cannot add `#-49` directly and must use three `ADD` instructions. Thus using a `.FILL` allows us to load the value with one `LD` instruction. Additionally, the `.FILL` labels allow assigning meaningful names to these values so that their context is more clear in the program.

- `CHAR_SPACE` is the ASCII value for printing a space, ` `. It is used to pad the pyramid.
- `CHAR_ONE_NEG` is the negative ASCII value for one, `1`. It is used to check the user input.
- `PYRAMID_SIZE` is used to prompt the user for the pyramid size input.
- `TRY_AGAIN` is used to alert the user that they have entered an invalid pyramid size.

### User Input

Lines 8-22 are for getting a pyramid size between one and five from the user. When the program starts, the unconditional branch on line 8 jumps to line 12 to prompt the user. Lines 13-16 prints the prompt, gets a single character from the user, saves the character in `R0` and echoes the character back to the user. [This page](/limit-user-input) goes over how to check and limit the user input. You can also review the ASCII table [here](/ascii-table).

Lines 17-22 check the user input between ASCII 1 and ASCII 5. First, the negative of ASCII 1 is loaded and added to the user input and placed in `R1`. If the value is negative that means the user entered a character before ASCII 1 and the branch on line 19 puts the program counter back at line 9 where the program lets the user know they entered an invalid size and the program returns to line 12 again to prompt the user for another character. If the character is greater than or is ASCII 1, then the value will be zero or positive. Note that we put the result on line 18 back into R1.

Between line 17 and line 18 `R1` contains the user input minus `#-49`. If the user inputs ASCII 1 then `R1` contains `#0`, `#1` for ASCII 2, and so on for ASCII inputs above ASCII 1. This would mean that When the user inputs ASCII 5, `R1` contains `#4`, and for ASCII 6, `R1` contains `#5`. On line 18 we know that the user input is greater than or equal to ASCII 1. To check if the input is less than or equal to ASCII 5, we would add `#-4` to `R1` and check for a positive or zero result. On line 22, if `R3` is negative we know that the input was greater than ASCII 5 and again we branch back to line 9 to prompt the user for another input. At this point, `R1` contains the decimal value of the user input. Note that the decimal value is the actual binary value minus 1, so if the user inputs ASCII 4 then `R1` contains `#3`. To re-align this, on line 22 we add `#1` to `R1`.

After getting the user input, on lines 24-26 we print a line feed (newline) to print the pyramid below the user prompt. Then lines 29-57 print the pyramid.

### Printing the Pyramid

We begin on line 29 and 30 to setup the level and star counter. Because the number of stars at the base of the pyramid changes with the user input, so does the number of levels in the pyramid and the size of each level. There are two inner loops that prints each row of stars and an outer loop that is responsible for printing each level. The top level has one star and each level the number of stars on one side increments until the base of the pyramid which has $$2*input + 1$$ stars.

#### Spaces Inner Loop

Within each level on lines 34-39 we print spaces, then print the stars. Through trial and error, it was found that to get a somewhat straight pyramid we need to print $$x$$ spaces, where $$x = 2 * level$$ and $$level$$ is held in `R3`. Line 35 sets the space loop counter in `R1` to twice the current level in `R3`. This corresponds to having twice the spaces at the first printed level than the user input.

#### Stars Inner Loop

Lines 40-49 print the stars. First we setup the star ASCII value in `R0`. The star ASCII value is `#42`, `#10` above the space ASCII value, so we only have to add `#10` to `R0`. Then we prepare the star loop counter. For each outer loop, `R2` is incremented. `R2` is the star counter and tells us how many stars to print on each side of the middle star. We do not want to change this value so we move the star counter into a temporary register, `R1`. The number of stars we want to print is setup through lines 42-44 so that `R1` contains $$2 * R2 + 1$$. `R2` is the number of stars printed on each side of the center star and `R1` is the total number of stars to print on that level.

#### Level Outer Loop

Lines 51-57 conclude the outer loop. Here we check if we are done printing the pyramid. `R3` is keeping track of the levels and is our outer loop counter. It is decremented each iteration and if found to be negative then we have printed all of the levels and the loop is broken by branching to line 57. Other wise, we print a line feed to the console to move to the next level, the next outer loop iteration.

### Summary

The pyramid is defined by the number of stars in the base level and the number of levels. These are determined by the user input. There are $$input + 1$$ levels and &&2 * input + 1$$ stars in the base level. If the user inputs 3, then the top level, level 3 has 1 star, the base level, level 0, has 7 stars, and so on for the inbetween levels.

There are three loops. The outer loop is responsible for each level of the pyramid. In each outer loop there are two inner loops. One responsible for drawing spaces, then a loop for drawing the stars. Using the star counter and level counter in `R2` and `R3` we can calculate the needed number of spaces and stars for each of the inner loops for each outer loop iteration that ultimately gives us an upright and straight pyramid.

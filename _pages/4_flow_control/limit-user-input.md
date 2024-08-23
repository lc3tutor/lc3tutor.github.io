---
title: 4.3. Limiting User Input
description: How to use branching in LC3 to control what input the user can provide to the program.
author: lc3tutor
date: 2024-08-14
category: pages
layout: post
slug: limit-user-input
permalink: /limit-user-input
prevp: '/basic-input-output'
nextp: '/value-to-binary-string'
prereqs: Requires knowledge on the branch instruction, BRnzp.
---

Review these sections: [branching](/) and [memory load / store](/).

This section will build upon the uppercase to lowercase conversion example in [basic input / output](/basic-input-output) to show how a user's input can be restricted to satisfy the need of the program. The concepts introduced here can be used to approach many different problems.

## From Condition to Branches

The issue with the old example was that a user could input a character that was not an uppercase letter, resulting in a meaningless output. If the user inputted `0` then the result would be `0`. The only range of inputs that make sense are `A-Z` in the [ascii table](/ascii-table), so we will limit the user input to that range. In LC3 there are no if/then/else statements, but if/then/else is a form of flow control which is what the `BRnzp` opcode facilitates. So we must take our if/then statement and transform it into a statement that works with branching.

The if/then statement might go something like this: if the user inputs a character in the range of `A-Z` then convert to lowercase, else tell the user the input is invalid. This is easy for us to understand but for LC3 branches there is no concept of "in the range of". Instead we must check the bound of the range. Our statement might then be: if the input is a character whose ascii value is greater than the ascii value of `A` AND less than the ascii value of `Z` then convert to lowercase, else tell the user the input is invalid. The key concept here is that characters are just numerical values and checking a character between two characters is the same as checking a number between two other numbers, an inequality.

What we currently have is this: `A <= input AND input <= Z` is the same as `#65 <= input AND input <= #90`. However, branches only check one condition at a time. So we first need to check `#65 <= input`, then if that is satified we check `input <= #90`. If the first condition is not met then we have no reason to check the second condtion since our input is not in the required range. If the first condition is met, we check the second condition. If the first condition AND the second condition are met then we know our input is in range. The last step is to convert the inequalities to branches which is discussed in [describing-branches](/).

Below is a user program that does what we described above.

## Example Program

{% include codesnip.html filename="limituserinput.asm" %}

Expected output with input `R`:
```text
Input an upper case letter: R
The lower case letter is: r
```

Expected output with input `3`:
```text
Input an upper case letter: 3
Invalid input, 3 is not an uppercase letter.
```
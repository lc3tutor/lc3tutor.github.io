---
title: 3.1. Basic Input
description: How to utilize the LC3 GETC (TRAP x20) and OUT (TRAP x21) to get user input and to echo the input back to the user.
author: lc3tutor
date: 2024-05-15
category: pages
layout: post
slug: basic-input
permalink: /basic-input
prevp: '/number-bases'
nextp: '/value-to-binary-string'
prereqs: Requires basic knowledge of the AND and NOT LC3 commands.
---

To get input from the user, we will use the OS call GETC. This OS call represents the LC3 instruction TRAP x20. When called, GETC polls the keyboard until a key is pressed then returns the character's [ASCII](/ascii-table){:target="_blank"} value in register R0.

GETC only polls one character at a time, so it must be called many times if the user input is a string with more than 1 character.

Note that GETC polls the keyboard and will hang the program until a key is pressed. Check out this page, [advanced input](/advanced-input), on how to get user input without hanging up the program.

Below is a user program that takes in an upper case letter and outputs the letter in lowercase. Note the user input is not checked so you can input non-letters. Check out this page, [limiting user input](/limit-input) to see how the user input can be limited to letters.

Note that users input is not displayed be default. This can be enabled by uncommenting line 12. GETC does not output the keystroke, it only stores it in R0. It is useful feedback to echo the users input. We can use OUT to echo each keystroke from the user. This page on [basic output](/basic-output) talks about OUT and PUTS.

{% include codesnip.html filename="basicinput.asm" %}
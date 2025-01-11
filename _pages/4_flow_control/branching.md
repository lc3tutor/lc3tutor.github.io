---
title: Branching
description: What LC-3 branching is and how to relate branch flags with inequalities.
author: lc3tutor
date: 2024-10-16
category: pages
layout: post
slug: branching
permalink: branching
prereqs: Requires knowledge of basic LC-3.
---

Review these sections: tbd

This article will cover the basics of LC3 program flow control. LC3 instructions are processed sequentially with the help of the program counter (PC). The behavior of the program counter is to increment after every instruction cycle. The program counter tells the machine what address of memory to fetch the next instruction. If only the PC increments then the program executes sequentially from x3000 until the machine is stopped or a fault occurs. However, the PC is writable and so we can overwrite the PC with the address of the next instruction that we choose. This can be done conditionally or unconditionally with the branch (BRnzp) instruction.

## The Meaning of nzp

The nzp stands for negative, zero, positive. The way the BR instruction works is that it takes the last register value and sets the flag based on if that value was negative, zero, or positive. The opcodes that will set the flags are: ADD, AND, NOT, LD, LDR, and LDI. For example, if you execute `ADD R1, R1, R0` and R1 ends up being #-12 then the n flag is set. If R1 is #15 or #0 then the flags p and z are set respectively.

When you place a branch in your LC3 you are telling the machine, "I want you to branch to this label when this flag is set." For example, in the code snip below,

{% include lc3code.html filename="branching1.asm" %}

if the value of R1 is zero or positive then the program counter is loaded with the address of MyLabel and the next instruction executed is `JSR MyRoutine`. If however R1 is negative, `AND R1, R1, #0` is executed, then `JSR MyRoutine` is executed. This is because you told the machine, "I want you to branch to MyLabel if the value of R1 is zero or positive.

## The limitations of BR

One thing to note is that BR cannot load an address that is more than 256 memory locations before or 255 locations after its own address plus one. For example if the BR was at address x4000 then the range of accessible addresses would be x3F01 to x4100. This is due to the limit of using PCoffset9 to calculate the branch's target address. The assembler will let you know if you violate this limitation. However, when creating an LC3 program you need to take this into consideration.

## From inequality to BR

In this section ... tbd.
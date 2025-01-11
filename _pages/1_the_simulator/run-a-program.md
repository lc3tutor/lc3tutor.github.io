---
title: Run a Program
description: How to load, assemble and run an LC3 program. This section shows how to run a hello world program using a basic LC3 operating system.
author: lc3tutor
date: 2024-03-01
category: pages
layout: post
slug: run-a-program
permalink: /run-a-program
---

This section goes over how to run a user created LC3 program.

These are the steps needed to run a program,

Have the proper LC3 assembly files along with PennSim working,
Assemble each assembly file to create a symbol and object file,
Load each object file,
Click or type the command for Continue.
If you don’t know the commands then look over this section, [1.2. Basic Commands](/basic-commands).

## 1. The Assembly Code:

In this first example there are two assembly files. The OS file and the user program. The OS file and at least one user program is needed to do anything useful. The LC3 OS code is provided and will rarely be edited. The user program code contains the functionality. There can be multiple user program files. The LC3 code is shown below.

{% include lc3code.html filename="hello.asm" %}

{% include lc3code.html filename="lc3os.asm" %}

## 2. Assemble the Files:

All code on this website can be found in the [git repository](https://github.com/lc3tutor/lc3code).

Copy the code above into your favorite text editor and save as assembly files or clone and use the files in the git repository.

Assemble hello.asm and lc3os.asm. This will create the object and symbol file in the same folder as the assembly file. Note the images below use relative file paths to PennSim. The files could also be in the same folder as the PennSim executable.

<img src="{{ site.imageurl }}1/1-3-1.png" class="center_img">
<img src="{{ site.imageurl }}1/1-3-2.png" class="center_img">

The assembly file needs to be re-assembled after every change. The lc3os.asm file will not change often, if at all. The user program code will change very often. Make sure to re-assembly each time.

## 3. Load the Object Files:

Load each object file. In this case just the lc3os.obj and hello.obj file. It does not matter the order they are loaded. It is expected that the object code does not overlap in memory.

<img src="{{ site.imageurl }}1/1-3-3.png" class="center_img">

Note that the symbol file is loaded automatically with the object file.

## 4. Run the Program:

Type continue in the command line. Or click the Continue button. PennSim should look similar to below after running. The simulator stops automatically due to the HALT at the end of the user program.

<img src="{{ site.imageurl }}1/1-3-4.png" class="center_img">

## 5. Automate the Commands:

For this example, it was not overly tedious to type the commands to run the program. However, when organizing code in folders and when there are multiple user files to assemble and load, this can get very tedious. The next sections goes over how to put all of the commands into a single script text file.
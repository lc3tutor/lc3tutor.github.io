---
title: Basic Commands
description: The basic PennSim commands needed to get started running LC3 code. Commands such as load (ld), assembly (as), clear, reset, and continue.
author: lc3tutor
date: 2024-02-29
category: pages
layout: post
slug: basic-commands
permalink: /basic-commands
---

In this section we will cover a few basic commands needed to use PennSim. The “script” and “break” commands have their own sections. You can type “help” in the command line to list the available commands. You can also input “help <command>” to get more information on a command.

<img src="{{ site.imageurl }}1/1-2-1a.png" class="center_img">

We start with “as <filename.asm>”, “ld <filename.obj>”, “reset”, and “clear”. These commands are used to assemble an assembly file, load the object file, reset the simulator (registers, memory, graphics, console), and clear the command line respectively. Below is an example of using “as”. The command line will let you know if the assembly fails and gives you information to use for debugging. The file that you assemble does not have to be in the same folder as the PennSim JAR file, you can use relative file paths (relative to the JAR file).

<img src="{{ site.imageurl }}1/1-2-1.png" class="center_img">

After using the “as” command, a symbol and object file are created from the specified assembly file. Use the “ld” command to then load the symbol object file into the simulator. If the “ld” command fails, make sure the file name or file path are correct and that the actual object and symbol file exist. The “clear” and “reset” commands are straight forward commands.

<img src="{{ site.imageurl }}1/1-2-2.png" class="center_img">

There is also “Next”, “Step”, “Continue”, and “Stop”. These commands are also buttons you can click, but when using the “script” command it is useful to perform these tasks from the command line. “Continue” will run the program until a breakpoint is reached. “Stop” will pause code execution. “Next” and “Step” are used to execute the code line by line to help with troubleshooting.

In the next section we will look at what makes up an LC3 assembly file and then use some of these commands to assemble, load, and execute our first LC3 assembly program.


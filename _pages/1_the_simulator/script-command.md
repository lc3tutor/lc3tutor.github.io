---
title: 1.4. Script Command
description: How to leverage the script command in the PennSim simulator to quickly run LC3 code. Useful for when needing to debug and assemble and load multiple LC3 files.
author: lc3tutor
date: 2024-02-29
category: pages
layout: post
slug: script-command
permalink: /script-command
prevp: '/run-a-program'
nextp: '/using-breakpoints'
---

This article uses the ghost user program in the [git repository](https://github.com/lc3tutor/lc3code/).

Below on the left is the user program code. On the right is the red ghost LC3 image code. The red ghost code was generated using the LC3 [Image Generator tool](/lc3-image-generator).

{% include lc3code.html filename="ghost.asm" %}
{% include lc3code.html filename="redghost.asm" %}

To run this program, there are three files to assemble (if needed) and three objects to load. Instead of typing each command separately, the simulator allows the use of basic scripting. An example is below. The script is just a text file. Each line in the file is a command, just you would type into the command line.

{% include codesnip.html filename="ghost.txt" %}

Each line explained:

1. “reset” resets the simulator,
2. “clear” clears out the command line,
3. “as path/to/assembly/file.asm” assembles file.asm,
4. “ld path/to/object/file.obj” loads the object into memory,
5. “continue” runs the LC3 code loaded into memory.
6. Re-assembling lc3os.asm is not needed since it does not change. However, it does not hurt to include in the script.

To run the script all that is needed is to run use the script command.
For example: “script ghost.txt”.

<img src="{{ site.imageurl }}1/1-4-1.png" class="center_img">
---
title: The PennSim GUI
description: A quick run down of the PennSim GUI that will be needed to build, simulate, and debug LC3 code.
author: lc3tutor
date: 2024-02-29 
category: pages
layout: post
slug: the-pennsim-gui
permalink: /the-pennsim-gui
---

These tutorials will be using the PennSim LC3 simulator from the University of Pennsylvania.

- A guide on how to install and use PennSim can be found here: [User Guide](https://acg.cis.upenn.edu/milom/cse240-Fall06/pennsim/pennsim-guide.html).
- We will be using basic commands found in this user manual: [User Manual](https://acg.cis.upenn.edu/milom/cse240-Fall06/pennsim/pennsim-manual.html).

This guide does not cover the installation of the required dependencies or how to troubleshoot any issues with running PennSim. One common issue is not being able to assemble or load file, which can be caused by the PennSim JAR file being in an iCloud or OneDrive directory. After installation, when you run PennSim you will see a window that looks like the one in the image below.

<img src="{{ site.imageurl }}1/1-1-1.png" class="center_img">

This window is where you will assemble, load and run your code.

1. Command Line: Where  you will type in “Control Commands”, commands that are used to operate PennSim. The command line output is how warnings and errors are conveyed to the user. We will go over a few commands more in depth in later sections. You can check out the user manual to see more about control commands.
2. Registers: Shows the values of important registers.
3. Graphics Display: We will dig deeper into the graphics display when we begin to use it. In short, we can change the color of each pixel in order to create images.
4. Console: This is the text input/output interface. You must click this box in order to input text from the keyboard.
5. System Memory: This area shows the value at each location in memory. You can set breakpoints in this window and use PennSim to step through your program.
In the next section we will look at some basic control commands to get us started using PennSim.

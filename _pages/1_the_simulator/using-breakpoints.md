---
title: Using Breakpoints
description: How to use breakpoints to pause execution of a simulated LC3 program and how to leverage labels for quick debugging.
author: lc3tutor
date: 2024-05-19
category: pages
layout: post
slug: using-breakpoints
permalink: /using-breakpoints
---

*This section is not required but will be useful as the LC3 code becomes more complex.

When programming and testing LC3 code, sometimes things just don't work as intended or the software is buggy. For the lucky programmer the problem is repeatable and easy to solve by walking through the code. For everyone else, the problem is intermittent, depends on a specific set of conditions, and requires pausing the executing code to look at register and memory values. This is where breakpoints come in handy.
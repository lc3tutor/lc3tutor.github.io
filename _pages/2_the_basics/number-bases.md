---
title: 2.1. Number Bases
description: Before working with assembly code, knowledge about the 2, 10, and 16 number bases is required. This article reviews binary, demcimal, and hexadecimal numbers.
author: lc3tutor
date: 2024-02-29
category: pages
layout: post
slug: number-bases
permalink: /number-bases
prevp: '/using-breakpoints'
nextp: '/work-with-ascii'
---

In this section we will discuss number bases and because numbers of different bases can look alike, when the context is not clear the base will be denoted with a: **#** for decimal, **b** for binary, and **x** for hexadecimal. For example the decimal value 229 would be denoted as #229, b11100101, and xE5 respectively.

## Decimal (Base 10)
This is a pretty basic review of the decimal number base. Decimal values are what we commonly use. The temperature is 75 F or 23.8889 C. There are 54 students, and so on. Each digit of a decimal value can be between 0 and 9. When a digit exceeds 9, the next digit to the left increments by 1. The right most digit is usually the least significant digit while the left most digit is usually the most significant digit. The most significant digit gives the largest increase in value per increment. For example, if we increment 799 by 1, we add it to the least significant digit and end up with 800.

The reason this is called base 10 is because each decimal can be decomposed into a sum of weighted powers of 10. So for example, 799 would be:

$$ 799 = 7\cdot10^2 + 9\cdot10^1 + 9\cdot10^0. $$

A more general equation for a decimal value, including fractions is $D$:

$$ D = {x_n}\cdot10^n + \ldots + {x_1}\cdot10^1 + {x_0}\cdot10^0 + {x_{-1}}\cdot10^{-1} + \ldots + {x_{-m}}\cdot10^{-m}, $$

where $x_0$ is the ones digit, $x_1$ is the tens digit, $x_{-1}$ is the tenths digit and so on. The decimal value can be as large as $n$ digits, or have a fractional precision of $m$ digits. The more digits you have to the right of the decimal point, the more accurate the fraction is.

## Binary (Base 2)
Decimal is how we normally describe things and binary is how a digital computing system describes things. At the lowest level the computing system must rely on a collection of on and off states. It’s not important to know what each state means, only that there are two states and that they are different. The computer cannot give you a decimal value directly. If a computer wants to tell you there are 12 apples, it uses binary values. Binary values are made up of binary digits that can be either 0 or 1. These binary digits are called **bits**. Four bits is a **nibble** and 8 bits a **Byte**. To store the value 12, the computer needs a nibble, or 4 bits, which is four states. The binary value for 12 is b1100.

## Hexadecimal (Base 16)
Hexadecimal (Hex) is a compact and readable way to express a binary value, but still convey useful information about the value of each bit. Each hex digit can take on a value of 0-9 or A-F where A is #10 and so on up to F or #15. For example, #6523 is x197B in hexadecimal and b1100101111011 in binary. x197B is more compact and the conversion to binary is from hex is quicker than the conversion from decimal. In the end, binary is what the machine uses, but hex is often how we view the information.

## Conversions
In this section, binary to hex, binary to decimal and the reverse of each will be shown. The conversion from decimal to hex will not be shown directly. You can use this tool, [2sC Base Conversion](/b-2/), to convert between the three forms. When converting between the three forms it is useful to memorize the two tables below (to be added).

<div style="overflow-x:auto; margin: auto; width: 100%;">
  <table style="max-width: 400px; min-width: 400px; margin: auto; border: 1px solid;">
	<tbody>
	<tr>
		<th class="th-c">Power of 2</th>
		<th class="th-c">Decimal</th>
	</tr>
	<tr class="tr-c">
		<td class="td-c">$$2^0$$</td>
		<td class="td-c">1</td>
	</tr>
	<tr>
		<td class="td-c">$$2^1$$</td>
		<td class="td-c">2</td>
	</tr>
	<tr>
		<td class="td-c">$$2^2$$</td>
		<td class="td-c">4</td>
	</tr>
	<tr>
		<td class="td-c">$$2^3$$</td>
		<td class="td-c">8</td>
	</tr>
	<tr>
		<td class="td-c">$$2^4$$</td>
		<td class="td-c">16</td>
	</tr>
	<tr>
		<td class="td-c">$$2^5$$</td>
		<td class="td-c">32</td>
	</tr>
	<tr>
		<td class="td-c">$$2^6$$</td>
		<td class="td-c">64</td>
	</tr>
	<tr>
		<td class="td-c">$$2^7$$</td>
		<td class="td-c">128</td>
	</tr>
	</tbody>
  </table>
  <table style="max-width: 400px; min-width: 400px; margin: auto; border: 1px solid;">
	<tbody>
	<tr>
		<th class="th-c">Decimal</th>
		<th class="th-c">Hex</th>
        <th class="th-c">Binary</th>
		<th class="th-c">Decimal</th>
        <th class="th-c">Hex</th>
		<th class="th-c">Binary</th>
	</tr>
	<tr class="tr-c">
		<td class="td-c">0</td>
		<td class="td-c">0</td>
        <td class="td-c">0000</td>
        <td class="td-c">8</td>
		<td class="td-c">8</td>
        <td class="td-c">1000</td>
	</tr>
	<tr>
		<td class="td-c">1</td>
		<td class="td-c">1</td>
        <td class="td-c">0001</td>
        <td class="td-c">9</td>
		<td class="td-c">9</td>
        <td class="td-c">1001</td>
	</tr>
	<tr>
		<td class="td-c">2</td>
		<td class="td-c">2</td>
        <td class="td-c">0010</td>
        <td class="td-c">10</td>
		<td class="td-c">A</td>
        <td class="td-c">1010</td>
	</tr>
	<tr>
		<td class="td-c">3</td>
		<td class="td-c">3</td>
        <td class="td-c">0011</td>
        <td class="td-c">11</td>
		<td class="td-c">B</td>
        <td class="td-c">1011</td>
	</tr>
	<tr>
		<td class="td-c">4</td>
		<td class="td-c">4</td>
        <td class="td-c">0100</td>
        <td class="td-c">12</td>
		<td class="td-c">C</td>
        <td class="td-c">1100</td>
	</tr>
	<tr>
		<td class="td-c">5</td>
		<td class="td-c">5</td>
        <td class="td-c">0101</td>
        <td class="td-c">13</td>
		<td class="td-c">D</td>
        <td class="td-c">1101</td>
	</tr>
	<tr>
		<td class="td-c">6</td>
		<td class="td-c">6</td>
        <td class="td-c">0110</td>
        <td class="td-c">14</td>
		<td class="td-c">E</td>
        <td class="td-c">1110</td>
	</tr>
	<tr>
		<td class="td-c">7</td>
		<td class="td-c">7</td>
        <td class="td-c">0111</td>
        <td class="td-c">15</td>
		<td class="td-c">F</td>
        <td class="td-c">1111</td>
	</tr>
	</tbody>
  </table>
  
</div>

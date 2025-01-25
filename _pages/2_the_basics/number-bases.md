---
title: Number Bases
description: Before working with assembly code, knowledge about the 2, 10, and 16 number bases is required. This article reviews binary, demcimal, and hexadecimal numbers.
author: lc3tutor
date: 2024-02-29
category: pages
layout: post
slug: number-bases
permalink: /number-bases
---

In this section we will discuss number bases and because numbers of different bases can look alike, when the context is not clear the base will be denoted with a: **#** for decimal, **b** for binary, and **x** for hexadecimal. For example the decimal value 229 would be denoted as #229, b11100101, and xE5 respectively. This section only covers integer values, or whole numbers. Fractions / decimals are refered to as floating point values and are discussed in the [IEEE floating point](/ieee-floating-point) section.

## Decimal (Base 10)
This is a pretty basic review of the decimal number base. Decimal values are what we commonly use. The temperature is 75 F or 23.8889 C. There are 54 students, and so on. Each digit of a decimal value can be between 0 and 9. When a digit exceeds 9, the next digit to the left increments by 1. The right most digit is usually the least significant digit while the left most digit is usually the most significant digit. The most significant digit gives the largest increase in value per increment. For example, if we increment 799 by 1, we add it to the least significant digit and end up with 800.

The reason this is called base 10 is because each decimal can be decomposed into a sum of weighted powers of 10. So for example, 799 would be:

$$ 799 = 7\cdot10^2 + 9\cdot10^1 + 9\cdot10^0. $$

A more general equation for a decimal value, including fractions is $D$:

$$ D = {x_n}\cdot10^n + \ldots + {x_1}\cdot10^1 + {x_0}\cdot10^0 + {x_{-1}}\cdot10^{-1} + \ldots + {x_{-m}}\cdot10^{-m}, $$

where $x_0$ is the ones digit, $x_1$ is the tens digit, $x_{-1}$ is the tenths digit and so on. The decimal value can be as large as $n-1$ digits, or have a fractional precision of $m$ digits. The more digits you have to the right of the decimal point, the more accurate the fraction is.

## Binary (Base 2)
Decimal is how we normally describe things and binary is how a digital computing system describes things. At the lowest level the computing system must rely on a collection of on and off states. It’s not important for us to know what each state means in the hardware, only that there are two states and that they are different. The computer cannot give you a decimal value directly. If a computer wants to tell you there are 12 apples, it uses binary values. Binary values are made up of binary digits that can be either 0 or 1. These binary digits are called **bits**. Four bits is a **nibble** and 8 bits a **Byte**. To store the value 12, the computer needs a nibble, or 4 bits, which is four states. The binary value for 12 is b1100. It is important to note that binary is normally read as most significant bit, **MSb**, on the left, to the least significant bit, **LSb** on the right. The significant bit is usually called the zeroth bit, not the first bit.

## Hexadecimal (Base 16)
Hexadecimal (Hex) is a compact and readable way to express a binary value, but still convey useful information about the value of each bit. Each hex digit can take on a value of 0-9 or A-F where A is #10 and so on up to F or #15. For example, #6523 is x197B in hexadecimal and b1100101111011 in binary. x197B is more compact and the conversion to binary from hex is quicker than the conversion from decimal. In the end, binary is what the machine uses, but hex is often how we view the information.

## Conversions
In this section, binary to hex, binary to decimal and the reverse of each will be shown. The conversion from decimal to hex will not be shown directly. You can use this tool, [2sC Base Conversion](/2sc-base-conversion), to convert between the three forms. When converting between the three forms it is useful to memorize these two [conversion tables](/conversion-table).

### Binary to Decimal

A similar equation to the decimal equation above is used to take the binary to decimal. We are only discussing whole numbers here. Note that for $$B$$ the exponent base is 2 instead of 10.

$$ B = {b_n}\cdot2^n + \ldots + {b_1}\cdot2^1 + {b_0}\cdot2^0. $$

Here is an example worked out for b10110101, which is #181:

$$\begin{aligned}
B &= {b_7}\cdot2^7 + {b_6}\cdot2^6 + {b_5}\cdot2^5 + {b_4}\cdot2^4 + {b_3}\cdot2^3 + {b_2}\cdot2^2 + {b_1}\cdot2^1 + {b_0}\cdot2^0,\\
B &= {1}\cdot2^7 + {0}\cdot2^6 + {1}\cdot2^5 + {1}\cdot2^4 + {0}\cdot2^3 + {1}\cdot2^2 + {0}\cdot2^1 + {1}\cdot2^0,\\
B &= {1}\cdot128 + {0}\cdot64 + {1}\cdot32 + {1}\cdot16 + {0}\cdot8 + {1}\cdot4 + {0}\cdot2 + {1}\cdot1,\\
B &= 128 + 0 + 32 + 16 + 0 + 4 + 0 + 1,\\
B &= 181.
\end{aligned}$$

That is it. You take the binary value for each place and add them up to get the decimal value. In this example we had the 0, 2, 4, 5, and 7 bits. So we added up there values found in the power of 2 [conversion table](/conversion-table).

### Decimal to Binary

Going the other way from decimal to binary is a bit more procedural. From binary to decimal is a formula while this is a series of steps. The steps go like this:

1. Start with the largest bit that will fit into the decimal value. Any bit above that is zero.
2. Set the largest bit to one and subtract the bit positions value from the decimal value.
3. Take the remainder from the previous subtraction and see if the next smallest bit will fit. If not then that bit is set to zero and you move on to the next bit, however if it fits in the remainder then we repeat step 2.

Here is an example of converting #182 to binary, which is b10110110:

1. We start with bxxxxxxx where x represents a bit that we don't know yet.
2. The largest bit we can fit into #182 is the bit 7 value of #128. We cannot fit the bit 8 value of #256. Our result is b1xxxxxxx.
3. We calculate the remainder, $$R = 182 - 128 = 54$$. The bit 6 value #64 does not fit into #54 and so bit 6 is set to zero, b10xxxxxx.
4. We move on to bit 5 and its value of #32 does fit into #54, so b101xxxxx and $$R = 54 - 32 = 22$$.
5. The bit 4 value of #16 fits into #22, so b1011xxxx and $$R = 22 - 16 = 6$$.
6. The bit 3 value of #8 does not fit into #6, so b10110xxx.
7. The bit 2 value of #4 fits into #6, so b101101xx and $$R = 6 - 4 = 2$$.
8. The bit 1 value of #2 fits into #2, so b1011011x and $$R = 2 - 2 = 0$$.
9. Since the remainder is zero, no more bit values will be able to fit into the remainder. All remaining bits are zero, so b10110110.

### Hexadecimal to Binary

tbd

### Binary to Hexadecimal

tbd
---
title: Using LC3 Editor
description: The basics of using the LC3Tutor LC3 Editor.
author: lc3tutor
date: 2025-09-06
category: pages
layout: post
slug: editor-how-to
permalink: /editor-how-to
---

This section covers the basics of using the [LC3Tutor LC3Editor](/lc3tee).

## LC3 Syntax

The rules are listed below. These rules may be different than other assemblers. The goal is to be more restrictive than other assemblers.

<table>
<thead>
    <tr>
        <th>Rules</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td>Accepted number formats: <code>#</code> or no prefix for decimal, <code>0x</code> or <code>x</code> for hexadecimal, or <code>b</code> for binary.</td>
    </tr>
    <tr>
        <td>Labels must start with a letter and can be any combination of letters, numbers, and underscores.</td>
    </tr>
    <tr>
        <td>Strings must be enclosed in double quotes (<code>"</code>).</td>
    </tr>
    <tr>
        <td>Your code must start with a comment or <code>.ORIG</code> directive and end with a comment or <code>.END</code> directive.</td>
    </tr>
</tbody>
</table>

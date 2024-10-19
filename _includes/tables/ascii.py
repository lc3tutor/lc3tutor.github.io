special_char = {
     0: "NUL (null)",
     1: "SOH (start of heading)",
     2: "STX (start of text)",
     3: "ETX (end of text)",
     4: "EOT (end of transmission)",
     5: "ENQ (enquiry)",
     6: "ACK (acknowledge)",
     7: "BEL (bell)",
     8: "BS  (backspace)",
     9: "TAB (horizontal tab)",
    10: "LF  (line feed, NL new line)",
    11: "VT  (vertical tab)",
    12: "FF  (form feed, NP new page)",
    13: "CR  (carriage return)",
    14: "SO  (shift out)",
    15: "SI  (shift in)",
    16: "DLE (data link escape)",
    17: "DC1 (device control 1)",
    18: "DC2 (device control 2)",
    19: "DC3 (device control 3)",
    20: "DC4 (device control 4)",
    21: "NAK (negative acknowledge)",
    22: "SYN (synchronous idle)",
    23: "ETB (end of transmission block)",
    24: "CAN (cancel)",
    25: "EM  (end of medium)",
    26: "SUB (substitute)",
    27: "ESC (escape)",
    28: "FS  (file separator)",
    29: "GS  (group separator)",
    30: "RS  (record separator)",
    31: "US  (unit separator)",
    32: "Space",
    60: "&lt;",
    62: "&gt;",
   127: "DEL"
}

fp = open("ascii.html", "w")
fp.write(
"""<style>
div.asciitab {
    overflow-y: auto;
    overflow-x: auto;
    max-height: 700px;
}
table.asciitab {
    font-size: 10px;
}
tr.asciitab {
    height: auto;
}
th.asciitab, td.asciitab {
    height: auto;
    text-align: left;
    white-space: nowrap;
    padding: 0px 1px 0px 1px !important;
}
th.asciitabbreak, td.asciitabbreak {
    height: auto;
    width: 20px;
    text-align: left;
    white-space: nowrap;
    padding: 0px 1px 0px 1px !important;
}
</style>
"""
)
fp.write("<div class=\"asciitab\">\n")
fp.write("<table class=\"asciitab\">\n")
fp.write("    <tbody>\n")

fp.write(
"""        <tr class="asciitab">
            <th class="asciitab">Dec</th>
            <th class="asciitab">Hex</th>
            <th class="asciitab">Char</th>
            <th class="asciitabbreak"></th>
            <th class="asciitab">Dec</th>
            <th class="asciitab">Hex</th>
            <th class="asciitab">Char</th>
            <th class="asciitabbreak"></th>
            <th class="asciitab">Dec</th>
            <th class="asciitab">Hex</th>
            <th class="asciitab">Char</th>
            <th class="asciitabbreak"></th>
            <th class="asciitab">Dec</th>
            <th class="asciitab">Hex</th>
            <th class="asciitab">Char</th>
        </tr>
""")
for i in range(0,32):
    fp.write("        <tr class=\"asciitab\">\n")
    for j in [0, 32, 64, 96]:
        fp.write(f"            <td class=\"asciitab\">{i+j}</td>\n")
        fp.write(f"            <td class=\"asciitab\">{i+j:X}</td>\n")
        if (i+j in special_char):
            fp.write(f"            <td class=\"asciitab\"><b>{special_char[i+j]}</b></td>\n")
        else:
            fp.write(f"            <td class=\"asciitab\"><b>{chr(i+j)}</b></td>\n")
        if (j != 96):
            fp.write(f"            <td class=\"asciitabbreak\"></td>\n")
    fp.write("        </tr>\n")

fp.write("    </tbody>\n")
fp.write("</table>\n")
fp.write("</div>\n")
const ASCII_STR_OUTPUT_ID = "asciiStrOutput";

function ConvertAsciiStrToCode(event) {
    let escapes = {"\\n": "x0A", "\\r": "x0D", "\\t": "x09", "\\\"": "x22", "\\'": "x27", "\\b": "x08", "\\\\": "x5C", "\\0": "x00"};
    let regex = /(\\[\\'\"bnrt0])|(\\[^\\'\"bnrt0]?)|([\"'])|([^\\]+)/g;

    let matches = event.target.value.matchAll(regex);
    let outStr = undefined;
    let outCode = [];
    let invalid = false;
    for (let match of matches) { // Valid escape.
        if (match[1]) {
            outCode.push(escapes[match[1]]);
        }
        else if (match[2]) { // Invalid escape.
            outStr = `Found an invalid escape character: ${match[2]}`;
            invalid = true;
            break;
        }
        else if (match[3]) { // Non-escaped quotes.
            outStr = `Found non-escaped quotes: ${match[3]}`;
            invalid = true;
            break;
        }
        else if (match[4]) { // Non-escaped text.
            str = match[4];
            strLen = str.length;
            for (let i = 0; i < strLen; i++) {
                outCode.push(`x${str.charCodeAt(i).toString(16).padStart(2, "0").toUpperCase()}`);
            }
        }
    }
    if(!invalid) {
        outStr = outCode.join(" ");
    }

    let asciiStrOutputEle = document.getElementById(ASCII_STR_OUTPUT_ID);
    asciiStrOutputEle.innerText = `Result: ${outStr}`;
}
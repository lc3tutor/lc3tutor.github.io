const ASCII_STR_OUTPUT_ID = "asciiStrOutput";

function ConvertAsciiStrToCode(event) {
    let input = event.target.value
        .replace(/[\u2018\u2019]/g, "'") // Replace smart single quotes with regular single quotes
        .replace(/[\u201C\u201D]/g, '"'); // Replace smart double quotes with regular double quotes
    let escapes = {"\\n": "x0A", "\\r": "x0D", "\\t": "x09", "\\\"": "x22", "\\'": "x27", "\\b": "x08", "\\\\": "x5C", "\\0": "x00"};
    let regex = /(\\[\\'\"bnrt0])|(\\[^\\'\"bnrt0]?)|([\"'])|([^\\]+)/g;

    let matches = input.matchAll(regex);
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
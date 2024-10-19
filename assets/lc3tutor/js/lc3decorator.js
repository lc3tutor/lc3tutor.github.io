// Handles scrolling in lc3code div.
const multiElementScroll = ( elem1, elem2 ) => {
   elem1.onscroll = function() {
      elem2.scrollTop = this.scrollTop;
   };
}

const lc3Regex = /(;.*)|(".*?[^\\]")|(\.ORIG|\.END|\.FILL|\.STRINGZ|\.BLKW|\.EXTERNAL)|\b(GETC|OUT|PUTS|IN|PUTSP|HALT)\b|\b(ADD|AND|BR[nzp]*|JMP|RET|JSR[R]*|LD[IR]?|LDR|LD|LEA|NOT|RTI|ST[IR]?|TRAP)\b|(R[0-7])(?![a-z0-9])|(#?-?[0-9]+|0?x[a-f0-9]+|b[0-1]+)(?![a-z0-9])|(\b[a-z][a-z0-9_]*\b)|(,?[\s]*)|([\S]+)/gi;

class Groups{
   static COMMENT    = 1;
   static STRING     = 2;
   static DIRECTIVE  = 3;
   static OS_CALL    = 4;
   static OPCODE     = 5;
   static REGISTER   = 6;
   static NUMBER     = 7;
   static LABEL      = 8;
   static WHITESPACE = 9;
   static UNKNOWN    = 10;
}

// List of gist on page.
let gD = [];

let gInfo = {};

// Index of gist to be loaded and parsed.
let gZ = 0;

// When page loads.
//function onLoad(event) {
function DecorateLC3(gistID, table=true){
   let filename = gistID.split("/").pop();
   gD.push({"id" : gistID, "fn" : filename});
   gInfo[filename] = {"id": gistID, "table": table};
   console.log(gInfo);
   var req = new XMLHttpRequest();
   req.onload = loadDec;
   //req.open("GET", gD[gZ].id);
   req.open("GET", gistID);
   req.send();
   return;
}

function loadDec() {
   // `this` is the XMLHTTPRequest object that
   // this function is attached to.
   //console.log(this);
   c = this.responseText;
   var reqFileName = this.responseURL.split("/").pop();
   //console.log(reqFileName);
   // New c is an array of lines.
   
   // If not .asm file, then ignore.
   if (gD[gZ].id.includes(".asm")) {
      //newC = parseContent(c);
        let parser = new LC3Parser();
        parser.LoadLC3(c);
        // split for <br> is temporary.
        newC = parser.GetHTML().split("<br>");
   } else {
      newC = c.split("\n");
   }
   
   // Populate the associated gist table.
    if(gInfo[reqFileName]["table"] === true){
        popTabDec(newC, reqFileName);
    }
    else{
        popDivDec(newC, reqFileName);
    }
   
   
   /*gZ += 1;
   if (gZ < gD.length) {
      getGist();
   } else {
      // We are done. Do no more.
      return;
   }*/
}

// Content to be populated passed in as c.
function popTabDec(c, rfn) {
   // Get element by gist ID.
   var flag = false;
   //console.log(rfn);
   for (var gist of gD){
      //console.log(gist.id);
      if (gist.fn === rfn){
         var table = document.getElementById(gist.id);
         //console.log(table);
         flag = true;
      }
   }
   if (!flag){
      return;
   }
   

   for (var i = 0; i < c.length; i++) {
      var tr = document.createElement("tr");
      tr.className = "codesnip-row";
      var td1 = document.createElement("td");
      td1.className = "line-num";
      td1.innerHTML = (i+1).toString() + " ";
      var td2 = document.createElement("td");
      td2.innerHTML = c[i];
      td2.className = "line-code";
      tr.appendChild(td1);
      tr.appendChild(td2);
      table.appendChild(tr);
   }
   return;
}

// Content to be populated passed in as c.
function popDivDec(c, rfn) {
   // Get element by gist ID.
   var flag = false;
   for (var gist of gD){
      if (gist.fn === rfn){
            console.log(gist.id);
         var div = document.getElementById(`${gist.id}_code`);
         var div_ln = document.getElementById(`${gist.id}_linenumber`);
         flag = true;
      }
   }
   if (!flag){
      return;
   }
    div.innerHTML = c.join("<br>");
    let lineNumbers = [];
    for(let i=0; i<c.length; i++){
      lineNumbers.push(i.toString(10))
    }
    div_ln.innerHTML = lineNumbers.join("<br>");
   return;
}

class LC3SourceLine {
    constructor(assemblyLine, sourceNumber){
       this.originalLine = assemblyLine;
       this.sourceNumber = sourceNumber;
 
       let matches = assemblyLine.matchAll(lc3Regex);
       let choppedHTMLText = new Array(matches.length);
       for(let match of matches){
          let text = match[0];
          match[0] = undefined;
          let type = match.findIndex((el) => el !== undefined);
          choppedHTMLText.push(this.DecorateHTMLText(text, type));
       }
       this.htmlLine = choppedHTMLText.join("");
       return;
    }
 
    DecorateHTMLText(text, type){
       let decText = "";
       switch(type){
          case Groups.COMMENT:
             decText = `<span class="comment">${text}</span>`;
             break;
          case Groups.DIRECTIVE:
             decText = `<span class="directive">${text}</span>`;
             break;
          case Groups.LABEL:
             decText = `<span class="label">${text}</span>`;
             break;
          case Groups.NUMBER:
             decText = `<span class="number">${text}</span>`;
             break;
          case Groups.OPCODE:
             decText = `<span class="opcode">${text}</span>`;
             break;
          case Groups.OS_CALL:
             decText = `<span class="oscall">${text}</span>`;
             break;
          case Groups.REGISTER:
             decText = `<span class="register">${text}</span>`;
             break;
          case Groups.STRING:
             decText = `<span class="string">${text}</span>`;
             break;
          case Groups.WHITESPACE:
             decText = text;
             break;
          case Groups.UNKNOWN:
             decText = `<span class="unknown">${text}</span>`;
             break;
          
          default:
             decText = `<span class="unknown">${text}</span>`;
       }
       return decText;
    }
}


/* LC3Parser class */
class LC3Parser {
    constructor(){
       this.valid = false;
       this.sourceLines = [];
       return;
    }
 
    /* Must be ran before accessing results. */
    LoadLC3(assemblyCode){
       let sourceNumber = 1;
       for (const line of assemblyCode.split(/\r?\n/g)){
          this.sourceLines.push(new LC3SourceLine(line, sourceNumber));
          sourceNumber += 1;
       }
       this.valid = true;
       return;
    }

    GetHTML(){
       if(!this.valid){
          return "LC3 has not been loaded.";
       }
       let html = [];
       for(const line of this.sourceLines){
          html.push(line.htmlLine);
       }
       return html.join("<br>");
    }
 }
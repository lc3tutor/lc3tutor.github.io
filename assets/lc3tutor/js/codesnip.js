//window.addEventListener('load', onLoad);

// Code snippet location.
// /home/lc3code/

// Keywords to check for.
const dirSet = new Set([".orig", ".end", ".fill", ".stringz", ".blkw"]);
const osSet = new Set(["getc", "out", "puts", "in", "putsp", "halt"]);
const opSet = new Set(["add", "and", "br", "brn", "brz", "brp", "brnz",
					   "brzp", "brnp", "brnzp", "jmp", "jsr", "jsrr",
					   "ld", "ldi", "ldr", "lea", "not", "ret", "rti",
					   "st", "sti", "str", "trap"]);
const regSet = new Set(["r0", "r1", "r2", "r3", "r4", "r5", "r6", "r7"]);

// List of gist on page.
let gL = [];
// Index of gist to be loaded and parsed.
let gI = 0;

// Get the next gist content in the loaded page.
function getGist(gistID) {
	/*if (gL.length === 0) {
		// No gist, break chain.
		return;
	}*/
	var req = new XMLHttpRequest();
	req.onload = loadGist;
	//req.open("GET", gL[gI].id);
	req.open("GET", gistID);
	req.send();
	return;
}

// When page loads.
//function onLoad(event) {
function onLoadGist(gistID){
	//gL = document.getElementsByClassName("gistTab");
	gL.push({"id" : gistID, "fn" : gistID.split("/").pop()});
	//console.log(gL);
	// Start first gist get.
	getGist(gistID);
}

function loadGist() {
	// `this` is the XMLHTTPRequest object that
	// this function is attached to.
	//console.log(this);
	c = this.responseText;
	var reqFileName = this.responseURL.split("/").pop();
	//console.log(reqFileName);
	// New c is an array of lines.
	
	// If not .asm file, then ignore.
	if (gL[gI].id.includes(".asm")) {
		newC = parseContent(c);
	} else {
		newC = c.split("\n");
	}
	
	// Populate the associated gist table.
	popTab(newC, reqFileName);
	
	/*gI += 1;
	if (gI < gL.length) {
		getGist();
	} else {
		// We are done. Do no more.
		return;
	}*/
}

// c is passed in as string of all gist content.
function parseContent(c) {
	
	c = c.replace(/\t/g, "\t ");
	c = c.split("\n");
	for (var i = 0; i < c.length; i++) {
		// Parse line of c.
	    c[i] = parseL(c[i]);
	}
	return c;
}

// Parse line of content.
function parseL(content) {
	// Search for strings and semi-colons.
	// Assume only one string per line.
	let quo = [];
	let com = [];
	let comIndex = -1;
	content += "0";
	for (var j = 0; j < content.length-1; j++) {
		if (content.substring(j, j+1) === "\"") {
			quo.push(j);
		}
		if (content[j] == ";") {
			com.push(j);
		}
	}
	content = content.substring(0, content.length-1);
	
	// Add comment span tags.
	comIndex = -1;
	for (var k = 0; k < com.length; k++) {
		// Take the first semi-colon.
		if (quo.length === 0) {
			comIndex = com[k];
			break;
		// If in quotes, ignore.
		} else if ((com[k] > quo[0]) && (com[k] < quo[quo.length-1])) {
			continue;
		} else { // Not in quotes this is it.
			comIndex = com[k];
			break;
		}
	}
	
	tempContent = content;
	
	if (comIndex >= 0) {
		commentStr = tempContent.substring(comIndex, tempContent.length);
		tempContent = tempContent.substring(0, comIndex-1);
	} else {
		commentStr = "";
	}
	// Add string span tags.
	if (quo.length >= 2){
		// Check that string is in front of comment.
		if (quo[quo.length-1] < comIndex) {
			stringStr = tempContent.substring(quo[0], quo[quo.length-1]+1);
			tempContent = content.substring(0, quo[0]-1);
		}
	} else {
		stringStr = "";
	}
	
	
	tempContent1 = tempContent;
	tempContent = tempContent.split(/ /g);
	
	for (var k = 0; k < tempContent.length; k++) {
		if (dirSet.has(tempContent[k].toLowerCase())) {
			tempContent[k] = "<span class=\"directive\">" + tempContent[k] + "</span>";
		}
		if (osSet.has(tempContent[k].toLowerCase())) {
			tempContent[k] = "<span class=\"oscall\">" + tempContent[k] + "</span>";
		}
		if (opSet.has(tempContent[k].toLowerCase())) {
			tempContent[k] = "<span class=\"opcode\">" + tempContent[k] + "</span>";
		}
		// We must not work around commas.
		tempContent2 = tempContent[k].replace(/,/g, " ");
		//console.log(tempContent2);
		tempContent2 = tempContent2.split(" ");
		//console.log(tempContent2);
		// Will need to determine a way to target a specific keyword. I.e. r0,r0 and
		// not a label with r0 in it, i.e. OS_SAVE_R0.
		for (var l = 0; l < tempContent2.length; l++) {
			if (regSet.has(tempContent2[l].toLowerCase())) {
				var regRegExp = new RegExp(tempContent2[l], "g"); 
				tempContent[k] = tempContent[k].replace(regRegExp, "<span class=\"register\">" + tempContent2[l] + "</span>"); 
			}
			if (hasNumber(tempContent2[l])) {
				tempContent[k] = tempContent[k].replace(tempContent2[l], "<span class=\"number\">" + tempContent2[l] + "</span>");
			}
		}
	}
	tempContent = tempContent.join(" ");
	
	if (tempContent.length > 0) {
		content = content.replace(tempContent1, tempContent);
	}
	if (commentStr.length > 0) {
		content = content.replace(commentStr, "<span class=\"comment\">" + commentStr + "</span>");
	}
	if (stringStr.length > 0) {
		content = content.replace(stringStr, "<span class=\"string\">" + stringStr + "</span>");
	}
	content = content.replace(/\t /g, "\t");
	return content;
}

// Checks if keyword (kw) is a number.
function hasNumber(kw) {
	
	// Check for hex, dec, bin.
	var kw2 = kw.replace(/x|h|#|\t/g, "");
	var x = parseInt(kw2, 16);
	x = x.toString(16);
	x = "0000" + x;
	x = x.substring(x.length-4, x.length);
	var d = parseInt(kw2, 10);
	var b = parseInt(kw2, 2);
	if (x === kw2.toLowerCase()) {
		return true;
	}
	if (d.toString(10) === kw2.toLowerCase()) {
		return true;
	}
	if (b.toString(2) === kw2.toLowerCase()) {
		return true;
	}

	return false;
}

// Content to be populated passed in as c.
function popTab(c, rfn) {
	// Get element by gist ID.
	var flag = false;
	//console.log(rfn);
	for (var gist of gL){
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
		var td1 = document.createElement("td");
		td1.className = "line-num"
		td1.innerHTML = (i+1).toString() + " ";
		var td2 = document.createElement("td");
		td2.innerHTML = c[i];
		tr.appendChild(td1);
		tr.appendChild(td2);
		table.appendChild(tr);
	}
	return;
}

/*
 * It is assumed that the fields already exist in html.
 *
 */

//window.addEventListener('load', onLoad);

// Ideally the javascript could be loaded with the post at the end.
// Once I determine a way to best load the javascript we will use:
// const objBaseConv = new baseConv();
var objBaseConv = null;
var objCalc2sc = null;
function callBaseConv() {
	objBaseConv = new baseConv();
	objCalc2sc = new calc2sc();
}
class baseConv {
	constructor() {
		this.bases = {dec:0, bin:1, hex:2} // Type identifier.
		// Get the input/output field.
		this.idList = ["inDecimal", "inBinary", "inHex", "convStatus"];
		this.dftV = ["0", "0000000000000000", "0000"];
		this.idObj = {};
		for (const id of this.idList) {
			this.idObj[id] = document.getElementById(id);
		}

		// First three elements are the inputs.
		for (let i = 0; i < 3; i++) {
			let id = this.idList[i];
			this.idObj[id].value = this.dftV[i];
			this.idObj[id].addEventListener("keyup", this.pIn.bind(this));
		}
	}
	// The event object tells us who sent the keystroke.
	pIn(e) {
		// The order is always decimal, binary, hex.
		let id = e.target.id;
		let val = e.target.value;
		
		let valid = false;
		switch(this.idList.indexOf(id)){
			case this.bases.dec:
				valid = this.hDec(val);
			  	break;
			case this.bases.bin:
				valid = this.hBin(val);
				break;
			case this.bases.hex:
				valid = this.hHex(val);
				break;
			default:
		}	
		
		if(valid){
			this.idObj[this.idList[3]].innerHTML = "Successful conversion!"
			this.idObj[id].style.color = "black";
		}
		else{
			this.idObj[id].style.color = "red";
		}
		return;
	}
	hDec(input){
		let valid = false;
		let val = parseInt(input, 10);
		let cond1 = isNaN(val); // Is a number.
		let cond2 = ((val < -32768) || (val > 32767));
		
		if(cond1 || cond2){
			this.idObj[this.idList[3]].innerHTML = "Invalid decimal input.";
		}
		else{
			valid = true;
			this.uBin(val);
			this.uHex(val);
		}
		return valid;
	}
	hBin(input){
		let valid = false;
		let val = parseInt(input, 2);
		let cond1 = isNaN(val);
		let cond2 = input.length != 16;
		let cond3 = false;
		for(let i = 0; i < input.length; i++){
			if((input[i] != '1') && (input[i] != '0')){
				cond3 = true;
			}
		}

		if(cond1 || cond2 || cond3){
			this.idObj[this.idList[3]].innerHTML = "Invalid binary input.";
		}
		else{
			valid = true;
			this.uHex(val);
			this.uDec(this.bases.bin, input[0], val);
		}
		return valid;
	}
	hHex(input){
		let valid = false;
		let val = parseInt(input, 16);
		let cond1 = isNaN(val);
		let cond2 = input.length != 4;
		let cond3 = false;
		for(let i = 0; i < input.length; i++){
			if((input[i] < '0') || (input[i] > 'f' ) ||
			   (input[i] > '9') && (input[i] < 'A' ) ||
			   (input[i] > 'F') && (input[i] < 'a' )){
					cond3 = true;
			}
		}

		if(cond1 || cond2 || cond3){
			this.idObj[this.idList[3]].innerHTML = "Invalid hexadecimal input.";
		}
		else{
			valid = true;
			this.uBin(val);
			this.uDec(this.bases.hex, input[0], val);
		}
		return valid;
	}
	uDec(b, ms, v){
		let cond1 = (b == this.bases.bin) && (ms == '1');
		let cond2 = (b == this.bases.hex) && (ms >  '7');
		if(cond1 || cond2){
			v = ((~v + 1) & 0xFFFF) * -1;
		}
		this.idObj[this.idList[0]].value = v.toString(10);
		return;
	}
	uBin(v){
		if(v < 0){
			v = (~(-1 * v) + 1) & 0xFFFF;
		}		
		let vStr = v.toString(2);
		let msb = '0'; // I think '1' is taken care of.

		let c = 16 - vStr.length;
		for (let i = 0; i < c; i++){
			vStr = msb + vStr;
		}
		this.idObj[this.idList[1]].value = vStr;
		return;
	}
	uHex(v){
		if(v < 0){
			v = (~(-1 * v) + 1) & 0xFFFF;
		}		
		let vStr = v.toString(16);
		let msn = '0'; // 'F' is taken care off.

		let c = 4 - vStr.length;
		for (let i = 0; i < c; i++){
			vStr = msn + vStr;
		}
		this.idObj[this.idList[2]].value = vStr.toUpperCase();
	}
}

class calc2sc {
	constructor() {
		this.idList = ["inOp1", "inOp2", "outResult", "txtboxResult", "calcStatus", "selPlusMinus"];
		this.dftV = "0000000000000000";
		this.idObj = {};
		for (const id of this.idList) {
			this.idObj[id] = document.getElementById(id);
		}

		for (let i = 0; i < 3; i++) {
			this.idObj[this.idList[i]].value = this.dftV;
		}
		document.getElementById("calcBtn")
			.addEventListener("click", this.calc.bind(this));
	}
	calc (){
		let valid = true;
		let status = this.idObj[this.idList[4]];
		let ivS = "Invalid operand x, check if 16b and only 1 or 0."
		let op1 = this.idObj[this.idList[0]].value;
		let op2 = this.idObj[this.idList[1]].value;
		let selV = this.idObj[this.idList[5]].value;

		let cond = op1.length != 16;
		for(let b of op1){
			if((b != '1') && (b != '0')){
				cond = true;
			}
		}
		if(cond){
			valid = false;
			status.innerHTML = ivS.replace("x", "1");
		}

		cond = op2.length != 16;
		for(let b of op2){
			if((b != '1') && (b != '0')){
				cond = true;
			}
		}
		if(cond){
			valid = false;
			status.innerHTML = ivS.replace("x", "2");
		}

		if(valid){
			let v1 = parseInt(op1, 2);
			let v2 = parseInt(op2, 2);
			if(op1[0] == '1'){
				v1 = ((~v1 + 1) & 0xFFFF) * -1;
			}
			if(op2[0] == '1'){
				v2 = ((~v2 + 1) & 0xFFFF) * -1;
			}
			
			let v3 = 0;
			if(selV == "minus"){
				v3 = v1 - v2;
			}
			else {
				v3 = v1 + v2;
			}
			
			if(v3 < 0){
				v3 = (~(-1 * v3) + 1) & 0xFFFF;
			}
			
			let vStr = v3.toString(2);
		
			let c = 16 - vStr.length;
			for (let i = 0; i < c; i++){
				vStr = '0' + vStr;
			}
			
			this.idObj[this.idList[2]].value = vStr;
			
			status.innerHTML = "Successful calculation! Check output below.";
			this.uTxtBox(op1, op2, vStr, selV);
		}
		return;
	}
	uTxtBox(o1, o2, vS, sel) {
		// Cin initial is '0'. Cout is based on Cin, op1, op2. There is space before last carry out.
		// Cin,op1,op2 --> integer. If sum is > 1, Cin is '1' otherwise '0'.
		// 000 - 0
		// 001 - 0
		// 011 - 1
		// 111 - 1
		let Cin = '0';
		let cS = "";
		
		let op = "";
		if(sel == "minus"){
			op = "-";
		}
		else{
			op = "+";
		}
		
		for(let i = 15; i > 0; i--){
			if(parseInt(Cin, 10) + parseInt(o1[i], 10) + parseInt(o2[i], 10) > 1){
				Cin = '1';
			} else {
				Cin = '0';
			}
			cS = Cin + cS;
		}
		cS = " " + cS;
		if(parseInt(Cin, 10) + parseInt(o1[0], 10) + parseInt(o2[0], 10) > 1){
			Cin = '1';
		} else {
			Cin = '0';
		}
		// This is not formatted correctly?
		cS = "\n " + Cin + cS + "\n";
		cS += "  " + " <b>" + o1 + "</b>\n";
		cS += " " + op + " <b>" + o2 + "</b>\n";
		cS += "--------------------\n";
		cS += " " + Cin + " <b>" + vS + "</b>";
		this.idObj[this.idList[3]].innerHTML = cS;
	}
}
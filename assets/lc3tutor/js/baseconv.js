
/*
 * Need to clean up and organize javascript code.
 *
 */

window.addEventListener('load', onLoad);


// Get the input field
var in_dec = document.getElementById("inDecimal");
var in_bin = document.getElementById("inBinary");
var in_hex = document.getElementById("inHex");
var out_dec = document.getElementById("outDecimal");
var out_bin = document.getElementById("outBinary");
var out_hex = document.getElementById("outHex");

var status_val = document.getElementById("lbl_status");
var result_status_val = document.getElementById("lbl_calc_status");

var sel_val = document.getElementById("selPlusMinus");

var in_op1 = document.getElementById("inOp1");
var in_op2 = document.getElementById("inOp2");
var out_result = document.getElementById("outResult");

var txtbox_result = document.getElementById("txtboxResult");

const input_type = {
	binary: 0,
	decimal: 1,
	hex: 3,
	unknown : 4
}

// Handle input from binary input html element.
in_bin.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    parse_input(input_type.binary, in_bin.value);
  }
});

// Handle input from decimal input html element.
in_dec.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    parse_input(input_type.decimal, in_dec.value);
  }
});

// Handle input from hexadecimal input html element.
in_hex.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    parse_input(input_type.hex, in_hex.value);
  }
});

// Global Variables


		
/*
 * When page loads.
 *
 */
function onLoad(event) {
	reset_input();
}

function reset_input() {
	in_dec.value = "0";
	in_bin.value = "0000000000000000";
	in_hex.value = "0000";	
	
	in_op1.value = "0000000000000000";
	in_op2.value = "0000000000000000";
	out_result.value = "0000000000000000";
}

// 2sC hexadecimal characters (1 msb): 8 - F.
function parse_input(click_src, input_str) {
	
	switch(click_src){
		case input_type.binary:
			if(handle_binary_input(input_str) == false){
				return;
			}
		  break;
		case input_type.decimal:
		  if(handle_decimal_input(input_str) == false){
			  return;
		  }
		  break;
		case input_type.hex:
			if(handle_hexadecimal_input(input_str) == false){
				return;
			}
		  break;
		default:
	}	
		
	status_val.innerHTML = "Successful conversion!";
}

function check_valid_input(click_src, input_str) {
	let flg_valid = true;
	let val = 0;
	
	switch(click_src){
		case input_type.binary:
		  if(input_str.length != 16){
			  status_val.innerHTML = "Invalid binary input.";
			  flg_valid = false;
			  break;
		  }
		  for(i=0; i<input_str.length; i++) {
			if((input_str[i] != '1') && (input_str[i] != '0' )){
			  status_val.innerHTML = "Invalid binary input.";
			  flg_valid = false;
			  break;
			}
		  }
		  break;
		case input_type.decimal:
		  break;
		case input_type.hex:
		  if(input_str.length != 4) {
			  status_val.innerHTML = "Invalid hexadecimal input.";
			  flg_valid = false;
		  }
		  for(i=0; i<input_str.length; i++) {
			if((input_str[i] < '0') || (input_str[i] > 'f' ) ||
			   (input_str[i] > '9') && (input_str[i] < 'A' ) ||
			   (input_str[i] > 'F') && (input_str[i] < 'a' )){
			  status_val.innerHTML = "Invalid hexadecimal input.";
			  flg_valid = false;
			  break;
			}
		  }
		  break;
		default:
	}
	
	return flg_valid;
}

function convert_to_value(click_src, input_str) {
	let flg_neg = false;
	let val = 0;
	
	// Parse the input according to which input caused the event.
	switch(click_src){
		case input_type.binary:
		  if(input_str[0] == '1'){
			  flg_neg = true;
		  }
		  val = parseInt(input_str, 2);
		  break;
		case input_type.decimal:
		  val = parseInt(input_str, 10);
		  if(val < 0){
			  flg_neg = true;
			  val = -1 * val;
		  }
		  break;
		case input_type.hex:
		  if(input_str[0] > '7')
		  val = parseInt(input_str, 16);
		  break;
		default:
	}
	
	return {
		value : val,
		neg : flg_neg,
	}
}

function handle_decimal_input(input_str){
	
	let val = parseInt(input_str, 10);
	
	if(val < -32768 || val > 32767){
		status_val.innerHTML = "Invalid decimal input.";
		return false;
	}
	
	out_dec.innerHTML = input_str;
	
	if(val < 0){
		
		val = -1 * val;
		
		val = ~val;
		val = val + 1;
		val = val & 0xFFFF;
	}
	
	update_binary_input(val);
	update_hexadecimal_input(val);
	
	return true;
}

function handle_binary_input(input_str){
	
	if(input_str.length != 16){
		  status_val.innerHTML = "Invalid binary input.";
		  return false;
	  }
	  for(i=0; i<input_str.length; i++) {
		if((input_str[i] != '1') && (input_str[i] != '0' )){
		  status_val.innerHTML = "Invalid binary input.";
		  return false;
		}
	}
	
	out_bin.innerHTML = input_str;
	
	let val = parseInt(input_str, 2);
	update_hexadecimal_input(val);
	
	if(input_str[0] == '1'){
		val = ~val;
		val = val + 1;
		val = val & 0xFFFF;
		val = -1 * val;
	}
	out_dec.innerHTML = val.toString(10);
	
	return true;
}

function handle_hexadecimal_input(input_str) {
	
	if(input_str.length != 4) {
		status_val.innerHTML = "Invalid hexadecimal input.";
		return false;
	}
	for(i=0; i<input_str.length; i++) {
		if((input_str[i] < '0') || (input_str[i] > 'f' ) ||
		   (input_str[i] > '9') && (input_str[i] < 'A' ) ||
		   (input_str[i] > 'F') && (input_str[i] < 'a' )){
			status_val.innerHTML = "Invalid hexadecimal input.";
			return false;
		}
	}
	
	out_hex.innerHTML = input_str;
	
	let val = parseInt(input_str, 16);
	update_binary_input(val);
	
	if(input_str[0] > '7'){
		val = ~val;
		val = val + 1;
		val = val & 0xFFFF;
		val = -1 * val;
	}
	out_dec.innerHTML = val.toString(10);
	
	return true;
}

function update_binary_input(val){

	let val_str = val.toString(2);
	let msb_char = '0';

	counter = 16-val_str.length;
	if(val_str.length < 16){
		for (i=0; i < counter; i++){
			val_str = msb_char + val_str;
		}
	}
	out_bin.innerHTML = val_str;
}

function update_hexadecimal_input(val){

	let val_str = val.toString(16);
	let msb_char = '0';

	counter = 4-val_str.length;
	if(val_str.length < 4){
		for (i=0; i < counter; i++){
			val_str = msb_char + val_str;
		}
	}
	out_hex.innerHTML = val_str;
}

function btnCalculate(){
	let op1_str = in_op1.value;
	let op2_str = in_op2.value;
	
	if(op1_str.length != 16){
		result_status_val.innerHTML = "Invalid operand 1, not 16 bits.";
		return;
	}
	if(op2_str.length != 16){
		result_status_val.innerHTML = "Invalid operand 2, not 16 bits.";
		return;
	}
	for(i=0; i<op1_str.length; i++) {
		if((op1_str[i] != '1') && (op1_str[i] != '0' )){
			result_status_val.innerHTML = "Invalid operand 1, only 1 and 0 allowed.";
			return;
		}
	}
	for(i=0; i<op2_str.length; i++) {
		if((op2_str[i] != '1') && (op2_str[i] != '0' )){
			result_status_val.innerHTML = "Invalid operand 2, only 1 and 0 allowed.";
			return;
		}
	}
	
	val1 = parseInt(op1_str, 2);
	val2 = parseInt(op2_str, 2);
	
	if(op1_str[0] == '1'){
		val1 = ~val1;
		val1 = val1 + 1;
		val1 = val1 & 0xFFFF;
		val1 = -1 * val1;
	}
	if(op2_str[0] == '1'){
		val2 = ~val2;
		val2 = val2 + 1;
		val2 = val2 & 0xFFFF;
		val2 = -1 * val2;
	}
	
	if(sel_val.value == "minus"){
		val3 = val1 - val2;
	}
	else {
		val3 = val1 + val2;
	}
	
	if(val3 < 0){
		val3 = -1 * val3;
		val3 = ~val3;
		val3 = val3 + 1;
		val3 = val3 & 0xFFFF;
	}
	
	let val_str = val3.toString(2);
	let msb_char = '0';

	let counter = 16-val_str.length;
	if(val_str.length < 16){
		for (i=0; i < counter; i++){
			val_str = msb_char + val_str;
		}
	}
	
	out_result.value = val_str;
	
	result_status_val.innerHTML = "Successful calculation!";
	//console.log(sel_val.value);
	
	update_math_txtbox(op1_str, op2_str, val_str, sel_val.value);
}

function update_math_txtbox(op1_str, op2_str, result_str, sel_str) {
	
	// Cin initial is '0'. Cout is based on Cin, op1, op2. There is space before last carry out.
	// Cin,op1,op2 --> integer. If sum is > 1, Cin is '1' otherwise '0'.
	// 000 - 0
	// 001 - 0
	// 011 - 1
	// 111 - 1
	txtbox_result.innerHTML = "   Hello\n\tWorld !";
	
	let Cin = '0';
	let carry_str = "";
	
	if(sel_val.value == "minus"){
		op = "-";
	} else {
		op = "+";
	}
	
	for(i=15; i>0; i--){
		if(parseInt(Cin, 10) + parseInt(op1_str[i], 10) + parseInt(op2_str[i], 10) > 1){
			Cin = '1';
		} else {
			Cin = '0';
		}
		carry_str = Cin + carry_str;
	}
	carry_str = " " + carry_str;
	if(parseInt(Cin, 10) + parseInt(op1_str[i], 10) + parseInt(op2_str[i], 10) > 1){
		Cin = '1';
	} else {
		Cin = '0';
	}
	
	
	// This is not formatted correctly.
	
	carry_str = "\n " + Cin + carry_str + "\n";
	carry_str += "  " + " <b>" + op1_str + "</b>\n";
	carry_str += " " + op + " <b>" + op2_str + "</b>\n";
	carry_str += "--------------------\n";
	carry_str += " " + Cin + " <b>" + result_str + "</b>";
	//txtbox_result.innerHTML = " " + carry_str + "\n" + "   <b>" + op1_str + "</b>\n" + "--------------------\n" + " " + Cin + " " + op2_str;
	txtbox_result.innerHTML = carry_str;
}
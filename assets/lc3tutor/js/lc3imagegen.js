
var lc3IG = null;
function callLC3ImageGenerator() {
	lc3IG = new LC3ImageGenerator()
}

class pixel {
  	constructor(ctx, x, y, w, c='#000000') {
    	this.ctx = ctx;
		this.x = x;
    	this.y = y;
		this.w = w;
		this.c = c;
		this.fill(c);
  	}
	fill(c) {
		this.c = c;
		this.ctx.fillStyle = c;
		this.ctx.fillRect(this.x, this.y, this.w, this.w);
	}
	getRGB555() {

	}
}

class LC3Image {
	constructor(canvas) {
		this.ctx = canvas.getContext('2d');
		this.cW = canvas.width;
		this.cH = canvas.height;
		this.lp = 10; // Left padding
		this.tp = 10; // Top padding
		this.pW = 10; // Pixel width
		this.mS = 50; // Max image size (one side)
		this.w = 10; // Image width
		this.h = 10; // Image height
		this.pixels = []; // Image pixesl
		this.UpdateSize(this.w, this.h);
	}
	// w and h are filtered before hand.
	UpdateSize(w, h) {
		// Get width and height from text box.
		let maxSize = this.maxSize;
		let ctx = this.ctx;
		let pW = this.pW;

		ctx.clearRect(0, 0, this.cW, this.cH);
		this.pixels = [];
		
		let lOffset = (this.cW - (w*pW))/2;
		let tOffset = (this.cH - (h*pW))/2;
		for(let i = 0; i < h; i++){
			for(let j = 0; j < w; j++){
				let x = j*pW + lOffset;
				let y = i*pW + tOffset;
				this.pixels.push(new pixel(ctx, x, y, pW));
			}
		}
		
		// Draw bright green border - left, right, top, bottom
		ctx.fillStyle = '#65FE08';
		ctx.fillRect(lOffset-4,tOffset-4,4,h*pW+8);
		ctx.fillRect(lOffset+w*pW,tOffset-4,4,h*pW+8);
		ctx.fillRect(lOffset-4,tOffset-4,w*pW+8,4);
		ctx.fillRect(lOffset-4,tOffset+h*pW,w*pW+8,4);
		return;
	}
	DrawPixel(x, y, c) {
		for(let p of this.pixels) {
			let inBox = ((x>=p.x) & (x<(p.x+p.w))) &
						((y>=p.y) & (y<(p.y+p.w)));
			if(inBox){
				p.fill(c);
				break;
			}
		}

		/* Debug code to check rgb888 to rgb565 conversion.
		let rgb888 = parseInt(theColor.slice(1),16);
		let rgb555 = ((rgb888 & 0xf80000) >> 8) | ((rgb888 & 0xf800) >> 6) | ((rgb888 & 0xf8) >> 3);
		rgb555 = rgb555 & 0x007FFF;
		console.log(rgb555.toString(16));*/
	}
}

class LC3ImageGenerator {
	constructor () {
		this.canvas = document.getElementById("pixelCanvas");
		this.image = new LC3Image(this.canvas);
		this.iW = document.getElementById('txtboxWidth');
		this.iH = document.getElementById('txtboxHeight');
		this.mS = 50;
		var that = this;
		document.getElementById("btnLC3ImageSize")
			.addEventListener("click", function(ev){	
				if(that.iW.value > that.mS){
					that.iW.value = that.mS;
				}
				if(that.iH.value > that.mS){
					that.iH.value = that.mS;
				}
				that.image.UpdateSize(that.iW.value, that.iH.value);
			}
		);
		document.getElementById("btnGenerateCode")
			.addEventListener("click", function(ev){	
				that.GenCode();
			}
		);
		this.canvas.addEventListener("mousedown", function(ev) {
			let [x, y, c] = that.getMousePos(ev);
			that.image.DrawPixel(x, y, c);
		});
		return;
	}
	// Get the mouse position on the canvas.
	getMousePos(ev) {
		let imgBorder = this.canvas.getBoundingClientRect();
		let x = ev.clientX - imgBorder.left;
		let y = ev.clientY - imgBorder.top;
		let selColor = document.getElementById('selColor').value;

		return [x, y, selColor];
	}
	GenCode() {
		let ignColor = document.getElementById('ignColor').value;
		// Explore using string interpolation.
		// Add prefix option.
		// Add origin option.
		// Add code size: pixels.length + 1 for origin
		// Add encoding for image????? Width, height, rowoffset?
		let codeStr = "<br>; LC-3 Image Generator<br><br>";
	
		codeStr = codeStr + "; Change to desired start location.<br>";
		codeStr = codeStr + ".ORIG x5000<br><br>";
		
		codeStr = codeStr + "; Width = " + this.image.w + ", Height = " + this.image.h + "<br><br>";
		
		codeStr = codeStr + "; Using lc3ig prefix to ensure unique labels.<br>";
		
		for(let i = 0; i < this.image.pixels.length; i++){
			
			let rowStr = (parseInt(i/this.image.w)).toString();
			let colStr = (i%this.image.h).toString();
			let rgb888 = parseInt(this.image.pixels[i].c.slice(1),16);
			let rgb555 = ((rgb888 & 0xf80000) >> 8) | ((rgb888 & 0xf800) >> 6) | ((rgb888 & 0xf8) >> 3);
			if(this.image.pixels[i].c == ignColor){
				rgb555 = rgb555 & 0x007FFF;
			}
			else{
				rgb555 = rgb555 & 0x007FFF;
				rgb555 = rgb555 | 0x008000;
			}
			let colorStr = "x" + rgb555.toString(16);
			codeStr = codeStr + "lc3ig" + "R" + rowStr + "C" + colStr + " .FILL " + colorStr + "<br>";
		}	
		
		codeStr = codeStr + "<br>.END";
		
		document.getElementById('txtboxCode').innerHTML = codeStr;
	}
	CopyCode(){
		//navigator.clipboard.writeText(copyText.value);
	}
}
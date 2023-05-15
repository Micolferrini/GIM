

function setup(){
	createCanvas(windowWidth, windowHeight)
		
}
background(300)
//background sopra a function per lasciare scia

function draw(){

	let ora = hour() + ":" + minute() + ":" + second()
	
	//background(300)

	textSize(50)
	textFont("monospace")
	textAlign(CENTER, CENTER)
	fill(random(255), random(255), random(255))
	text(ora, mouseX, mouseY)
}


function mousePressed(){

	if()



}
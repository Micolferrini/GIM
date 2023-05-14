let posizioneX 
//variabile per spostamento cerchio x

let posizioneY 
//variabile per spostamento cerchio y


let velocitàX 
let velocitàY 


function setup(){
	createCanvas(600, 400)

	posizioneX = width/2
	posizioneY = height/2
	velocitàX = random (-4, 4)
	velocitàY = random (-4, 4)
	background(200)
}

function draw(){
	noStroke()
	fill(random(200,255), random(100), random(100))

	ellipse(posizioneX, posizioneY,  20,20)

	posizioneX = posizioneX + velocitàX
 
	posizioneY = posizioneY + velocitàY

	//condizione per ottenere che la pallina rimbalzi 
	//if(posizioneX >= width) velocitàX = -velocitàX
	//if(posizioneX <= height) velocitàX = -velocitàX

	//if(posizioneX >= 600 || posizioneX <= 0) velocitàX = -velocitàX   raggruppa 

	if (posizioneX >= width ||  posizioneX <= 0)  velocitàX = -velocitàX
    if (posizioneY >= height ||  posizioneY <= 0)  velocitàY = -velocitàY	
}

function keyPressed (){

	save("pong.png")


}
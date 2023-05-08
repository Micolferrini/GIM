function setup(){
	createCanvas(400, 400)
}

function draw(){
	background(220,220,220)
	
//il disegno è dinamico si ricarica ogni 60 secondi 
	//dentro due () vuol dire che c'è una funzione con dei parametri
// valore max 255 
// 0, 0, 0 , 0 = nero; es. 220, 220, 220, 220 = grigio

	point(30, 50)
	point(31,50)
	point(32,50)
	point(33,50)
	point(34,50)
	point(35,50)
	point(36,50)
	
	fill (255,0, 0)
	stroke(0,200,0)
	// 

// funzione che dissegna un segmento shft cmd 7 per colorare come commento
// si può nascondere un codice con queste senza cancellare 
// l'ordine nelle istruzioni comporta se sopra o sotto 
	

    noStroke(0,200,0)
    rect(120,120,120,90)
	strokeWeight(3)
	rect(150,150,90)

	line(50,60,200,280)

	point (0,0)
	fill(0, 180, 240, 128)

	ellipse(270,200,40,40)
	ellipse(230,270,80,80)

	noFill()
	
	//quando ci sono delle parole composte si utilizzano le maiuscole
	triangle(340,90, 390,160, 240,180)
	//primi 2 la posizione gli ultimi 2 base e l'altezza
	//sito https://p5js.org/libraries/ dove poter copiare o trovare info per programmazione
}
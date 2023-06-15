let posizioneX; // variabile per spostamento cerchio x
let posizioneY; // variabile per spostamento cerchio y
let velocitàX;
let velocitàY;
let angolo = 120; // variabile per l'angolo di rotazione

function setup() {
  createCanvas(windowWidth, windowHeight); // per adattare a schermo

  posizioneX = width / 2;
  posizioneY = height / 2;
  velocitàX = random(-80, 80);
  velocitàY = random(-80, 80);
  background(0);
}

function draw() {
  noStroke();
  fill(random(0, 0, 250), random(0, 0, 250), random(0, 250, 250));

  push(); // salva la trasformazione corrente
  translate(posizioneX, posizioneY); // sposta l'origine alle coordinate del cerchio
  rotate((angolo)); // ruota il sistema di coordinate
  ellipse(0, 0, 80, 80); // disegna la pallina centrata nell'origine
  pop(); // ripristina la trasformazione originale

  posizioneX += velocitàX;
  posizioneY += velocitàY;

  if (posizioneX >= width || posizioneX <= 0) velocitàX = -velocitàX;
  if (posizioneY >= height || posizioneY <= 0) velocitàY = -velocitàY;

  angolo += 1; // aumenta l'angolo di rotazione ad ogni frame
}

function keyPressed() {
  save("pong.png");
}

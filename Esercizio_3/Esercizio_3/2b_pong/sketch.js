let pallini = [];
let numPallini = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < numPallini; i++) {
    let posizioneX = random(40, width - 40);
    let posizioneY = random(40, height - 40);
    let velocitàX = random(-4, 4);
    let velocitàY = random(-4, 4);
    let diametro = 80;

    let pallino = {
      posizioneX: posizioneX,
      posizioneY: posizioneY,
      velocitàX: velocitàX,
      velocitàY: velocitàY,
      diametro: diametro
    };

    pallini.push(pallino);
  }

  background(0);
}

function draw() {
  background(0);

  for (let i = 0; i < pallini.length; i++) {
    let pallino = pallini[i];

    // Aggiorna la posizione del pallino
    pallino.posizioneX += pallino.velocitàX;
    pallino.posizioneY += pallino.velocitàY;

    // Gestisci le collisioni con i bordi
    if (
      pallino.posizioneX <= pallino.diametro / 2 ||
      pallino.posizioneX >= width - pallino.diametro / 2
    ) {
      pallino.velocitàX *= -1;
    }
    if (
      pallino.posizioneY <= pallino.diametro / 2 ||
      pallino.posizioneY >= height - pallino.diametro / 2
    ) {
      pallino.velocitàY *= -1;
    }

    // Disegna il pallino
    noStroke();
    fill(random(0, 0, 250), random(0, 0, 250), random(0, 250, 250));
    ellipse(
      pallino.posizioneX,
      pallino.posizioneY,
      pallino.diametro,
      pallino.diametro
    );
  }
}

function mouseClicked() {
  for (let i = 0; i < pallini.length; i++) {
    let pallino = pallini[i];

    let distanza = dist(
      pallino.posizioneX,
      pallino.posizioneY,
      mouseX,
      mouseY
    );

    if (distanza < pallino.diametro / 2) {
      pallino.diametro += 10;
    }
  }
}

function keyPressed() {
  save("pong.png");
}

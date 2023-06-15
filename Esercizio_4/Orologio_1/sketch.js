function setup(){
	createCanvas(windowWidth, windowHeight)
}

function draw() { 

	let h = hour()
	let m = minute()
	let s = second()
	let ms = new Date().getMilliseconds()

	background(0)

	// spostiamo l'origine in centro 
	translate(width/2, height/2)	
	scale (0.8)
 
	// bordo esterno
	stroke(255)
	noFill(255)
	//circle(0, 0, 440)

	noStroke()
	push()
	for (let i=0; i<60; i++) {

		
        //pallini grossi, ore
		if (i % 5 == 0){
			noStroke()
			fill(225)
			circle(0, -240, 16)
		} else {

            //pallini piccoli, minuti
			noStroke()
			fill(255)		
			circle(0, -220, 4)
        }

        //pallini blu, min
		if(i==m){
			noStroke()
			fill(0,100,255)
			if(i%5==0){
				circle(0, -240, 16) //pallino grossi, min
			
			} else {		
				circle(0, -220, 10)
			}
		}


        if (h>12){
            if (i==(h-12)*5){
                if (i%5==0){
                    noStroke()
                    fill(0)
                    rect(-9,-240, 20, 20)
                    fill(0)
                    if(i!=s){
                        strokeWeight(3)
                        stroke(225, 10, 0)
                        circle(0, -240, 20) //pallino grossi, min
                    }	
                }
            }
        } else {
            if (i==h*5){
                if (i%5==0){
                    noStroke()
                    fill(0)
                    rect(-9,-240, 20, 20)
                    fill(0)
                    if(i!=s){
                        strokeWeight(3)
                        stroke(225, 10, 0)
                        circle(0, -240, 20) //pallino grossi, min
                    }	
                }
            }
        }


		//pallini scomparsi, secondi
		noStroke()
		fill(0)
		if(i==s){
			if(i%5==0){
				rect(-9, -250, 25, 25)
			} else {		
				rect(-9, -230, 25, 25)
			}
		}

		rotate(TWO_PI / 60)
	}
	pop()
    }

	
function windowResized(){
	resizeCanvas(windowWidth, windowHeight)
}
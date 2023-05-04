let tile = 40;
let randomMax = 10;
let stichdicke;


function setup() {
    createCanvas(windowWidth, windowHeight);


}

function draw() {
    randomSeed(2); //stoppt die Random-Bewegung > macht ein statisches Bild 
    background("yellow");


    for (let x = 0; x < width; x = x + tile) {
        //console.log(x);
        for (let y = 0; y < height; y = y + tile) { //y+tile+Zahle gibt eine Lücke zwischen den Linien 

            let abstand = int(random(-1 * randomMax, randomMax));

            if (x < width / 2) {
                stroke(100, 200, 255);
                strichdicke = map(x, 0, width / 2, 1, 25);

            } else if (x > width / 2) {
                strichdicke = map(x, width / 2, width, 25, 1);

            }
            strokeWeight(strichdicke);
            line(x + tile + abstand, y, x + abstand, y + tile);

        }
    }


}
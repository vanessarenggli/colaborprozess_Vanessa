function setup() {
    // setup of the sketch
    createCanvas(600, 600);
    background(100, 100, 255);
    rectMode(CENTER); //Rechteck wird von der Mitte aus gezeichnet 
}

let slider = document.querySelector("#my_slider")
let slider2 = document.querySelector("#my_slider_2")
    //console.log(slider)
let slider3 = document.querySelector("#my_slider_3")
let slider4 = document.querySelector("#my_slider_4")

function draw() {
    let rand = random(-10, 10);
    let value = slider.value
    let col = slider2.value
    let value2 = slider3.value
    let col2 = slider4.value

    //col = parseInt(slider2.value) //andere oder bessere Variante für P5.js
    //console.log(col)

    // let val = slider3.val


    let sinus = sin(frameCount / 10); //frameCount ist Anzahl der Frames 
    let sinus2 = sin(frameCount / 5);

    let n = noise(sinus, sinus2); //Noise braucht immer zwei Werte, die sich ständig ändern 


    // here you draw to the screen
    //background(50, 50, 255); //Wenn der Hintergrund hier ist, wird jeweils nur eine Ellipse gezeichnet 

    let x = mouseX;
    let y = mouseY;
    //rect(x, y, 100, 100);




    for (let i = 0; i < 10; i++) {
        // let pos_x = (x + (i * 50)) + sinus2 * (5 * i);
        // let pos_y = y + sinus * (5 * i);

        //mit Noise 
        let pos_x = (x + (i * 50));
        let pos_y = (y + n * 50);
        //ellipse(pos_x, pos_y, 100, 100);

        //Modulo
        if (i % 2 == 0) {
            fill(col2, 0, 255, 100);
            ellipse(pos_x, pos_y, value2, value2);
        } else {


            fill(col, 255, 0, 100);
            rect(pos_x, pos_y, value, value);
        }

    }

}
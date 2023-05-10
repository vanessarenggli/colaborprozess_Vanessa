let rect_sizes = [100, 125, 150, 175, 200, 225, 250, 275, 300];


//console.log(rect_size.length)

function setup() {
    createCanvas(800, 800);

    rectMode(CENTER);

}

let mx = [];
let my = [];

let limit = 100;

function draw() {
    background(0);
    noFill();
    // frameRate(5); //verlangsamen 

    stroke(255, 255, 255, 150);

    // for (let i = 0; i < rect_sizes.length; i++) {
    //     let rect_size = rect_sizes[i];
    //     let x = width / 2;
    //     let y = height / 2;

    //     push();
    //     translate(x, y); //Rotate und Translate muss immer zusammen gebraucht werden 
    //     rotate(i);
    //     rect(0, 0, rect_size, rect_size);
    //     pop();
    // }

    mx.push(mouseX);
    my.push(mouseY);

    for (let i = 0; i < mx.length; i++) {
        let x = mx[i];
        let y = my[i];
        rect(x, y, 50, 50);
    }

    //remove first item when array is too big 
    if (mx.length >= limit) {
        mx.shift()
    }
    if (my.length >= limit) {
        my.shift()
    }


}
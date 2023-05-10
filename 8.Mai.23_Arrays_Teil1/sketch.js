let rect_sizes = [100, 125, 150, 175, 200, 225, 250, 275, 300];

let angle = 0;

//console.log(rect_size.length)

function setup() {
    createCanvas(600, 600);

    rectMode(CENTER);

}

function draw() {
    background(0);
    noFill();

    stroke(255);

    for (let i = 0; i < rect_sizes.length; i++) {
        let rect_size = rect_sizes[i];
        let x = width / 2;
        let y = height / 2;

        push()
        translate(x, y); //Rotate und Translate muss immer zusammen gebraucht werden 
        rotate(i);
        // rotate(angle)  //wenn aktiviert, dreht es sich 
        rect(0, 0, rect_size, rect_size);
        pop()

    }
    
    angle = angle + 1;
}
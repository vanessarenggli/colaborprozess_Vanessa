let img;
let pixels;

function setup() {
    createCanvas(500, 600);
    img = loadImage("asset/cindy-small.jpg");
    pixelDensity(1);
}

function draw() {
    background(220);
    image(img, 0, 0);

    img.loadPixels();
    //     let pix = img.pixels[23];
    //     let b = brightness(pix);
    //     console.log(b);


    for (let i = 0; i < img.pixels.length; i = i + 4) { // +4 weil ein Pixel immer aus 4 Werten besteht, rot, grün und blauwert und die Helligkeit 

        img.pixels[i] = random(255);
    }
    img.updatePixels();

    image(img, 0, 0);
}
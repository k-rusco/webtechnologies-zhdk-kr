let hue
function setup(){
    createCanvas(windowWidth, windowHeight);
    rectMode(CENTER);
    frameRate(30);
    noStroke;
    colorMode(HSB);
}
function draw(){
    hue=(frameCount%360)
    background(hue,100,100);
}

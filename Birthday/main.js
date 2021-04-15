function play1() {
    document.getElementById("music").play();
}

noseX = 0;
noseY = 0;
function preload(){
cap = loadImage("Cap.png");
}

function setup(){
    canvas = createCanvas(300 , 300);
    canvas.position(600 , 400);
    //Taking the live webcam view inside the variable camera.
    cam = createCapture(VIDEO);
    cam.size(300 , 300);
    cam.hide();
    posenet = ml5.poseNet(cam , modelloaded);
    posenet.on('pose' , gotposes);
}
function modelloaded(){
    console.log("PoseNet is started!");
}

function draw(){
//Drawing the live webcam view on the canvas
image(cam , 0 , 0 , 300 , 300); 
image(cap , noseX , noseY , 115 , 120);
}

function gotposes(results){
    if (results.length > 0 ){
        console.log(results);
        noseX = results[0].pose.nose.x - 60 ;
        noseY = results[0].pose.nose.y - 145;
        console.log("Nose X = " + noseX);
        console.log("Nose Y = " + noseY);
    }
}

function snapshot(){
    save('image.png');
}
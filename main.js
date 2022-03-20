left_wrist_x=0;
right_wrist_x=0;
difference=0;
function setup(){
video=createCapture(VIDEO);
video.size(400,400);
video.position(10,50);
canvas=createCanvas(800,400);
canvas.position(430,130);
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log("PoseNet Is Intialized");
}
function draw(){
    background("#5196e3");
    
    fill("#00ff0a");
    textSize(difference);
    text('Anjana Pragati',50,400);
}
function gotPoses(results,error){
if(error){
    console.error(error);
}
if(results.length>0){
console.log(results);
right_wrist_x=results[0].pose.rightWrist.x;
left_wrist_x=results[0].pose.leftWrist.x;
difference=floor(left_wrist_x - right_wrist_x);
console.log("rightwrist_x = "+results[0].pose.rightWrist.x+"rightwrist_y = "+results[0].pose.rightWrist.y);
console.log("leftwrist_x = "+results[0].pose.leftWrist.x+"leftwrist_y = "+results[0].pose.leftWrist.y);

}
}
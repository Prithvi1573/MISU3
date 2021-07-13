music1="";
music2="";
rightWristX=0;
leftWristX=0;
leftWristY=0;
rightWristY=0;
difference=0;
function preload()
{
    music1=loadSound("music.mp3");
    music2=loadSound("music2.mp3");
}
function setup()
{
        canvas= createCanvas(600,500);
        canvas.center();

        video=createCapture(VIDEO);
        video.hide();
        poseNet=ml5.poseNet(video,modelLoaded);
  poseNet.on('pose',gotPoses);

}
function modelLoaded()
{
console.log('LOODEDEMODEL');
}
function gotPoses(results)
{
if(results.length>0)
{
    console.log(results);
    leftWristX=results[0].pose.leftWrist.x;
    rightWristX=results[0].pose.rightWrist.x;
    difference=floor(leftWristX-rightWristX);
    console.log("leftWristX = "+leftWristX+"rightWristX"+rightWristX+"difference ="+difference);
}
}
function draw()
{
    image(video,0,0,600,500);
}
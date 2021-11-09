function setup() {
    video = createCapture(VIDEO);
    video.size(650, 500);
    video.position(30,150)
    
    canvas = createCanvas(550, 500);
    canvas.position(700,150);
    
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
    }
    
    function modelLoaded() {
        console.log('Posenet is initialized!');
    }
    
    function draw() {
        background('#969A97');
    }
    
    function gotPoses(results)
    {
        if(results.length > 0)
        {
            console.log(results);
        }
    }
    

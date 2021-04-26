function preload() {
}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
 
}

function modelLoaded() {
  console.log('PoseNet Is Initialized');
}


function draw() {
  image(video, 0, 0, 300, 300);
  
}

function take_snapshot(){    
  save('myFilterImage.png');
}

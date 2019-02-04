var imgBackground;
var frameTime = 0;
var clockTime = 0;
var clockSwitch = 1;
var counter = 35;
var b;
var x, y;
var variabile = 1;


var myRec = new p5.SpeechRec(); // new P5.SpeechRec object
var song;
myRec.continuous = true; // do continuous recognition

var mySpeech = new p5.Speech();
mySpeech.setLang('en-UK');

// speech synthesis object




function preload() {
  song = loadSound('assets/4/speaking.mp3');
  imgBackground = loadImage("assets/4/sfondointerazione.jpg");
}

function setup() {

  console.log(windowWidth);
  console.log(windowHeight);
  // graphics stuff:
  frameRate(30)
  createCanvas(windowWidth, windowHeight);
  background(0);

  imageMode(CENTER);
  image(imgBackground, windowWidth/2, windowHeight/2, 0.7 * imgBackground.width, 0.7 * imgBackground.height);

  fill(0, 0, 0, 255);

  textSize(32);

  myRec.onResult = showResult;
  mySpeech.setVolume(0.8);

  mySpeech.listVoices();
  mySpeech.setVoice(3);
  mySpeech.setRate(0.8);
  mySpeech.setPitch(1);


  song.setVolume(0.3);

  setInterval(countdown, 1000);

  fill(166, 237, 247);
  noStroke();

  ellipseMode(CENTER);
  fill("blue");
  ellipse(windowWidth - 130, 100, 70, 70)
  rectMode(CENTER);


}

function draw() {
  textAlign(CENTER);
  text(counter, windowWidth - 130, 110, x, y)
  fill(255, 255, 255);
  textSize(30);

  textSize(15);
  fill("blue");
  textAlign(CENTER);

  textSize(30);
  fill("white"); // why draw when you can talk?
}

function countdown() {
  if (counter > 0) {
    counter--;
    fill("blue");
    noStroke();
    ellipseMode(CENTER);
    ellipse(windowWidth - 130, 100, 70, 70);
  }
  if (counter == 0) {
    window.open("2_webcam.html", "_self")
  }
}



function backgroundImage(imgBackground) {
  push();
  translate(width / 2, height / 2);
  imageMode(CENTER);
  let scale = Math.max(width / imgBackground.width, height / imgBackground.height);
  image(imgBackground, 0, 0, imgBackground.width * scale, imgBackground.height * scale);
  pop();

}

/* function showResult(){
  if (myRec.onResult) {
  b = height/2;
  for (let i = 0; i < 20; i++) {
    textAlign(CENTER);
      text(myRec.resultString, (width/2 ), b, 600,600)
    b += 20;
  }
  }
}

*/





function showResult() {
  if (myRec.onResult) {
    push()
    textAlign(CENTER);
    fill("white");
    //rect(windowWidth - 630, 150, 470, 100);
    fill("blue");
    textAlign(LEFT);
    textSize(25);
    rectMode(CORNER)
    text(myRec.resultString, 0.44 * windowWidth, 120, 400, 300);
    fill(166, 237, 247);
    pop();
  }
}


function mousePressed() {


  if (variabile === 1) {

    mySpeech.speak('Hey there! Where do you wanna go?');
    myRec.start();
    song.play();
    variabile = 2;




  };

}

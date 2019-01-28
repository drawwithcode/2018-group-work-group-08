var capture;
var data;
var pannello;
var scritte;

var balls = [];

function preload() {
  sfondo = loadImage("./assets/4/Departures.png");
  data = loadJSON('./assets/4/data.json');

  pannello = loadImage("./assets/4/Images/Sfondo.png");
  scritte = loadImage("./assets/4/Images/Scritte.png");

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  capture = createCapture(VIDEO);
  capture.size(640, 480);
  capture.hide();

  //console.log(data.people.length);
  for (var i = 0; i < 13; i++) {

    // properties
    var x = 120;
    var y = i * 30 + 150;
    var name = loadImage(data.people[i].pic);

    var colorRandomizer = random(0.4, 1);

    // create the ball object and add it to the array
    var myBall = new Ball(x, y, colorRandomizer, name);
    balls.push(myBall);
  }
}



function draw() {

  background(50);
  //imageMode(CENTER)
  //image(sfondo, windowWidth/2, windowHeight/2, sfondo.width/2, sfondo.height/2);

  push();
  imageMode(CENTER);
  image(pannello, windowWidth/2, windowHeight/2, pannello.width/1.5, pannello.height/1.5);
  image(scritte, windowWidth/2, windowHeight/2, pannello.width/1.5, pannello.height/1.5);
  pop();


  for (var j = 0; j < balls.length; j++) {

		var randomCorrect = random(0.4, 1);
    balls[j].display(randomCorrect);
  }

}



function Ball(_x, _y, _colorRandomizer, _name) {

  this.x = _x;
  this.y = _y;


  this.display = function(_randomCorrect) {

    var c = capture.get(noise(capture.width / 2), noise(capture.height / 2));
    var bright = _colorRandomizer * lightness(c);
    var col = color(255, 255, 0, bright * 5);

    textSize(20);

      //console.log(_randomCorrect);
			bright = _randomCorrect * bright;
	    col = color(255, 255, 0, bright * 10);
      //fill(col);
      push()
      imageMode(CENTER);
      tint(255, bright * 5);
      image(_name, windowWidth/2, windowHeight/2, _name.width/1.5, _name.height/1.5);
      pop();

}
}

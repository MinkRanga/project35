//Create variables here
var dogImage, happydogImage;
var database, foodS, foodStock;

function preload(){
	//load images here
  dogImage = loadImage("images/dogImg.png");
  happydogImage = loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  dog = createSprite(250,250,30,30);
  dog.scale=0.5;
  dog.addImage("dogImg", dogImage);
  database = firebase.database();
  foodStock = database.ref('food');
  foodStock.on("value", readStock);

}


function draw() {  
  background(46,139,87);
  if (keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage("dogImg", happydogImage)
  }
  drawSprites();

  //add styles here
  textSize(15);
  stroke(1);
  text("press UP_arrow to feed the dog",250,20);
}

function readStock(data){
  foodS= data.val();
}

function writeStock(x){
  database.ref('/').update({
    food:x
  })
}




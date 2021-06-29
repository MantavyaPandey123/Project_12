var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleImg;
var leaf1,leaf1Img;
var leaves,leavesImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leavesImg = loadImage("orangeLeaf.png");
  leaf1Img = loadImage("leaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(160,340,20,20);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}

function createApples(){
  apple = createSprite(random(50,350),40,10,10);
  apple.velocityY = 3;
  apple.lifetime = 150;
  apple.addImage(appleImg);
  apple.scale = 0.07;
}

function createleaves(){
  leaves = createSprite(random(50,350),40,10,10);
  leaves.velocityY = 3;
  leaves.lifetime = 150;
  leaves.addImage(leavesImg);
  leaves.scale = 0.07;
}

function createleaf(){
  leaf1 = createSprite(random(50,350),40,10,10);
  leaf1.velocityY = 3;
  leaf1.lifetime = 150;
  leaf1.addImage(leaf1Img);
  leaf1.scale = 0.07;
}

function draw() {
  background(0);
  
  
  rabbit.x = World.mouseX;
  edges= createEdgeSprites();
  rabbit.collide(edges);

  var select_sprites = Math.round(random(1,3));
  if(frameCount % 80 === 0){
    if(select_sprites == 1){
      createApples();
    }
    else if(select_sprites == 2){
      createleaves();

    }
    else {
     createleaf(); 
    }
  }

  drawSprites();
}
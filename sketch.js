var score=0;

function preload(){

  //pre-load images
pathImg = loadImage("path.png");
jaxonImg = loadAnimation("Runner-1.png","Runner-2.png")  
powerImg = loadImage("energyDrink.png")
powerImg1 = loadImage("coin.png")
bombImg = loadImage("bomb.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here


//Moving background 
path=createSprite(200,200)
path.addImage(pathImg)
path.velocityY = 4;
path.scale=1.2;

//create image of energy
bomb = createSprite(80,40)
bomb.addImage("bomb.png" ,bombImg)
bomb.scale = 0.05
bomb.velocityY = 02;

//create image of energy
bomb1 = createSprite(80,370)
bomb1.addImage("bomb.png" ,bombImg)
bomb1.scale = 0.05
bomb1.velocityY = 02;

//create image of energy
power = createSprite(80,40)
power.addImage("energyDrink.png" ,powerImg)
power.scale = 0.05
power.velocityY = 02;

//create image of money
power1 = createSprite(190,380)
power1.addImage("coin.png",powerImg1)
power1.scale = 0.15
power1.velocityY = 02;

power2 = createSprite(280,40)
power2.addImage("energyDrink.png" ,powerImg)
power2.scale = 0.05
power2.velocityY = 02;

//create image of money
power3 = createSprite(190,30)
power3.addImage("coin.png",powerImg1)
power3.scale = 0.15
power3.velocityY = 02;

//create image of energy
power4 = createSprite(80,110)
power4.addImage("energyDrink.png" ,powerImg)
power4.scale = 0.05
power4.velocityY = 02;

//create image of money
power5 = createSprite(190,280)
power5.addImage("coin.png",powerImg1)
power5.scale = 0.15
power5.velocityY = 02;

power6 = createSprite(220,40)
power6.addImage("energyDrink.png" ,powerImg)
power6.scale = 0.05
power6.velocityY = 02;

//create image of money
power7 = createSprite(190,380)
power7.addImage("coin.png",powerImg1)
power7.scale = 0.15
power7.velocityY = 02;

//add Animation of jaxon
jaxon=createSprite(200,340,);
jaxon.addAnimation("Runner-1.png",jaxonImg);
jaxon.scale=0.05;
jaxon.velocityX = 0;

//create invisible path
invisiblePath1 = createSprite(40,180,10,400);
invisiblePath1.visible = false

invisiblePath2= createSprite(370,180,10,400);
invisiblePath2.visible = false
}

function draw() {
  background(0);


  fill("blue");
  textSize(10);
  background("purple");
  text("So:"+score, 0, 205);


  console.log(jaxon.x)
  //Moving the jaxon with mouse along the x-axis
    jaxon.x=World.mouseX;
    jaxon.y=World.mouseY;

    //Making collide
jaxon.collide(invisiblePath1)
jaxon.collide(invisiblePath2)

  //code to reset the background
  if(path.y > 400 )
  {
    path.y = height/2;
  }

  //code to reset the power with path
  if(power.y > 400 )
  {
    power.y = height/2;
  }

  //code to reset the power1 with path
  if(power1.y > 400 )
  {
    power1.y = height/2;
  }
  //code to reset the power1 with path
  if(power2.y > 400 )
  {
    power2.y = height/2;
  }
  //code to reset the power1 with path
  if(power3.y > 400 )
  {
    power3.y = height/2;
  }
//code to reset the power with path
if(power4.y > 400 )
{
  power4.y = height/56;
}

//code to reset the power1 with path
if(power5.y > 400 )
{
  power5.y = height/28;
}
//code to reset the power1 with path
if(power6.y > 400 )
{
  power6.y = height/2;
}
//code to reset the power1 with path
if(power7.y > 400 )
{
  power7.y = height/29;
}
//code to reset the power1 with path
if(bomb.y > 400 )
{
  bomb.y = height/29;
}
//code to reset the power1 with path
if(bomb1.y > 400 )
{
  bomb1.y = height/29;
}



//destroy the boxes when ball touches them
if(jaxon.isTouching(power1))
{score=score+1;
  power1.destroy();
}
//destroy the boxes when ball touches them
if(jaxon.isTouching(power2))
{score=score+1;
  power2.destroy();
}
//destroy the boxes when ball touches them
if(jaxon.isTouching(power3))
{score=score+1;
  power3.destroy();
}
//destroy the boxes when ballv touches them
if(jaxon.isTouching(power4))
{score=score+1;
  power4.destroy();
}
//destroy the boxes when ball touches them
if(jaxon.isTouching(power5))
{score=score+1;
  power5.destroy();
}

drawSprites();
}

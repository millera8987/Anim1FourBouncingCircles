
var game = new Phaser.Game(800, 480, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update });


var background;
//----------------------------------------
var g;
var speed = 5;
var c = {dx:speed,dy:speed,size:50};
//----------------------------------------
var g1;
var speed1 = 7;
var c1 = {dx:speed,dy:speed,size:25};
//----------------------------------------
var g2;
var speed2 = 4;
var c2 = {dx:speed,dy:speed,size:100};
//----------------------------------------
var g3;
var speed3 = 2;
var c3 = {dx:speed,dy:speed,size:200};
//----------------------------------------

function preload() {

    //  You can fill the preloader with as many assets as your game requires

    //  Here we are loading an image. The first parameter is the unique
    //  string by which we'll identify the image later in our code.

    //  The second parameter is the URL of the image (relative)
   
    
    
}

function create() {

    //  This creates a simple sprite that is using our loaded image and
    //  displays it on-screen
    //  and assign it to a variable
    //var image = game.add.sprite(0, 0, 'einstein');
	background = game.add.graphics(0,0);
	background.beginFill(0x00ff00);
	background.drawRect(0,0,game.width/2,game.height/2);
	background.endFill();
    
	background.beginFill(0x00ffff);
	background.drawRect(game.width/2,0,game.width/2,game.height/2);
	background.endFill();
	
	background.beginFill(0x0066cc);
	background.drawRect(0,game.height/2,game.width/2,game.height/2);
	background.endFill();
	
	background.beginFill(0xff66ff);
	background.drawRect(game.width/2,game.height/2,game.width/2,game.height/2);
	background.endFill();
	 //---------------------------------------
	g = game.add.graphics(0,0);	
    g.beginFill(0xFFFF00);
    g.drawCircle(c.size/2,c.size/2,c.size);
    g.endFill();
    //---------------------------------------
    g1 = game.add.graphics(game.width/2,0);	
    g1.beginFill(0x0000FF);
    g1.drawCircle(c1.size/2,c1.size/2,c1.size);
    //g1.drawCircle(c1.size/2,c1.size/4,c1.size);
    g1.endFill();
    //---------------------------------------
    g2 = game.add.graphics(0,game.height/2);	
    g2.beginFill(0xFF6600);
    g2.drawCircle(c2.size/2,c2.size/2,c2.size);
    //g1.drawCircle(c1.size/2,c1.size/4,c1.size);
    g2.endFill();
    //---------------------------------------
    g3 = game.add.graphics(game.width/2,game.height/2);	
    g3.beginFill(0xFF0000);
    g3.drawCircle(c3.size/2,c3.size/2,c3.size);
    
    //g1.drawCircle(c1.size/2,c1.size/4,c1.size);
    g3.endFill();
    //---------------------------------------
  
    //var style = { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };

    //  The Text is positioned at 0, 100
    //text = game.add.text(0, 200, "c.x = " + c.x, style);
    
   
    
    
    //game.physics.enable(image, Phaser.Physics.ARCADE);

    //image.body.velocity.x=150;

}
function update(){
	//text.text = "c.x = " + c.x;
	g.x+=c.dx;
	g.y+=c.dy;
	if ((c.dx < 0 && g.x + c.dx  < 0) || (c.dx > 0 && g.x + c.dx +c.size > game.width/2)){
		c.dx = -c.dx;
	}
	if ((c.dy < 0 && g.y + c.dy  < 0) || (c.dy > 0 && g.y + c.dy + c.size > game.height/2)){
		c.dy = -c.dy;
	}
	//--------------------------------------------------------------------
	g1.x+=c1.dx;
	g1.y+=c1.dy;
	if ((c1.dx < 0 && g1.x + c1.dx  < game.width/2) || (c1.dx > 0 && g1.x + c1.dx +c1.size > game.width)){
		c1.dx = -c1.dx;
	}
	if ((c1.dy < 0 && g1.y + c1.dy  < 0) || (c1.dy > 0 && g1.y + c1.dy + c1.size > game.height/2)){
		c1.dy = -c1.dy;
	}
	//--------------------------------------------------------------------
	g2.x+=c2.dx;
	g2.y+=c2.dy;
	if ((c2.dx < 0 && g2.x + c2.dx  < 0) || (c2.dx > 0 && g2.x + c2.dx +c2.size > game.width/2)){
		c2.dx = -c2.dx;
	}
	if ((c2.dy < 0 && g2.y + c2.dy  < game.height/2) || (c2.dy > 0 && g2.y + c2.dy + c2.size > game.height)){
		c2.dy = -c2.dy;
	}
	//--------------------------------------------------------------------
	g3.x+=c3.dx;
	g3.y+=c3.dy;
	if ((c3.dx < 0 && g3.x + c3.dx  < game.width/2) || (c3.dx > 0 && g3.x + c3.dx +c3.size > game.width)){
		c3.dx = -c3.dx;
	}
	if ((c3.dy < 0 && g3.y + c3.dy  < game.height/2) || (c3.dy > 0 && g3.y + c3.dy + c3.size > game.height)){
		c3.dy = -c3.dy;
	}
	//--------------------------------------------------------------------
	


}

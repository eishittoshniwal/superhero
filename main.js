var canvas= new fabric.Canvas("mycanvas")
var blockH=30
var blockW=30
var playerX=100
var playerY=100
var playerobject=""
var blockobject=""

function updateplayer(){
    fabric.Image.fromURL("player.png",function(img){
        playerobject=img;
        playerobject.scaleToWidth(150);
        playerobject.scaleToHeight(150);
        playerobject.set({
            top:playerY,left:playerX
        });
        canvas.add(playerobject)
    });
}
function updateblock(block){
    fabric.Image.fromURL(block,function(img){
    blockobject=img;
    blockobject.scaleToWidth(blockW);
    blockobject.scaleToHeight(blockH);
    blockobject.set({
        top:playerY,left:playerX
    });
    canvas.add(blockobject)
    });
}

window.addEventListener("keydown",kd)
function kd(e){
keynumber=e.keyCode
console.log(keynumber)

if (keynumber==37) {
   left()
   console.log("left is pressed") 
}
if (keynumber==39) {
    right()
    console.log("right is pressed")
}
if (keynumber==38) {
    up()
    console.log("up is pressed")
}
if (keynumber==40) {
    down()
    console.log("down is pressed")
}
if (keynumber==70) {
    updateblock("ironman_face.png")
    console.log("f is pressed")
}
if (keynumber==76) {
    updateblock("spiderman_legs.png")
    console.log("l is pressed")
}
if (keynumber==66) {
    updateblock("hulkd_body.png")
    console.log("b is pressed")
}
if (keynumber==82) {
    updateblock("thor_right_hand.png")
    console.log("r is pressed")
}
if (keynumber==72) {
    updateblock("captain_america_left_hand.png")
    console.log("h is pressed")
}

if (e.shiftKey==true&& keynumber==80) {
    blockW=blockW+10
    blockH=blockH+10
    document.getElementById("width").innerHTML=blockW
    document.getElementById("height").innerHTML=blockH
    console.log("shift and p pressed together")
}
if (e.shiftKey==true&& keynumber==77) {
    blockW=blockW-10
    blockH=blockH-10
    document.getElementById("width").innerHTML=blockW
    document.getElementById("height").innerHTML=blockH
    console.log("shift and m pressed together")
}
}

function down() {
    if (playerY<=500) {
        playerY=playerY+blockH
        canvas.remove(playerobject)
        updateplayer()
        }   
   }
   
   function up() {
   if (playerY>=0) {
     playerY=playerY-blockH
     canvas.remove(playerobject)
     updateplayer()  
   }    
   }
   
   function left() {
       if (playerX>=0) {
           playerX=playerX-blockW
           canvas.remove(playerobject)
           updateplayer()
       }
   }
   
   function right() {
       if (playerX<700) {
          playerX=playerX+blockW
          canvas.remove(playerobject)
          updateplayer() 
       }
   }
var hole = document.getElementById("hole");
var obstacle = document.getElementById("obstacle");
var bird = document.getElementById("bird");
var score = 0;


hole.addEventListener("animationiteration",()=>{
var rand = Math.random() * (500 - 150);
hole.style.top = rand + "px";
score++;
});

setInterval(function() {
    var birdTop = parseInt(getComputedStyle(bird).getPropertyValue("top"));
if(!isJumping){
    bird.style.top = birdTop + 3 + "px";
}
var obstacleleft = parseInt(
    getComputedStyle(obstacle).getPropertyValue("left"));
var obstacleleft = parseInt
(getComputedStyle(hole).getPropertyValue("top"));
if(birdTop>480 || (obstacleleft<20 && (birdTop>holeTop + 150 || birdTop < holeTop))){
alert('game over.your score:$(score)');
bird.style.top = 100 + "px";
obstacle.style.left = "100%";
hole.style.left = "100%";
score = 0; 
}
},10)
var isJumping = false;
document.addEventListener("click",() =>{
    isJumping = true;
    var jumpTimer = 0;
    var jumpInterval = setInterval(function(){
        jumpTimer++;
        var birdTop = parseInt(getComputedStyle(bird).getPropertyValue("top"));
        if(birdTop>0 && jumpTimer < 15){
            bird.style.top = birdTop - 5 + "px";
        }
    if(jumpTimer>20){
        clearInterval(jumpInterval);
        isJumping = false;
        jumpTimer = 0;
    }
},10);
});
   
  
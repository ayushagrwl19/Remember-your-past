var buttonColors=["red","green","blue","yellow"];
var start=false;
var level,index,user;
var sequence=[];
$(document).keypress(function(){
 if(!start)
 {
          start=true;
          level=0;
          sequence=[];
     nextSequence();
 }
})

function nextSequence()
{
if(start)
{
index=0;
user=0;
level++;
$("#level-title").text("Level "+level);
var random=Math.floor(Math.random()*4);
sequence.push(buttonColors[random]);
var buttonGotClicked="."+buttonColors[random];
$(buttonGotClicked).fadeIn(100).fadeOut(100).fadeIn(100);
sound(buttonGotClicked);
}
}
$(".btn").click(function(){
    if(start)
   { 
    var buttonUserClicked="."+this.id;
    animate(buttonUserClicked);
    sound(buttonUserClicked);
    check(this.id);
   
    }
})
function animate(buttonClicked)
{
    $(buttonClicked).addClass("pressed");
    setTimeout(function(){
        $(buttonClicked).removeClass("pressed");
    },100);
}
function sound(buttonClicked)
{
    var path="sounds/"+buttonClicked+".mp3";
    var audio=new Audio(path);
    audio.play();
}
function check(button)
{
    user++;
    if(user<=sequence.length&&sequence[index]===button)
    {
        index++;
        if(user==sequence.length)
    setTimeout(function(){
        nextSequence();
    },500);
     }
     else
     gameOver();
}
function gameOver()
{
    start=false;
    $("#level-title").html("<strong>Game over, Your Score is " +level+"<p>Press any key to restart.</p></strong>");
    $("#score").text("Your score is "+level);
    var gameOverAudio="wrong";
    sound(gameOverAudio);
    $("body").addClass("game-over");
    setTimeout(function(){
        $("body").removeClass("game-over")
    },100)
}

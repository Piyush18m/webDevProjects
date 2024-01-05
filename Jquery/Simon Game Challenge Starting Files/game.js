var gamePattern=[];
var userClickedPattern=[];
var buttonColours=["red","blue","yellow","green"];
var gameStarted=false;
var level=0;
function nextSequence(){
    var randomNumber=Math.floor(Math.random()*4);
    level++;
    $('h1').text("Level "+level);
    var randomChosenColour=buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    animatePress(randomChosenColour);
    playSound(randomChosenColour);
}
function playSound(name){
    var audio=new Audio("sounds/"+name+".mp3");
    audio.play();
}
function animatePress(currentColour){
    $("."+currentColour).fadeOut(200);
    $("."+currentColour).fadeIn(200);
    $('.'+currentColour).addClass("pressed");
    setTimeout(function(){
    $('.'+currentColour).removeClass("pressed");    
    },100);
}

$(".btn").on("click",function(){
        var userChosenColour=$(this).attr("id");
        animatePress(userChosenColour);
        userClickedPattern.push(userChosenColour);
        playSound(userChosenColour);
        checkAnswer(level-1);
});

function checkAnswer(currentLevel){
    if(userClickedPattern[userClickedPattern.length-1]==gamePattern[userClickedPattern.length-1]){
        if(userClickedPattern[userClickedPattern.length-1]==userClickedPattern[currentLevel]){
            setTimeout(function(){nextSequence();
            userClickedPattern=[]},1000);
        }
    }else if(userClickedPattern[currentLevel]!=gamePattern[currentLevel]){
        $('h1').text("Game Over, Press Any Key to Restart");
        $('body').addClass("game-over");
        setTimeout(function(){$('body').removeClass("game-over");
        startOver();},200);
        

    }
}

function startOver(){
    level=0;
    gameStarted=false;
    gamePattern=[];
}

$(document).on("keydown",function(){
    if(gameStarted==false){
        nextSequence();
        gameStarted=true;
    }
});
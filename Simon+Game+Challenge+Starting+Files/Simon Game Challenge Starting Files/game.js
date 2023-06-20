let buttonColours=["red", "blue","green", "yellow"];
let gamePattern=[];
let userClickedPattern=[];

$(".btn").click(function(){
    // alert(this.id);
        let userChosenColour =  this.id;
        // console.log(userChosenColour);
        userClickedPattern.push(userChosenColour);
        console.log(userClickedPattern);
        playSound(userChosenColour);
        animatePress(userChosenColour);
});


function nextSequence(){
    let randomNumber=Math.floor(Math.random()*4);
    let randomChosenColour=buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
   // $("#randomChoosenColour")
    $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColour);
}



function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
     audio.play();

}


function animatePress(currentColour){
  $("#"+ currentColour).addClass("pressed");

   setTimeout(function(){
    $("#"+currentColour).removeClass("pressed");
   },100);
}

nextSequence();

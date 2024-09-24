let buttonColors = [
    "red", "cyan", "creamy", 
    "yellow", "blue", "green", 
    "gray", "orange", "brown"
]; 
let gamePattern = [];
let userClickedPattern = [];
let gameStarted = false;
let level = 0;

$(document).keydown(function() {
    if (!gameStarted) {
      $("#levels").text("Level " + level);
      nextSequence();
      started = true;
    }
  });

$(".btn").click(function() {
    let userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
  
    playSound(userChosenColor);
    animatePress(userChosenColor);
  
    // Check user's sequence against game pattern
    checkAnswer(userClickedPattern.length - 1);
  });
  

// Function to check the user's input
function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
      // If the user got the latest step right
      if (userClickedPattern.length === gamePattern.length) {
        // After they complete the sequence, wait before generating the next step
        setTimeout(function() {
          nextSequence();
        }, 1000);
      }
    } else {
      // If the user got the step wrong
      playSound("wrong");
      $("body").addClass("game-over");
      $("#level-title").text("Game Over, Press Any Key to Restart");
  
      setTimeout(function() {
        $("body").removeClass("game-over");
      }, 200);
  
      startOver();
    }
  }

  function nextSequence() {
    userClickedPattern = [];
    level++;
    $("#level-title").text("Level " + level);
  
    let randomNumber = Math.floor(Math.random() * 9);
    let randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
  
    $("#" + randomChosenColor)
      .fadeIn(100)
      .fadeOut(100)
      .fadeIn(100);
  
    playSound(randomChosenColor);
  }
 
  function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function() {
      $("#" + currentColor).removeClass("pressed");
    }, 100);
  }

  function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
  }

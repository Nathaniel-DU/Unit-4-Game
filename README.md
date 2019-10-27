# Unit-4-Game
Unit-4-Game

About:
Crystal Hunter Game:
You will be given a number at the begining of the game. It's your job to hunt down the crystals to match your points to the random number. The value of the crystals will change for every game and you have to figure out their values.

Demo:
You should put the link to your application here. Example- Demo Site: This link will take you to google

Requirements:

function getRandomFromRange(low, high) {
    // Find random number from 5-10
    // subrtact the low from the high and you receive 5;
    // left at 5, your final array would be [5,6,7,8,9];
    // so add +1 to the difference to include the high position    
    var difference = (high - low) + 1;

    return Math.floor(Math.random() * difference) + low
};

my tutor tought me this function using Low,High to simplify my code, so I just called getRandomFromRange in my script. 


function Start() {
    currentCount = 0;
    totalNumber.text(currentCount)
    numberToGuess = getRandomFromRange(19, 120);
    computerGuess.text(numberToGuess);
    winsDiv.text(wins);
    lossesDiv.text(losses)

    crystalBtns.each(function () {
        var thisBtn = $(this)
        thisBtn.val(getRandomFromRange(1, 12));
    })    
}

This is my start function, simply sets ecerything to random numbers and changes the wins and losses.


technologies used:

Bootstrap
jQuery
Javascript

var computerGuess = $("#randomNumber");
var totalNumber = $("#totalNumber");
var winsDiv = $("#wins");
var lossesDiv = $("#losses");
var crystalBtns = $(".crystalBtn")
var numberToGuess, currentCount, wins = 0, losses = 0;

Start();
crystalBtns.on("click", handleClick);

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

function handleClick() {
    var newValue = parseInt($(this).val())
    currentCount += newValue;
    totalNumber.text(currentCount);

    if (currentCount > numberToGuess) {
        losses++;
        Start()
    }
    else if (currentCount === numberToGuess) {
        wins++;
        Start();
    } else {
        crystalBtns.each(function () {
            var thisBtn = $(this)
            thisBtn.val(getRandomFromRange(1, 12));
        })
    }
}

function getRandomFromRange(low, high) {
    // Find random number from 5-10
    // subrtact the low from the high and you receive 5;
    // left at 5, your final array would be [5,6,7,8,9];
    // so add +1 to the difference to include the high position    
    var difference = (high - low) + 1;

    return Math.floor(Math.random() * difference) + low
};

function randomArrayMember(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
};
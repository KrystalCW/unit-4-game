var goal = "";
var crystalOneScore = "";
var crystalTwoScore = "";
var crystalThreeScore = "";
var crystalFourScore = "";
var scores = [];
var winsCounter = 0;
var lossesCounter = 0;
const arrSum = arr => arr.reduce((a,b) => a + b, 0)

function startGame() {
    goal = Math.floor( Math.random() * 50) + 1;
    $("#goal").html(goal);
    crystalOneScore = Math.floor( Math.random() * 10) + 1;
    crystalTwoScore = Math.floor( Math.random() * 10) + 1;
    crystalThreeScore = Math.floor( Math.random() * 10) + 1;
    crystalFourScore = Math.floor( Math.random() * 10) + 1;
    checkDuplicates()
    scores = [];
    $("#current-score").html(0);
}

function checkDuplicates() {
    if (crystalTwoScore === crystalOneScore) {
        crystalTwoScore = Math.floor( Math.random() * 10) + 1;
    }
    else if (crystalThreeScore === crystalOneScore || crystalTwoScore) {
        crystalThreeScore = Math.floor( Math.random() * 10) + 1;
    }
    else if (crystalFourScore === crystalOneScore || crystalTwoScore || crystalThreeScore) {
        crystalFourScore = Math.floor( Math.random() * 10) + 1;
    }
}

function gamePlay() {
    $("#crystal1").on("click", function() {
        console.log(crystalOneScore);
        scores.push(crystalOneScore);
        $("#current-score").html(arrSum(scores));
        setTimeout(winLose, 500);
    })
    $("#crystal2").on("click", function() {
        console.log(crystalTwoScore);
        scores.push(crystalTwoScore);
        $("#current-score").html(arrSum(scores));
        setTimeout(winLose, 500);
    })
    $("#crystal3").on("click", function() {
        console.log(crystalThreeScore);
        scores.push(crystalThreeScore);
        $("#current-score").html(arrSum(scores));
        setTimeout(winLose, 500);
    })
    $("#crystal4").on("click", function() {
        console.log(crystalFourScore);
        scores.push(crystalFourScore);
        $("#current-score").html(arrSum(scores));
        setTimeout(winLose, 500);
    })
}

function winLose() {
    if (arrSum(scores) === goal) {
        alert("You won! Good job!");
        winsCounter++;
        $("#wins").html(winsCounter);
        startGame();
    } else if (arrSum(scores) > goal) {
        alert("Sorry, you lose :(");
        lossesCounter++;
        $("#losses").html(lossesCounter);
        startGame();
    }
}

startGame();
gamePlay();

var goal = Math.floor( Math.random() * 50) + 1;
var crystalOneScore = Math.floor( Math.random() * 10) + 1;
var crystalTwoScore = Math.floor( Math.random() * 10) + 1;
var crystalThreeScore = Math.floor( Math.random() * 10) + 1;
var crystalFourScore = Math.floor( Math.random() * 10) + 1;
var scores = [];

function startGame() {
    $("#goal").html(goal);
    console.log(crystalOneScore);
    console.log(crystalTwoScore);
    console.log(crystalOneScore + crystalTwoScore);
}

function gamePlay() {
    $("#crystal1").on("click", function() {
        console.log(crystalOneScore);
        scores.push(crystalOneScore);
        scoreKeeping();
    })
    $("#crystal2").on("click", function() {
        console.log(crystalTwoScore);
        scores.push(crystalTwoScore);
        scoreKeeping();
    })
    $("#crystal3").on("click", function() {
        console.log(crystalThreeScore);
        scores.push(crystalThreeScore);
        scoreKeeping();
    })
    $("#crystal4").on("click", function() {
        console.log(crystalFourScore);
        scores.push(crystalFourScore);
        scoreKeeping();
    })

}

function scoreKeeping () {
    console.log(scores);
    var score = 0;
    for (var i = 0; i < scores.length; i++) {
        score += scores[i][1];
    }
    console.log(score);
}


// function startGame() {
//     var goal = Math.floor( Math.random() * 50) + 1;
//     $("#goal").html(goal);
// }

// function gamePlay() {
//     $("#crystal1").on("click", function() {
//         var crystalOneScore = Math.floor( Math.random() * 10) + 1;
//         console.log(crystalOneScore)
//     })

//     $("#crystal2").on("click", function() {
//         var crystalTwoScore = Math.floor( Math.random() * 10) + 1;
//         console.log(crystalTwoScore)
//     })

//     $("#crystal3").on("click", function() {
//         var crystalThreeScore = Math.floor( Math.random() * 10) + 1;
//         console.log(crystalThreeScore)
//     })

//     $("#crystal4").on("click", function() {
//         var crystalFourScore = Math.floor( Math.random() * 10) + 1;
//         console.log(crystalFourScore)
//     })
// }

startGame();
gamePlay();

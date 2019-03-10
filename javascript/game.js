// THINGS TO DO

// question timer
// if the user fails to respond before the question times out, display an "out of time" message with the same parameters as the result screen.
// after all questions are finished, display a final score in "X/quizArray.length" format to the user, with a "start over" button
//__________________________________________________________________________________

var quizArray = [
    {
        q: "this is the FIRST question.", 
        a1: "this is answer 1",
        a2: "this is answer 2",
        a3: "this is answer 3",
        a4: "this is answer 4",
        correctAnswer: "this is answer 2",
        c: "Correct!",
        i: "Wrong It was _____",
        t: "Time's Up!",
        image: "https://via.placeholder.com/640x360"
    },
    {
        q: "this is the SECOND question.", 
        a1: "this is answer 1",
        a2: "this is answer 2",
        a3: "this is answer 3",
        a4: "this is answer 4",
        correctAnswer: "this is answer 4",
        c: "Correct!",
        i: "Wrong It was _____",
        t: "Time's Up!",
        image: "https://via.placeholder.com/640x360"
    },
    {
        q: "this is the THIRD question.", 
        a1: "this is answer 1",
        a2: "this is answer 2",
        a3: "this is answer 3",
        a4: "this is answer 4",
        correctAnswer: "this is answer 2",
        c: "Correct!",
        i: "Wrong It was _____",
        t: "Time's Up!",
        image: "https://via.placeholder.com/640x360"
    },
    {
        q: "this is the FOURTH question.", 
        a1: "this is answer 1",
        a2: "this is answer 2",
        a3: "this is answer 3",
        a4: "this is answer 4",
        correctAnswer: "this is answer 1",
        c: "Correct!",
        i: "Wrong It was _____",
        t: "Time's Up!",
        image: "https://via.placeholder.com/640x360"
    },
    {
        q: "this is the FIFTH question.", 
        a1: "this is answer 1",
        a2: "this is answer 2",
        a3: "this is answer 3",
        a4: "this is answer 4",
        correctAnswer: "this is answer 3",
        c: "Correct!",
        i: "Wrong It was _____",
        t: "Time's Up!",
        image: "https://via.placeholder.com/640x360"
    }
]

var quizIndex = 0;

var score = 0;

var userAnswer;

$("#question-container").addClass("hide");
$("#result-container").addClass("hide");
$("#game-over-container").addClass("hide");

// START BUTTON CLICK
$("#start-button").on("click", function(){
    $("#start-screen").addClass("hide");
    printQuestion();
});

// PRINTS THE QUESTION
function printQuestion(){
    $("#result-container").addClass("hide");

    $("#question-container").removeClass("hide");

    $("#question").text(quizArray[quizIndex].q);

    $("#answer-1").text(quizArray[quizIndex].a1);

    $("#answer-2").text(quizArray[quizIndex].a2);

    $("#answer-3").text(quizArray[quizIndex].a3);

    $("#answer-4").text(quizArray[quizIndex].a4);
}

// PRINTS THE RESULT FOR A CORRECT ANSWER
function printCorrect(){
    $("#question-container").addClass("hide");

    $("#result-container").removeClass("hide");

    $("#result").text(quizArray[quizIndex].c);

    var image = $("<img>").addClass("image").attr("src", quizArray[quizIndex].image)

    $("#image").html(image);
}

// PRINTS THE RESULT FOR AN INCORRECT ANSWER
function printIncorrect(){
    $("#question-container").addClass("hide");

    $("#result-container").removeClass("hide");

    $("#result").text(quizArray[quizIndex].i);

    var image = $("<img>").addClass("image").attr("src", quizArray[quizIndex].image)

    $("#image").html(image);
}

// PRINTS THE GAME OVER SCREEN
function printGameOver(){
    $("#question-container").addClass("hide");

    $("#result-container").addClass("hide");    

    $("#game-over-container").removeClass("hide");
}

// USER INPUT LOGIC
$(".answer").on("click", function(){
    userAnswer = ($(this).text());
    if (userAnswer === quizArray[quizIndex].correctAnswer){
        score ++;
        printCorrect(); 
    } else {
        printIncorrect();
    }
    quizIndex ++;
    if (quizIndex < quizArray.length){
        setTimeout(printQuestion, 5000);
    } else {
        setTimeout(printGameOver, 5000); 
    }
});

// TIMER LOGIC


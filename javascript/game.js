// THINGS TO DO

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

var timeLeft = 6;

var interval;

$("#question-container").addClass("hide");
$("#result-container").addClass("hide");
$("#game-over-container").addClass("hide");

// START BUTTON CLICK
$("#start-button").on("click", function(){
    $("#start-screen").addClass("hide");
    $("#timer").html(timeLeft + " seconds remaining")
    printQuestion();
});

// PRINTS THE QUESTION

// var timer = () => {}

function timer(){
    interval = setInterval(function(){
        if (timeLeft > 0){
            timeLeft --;
            $("#timer").html(timeLeft + " seconds remaining")
        } else {
            clearInterval(interval);
            console.log(quizArray, quizIndex);
            printResult(quizArray[quizIndex].t);
            if (quizIndex < quizArray.length){
                setTimeout(printQuestion, 5000);
            } else {
                setTimeout(printGameOver, 5000); 
            }
            quizIndex ++;
            timeLeft = 6;
        }
    }, 1000)
}

function printQuestion(){
    timeLeft = 6;
    $("#timer").html(timeLeft + " seconds remaining")
    timer();

    $("#result-container").addClass("hide");

    $("#question-container").removeClass("hide");

    $("#question").text(quizArray[quizIndex].q);

    $("#answer-1").text(quizArray[quizIndex].a1);

    $("#answer-2").text(quizArray[quizIndex].a2);

    $("#answer-3").text(quizArray[quizIndex].a3);

    $("#answer-4").text(quizArray[quizIndex].a4);
}

function printResult(text){
    $("#question-container").addClass("hide");

    $("#result-container").removeClass("hide");

    $("#result").text(text);

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
    
    clearInterval(interval);

    if (userAnswer === quizArray[quizIndex].correctAnswer){
        score ++;
        printResult(quizArray[quizIndex].c);
    } else {
        printResult(quizArray[quizIndex].i);
    }
    quizIndex ++;
    if (quizIndex < quizArray.length){
        setTimeout(printQuestion, 5000);
    } else {
        setTimeout(printGameOver, 5000); 
    }
});


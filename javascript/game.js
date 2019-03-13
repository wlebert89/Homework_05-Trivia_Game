var quizArray = [
    {
        q: "Which of the following colors has the longest wavelength?", 
        a1: "Yellow",
        a2: "Green",
        a3: "Red",
        a4: "Violet",
        correctAnswer: "Red",
        c: "Correct!",
        i: "Wrong, the correct answer is red.",
        t: "Time's Up! The answer is red.",
        image: "images/red.jpg"
    },
    {
        q: "Which of the following are a pair of complementary colors?", 
        a1: "Red & Blue",
        a2: "Yellow & Orange",
        a3: "Green & Purple",
        a4: "Blue & Orange",
        correctAnswer: "Blue & Orange",
        c: "Correct!",
        i: "Wrong, blue and orange are complementary colors.",
        t: "Time's Up! The answer is blue & orange.",
        image: "images/complementary.jpg"
    },
    {
        q: "Which color of light do plants absorb least?", 
        a1: "Green",
        a2: "Red",
        a3: "Blue",
        a4: "Yellow",
        correctAnswer: "Green",
        c: "Correct!",
        i: "Wrong, plants absorb green light the least.",
        t: "Time's Up! The answer is green.",
        image: "images/green.jpg"
    },
    {
        q: "Which of the following is NOT a primary color?", 
        a1: "Blue",
        a2: "Green",
        a3: "Yellow",
        a4: "Red",
        correctAnswer: "Green",
        c: "Correct!",
        i: "Wrong, green is not a primary color.",
        t: "Time's Up! The answer is green.",
        image: "images/primary.jpg"
    },
    {
        q: "What is the word for the dark grey color seen by the eyes in perfect darkness as a result of signals from the optic nerves?", 
        a1: "Umami",
        a2: "Greyscale",
        a3: "Eigengrau",
        a4: "Chromatose",
        correctAnswer: "Eigengrau",
        c: "Correct!",
        i: "Wrong, the answer is eigengrau.",
        t: "Time's Up! The answer is eigengrau.",
        image: "images/eigengrau.jpg"
    }
]

var quizIndex = 0;

var score = 0;

var userAnswer;

var timeLeft = 30;

var interval;

$("#question-container").addClass("hide");
$("#result-container").addClass("hide");
$("#game-over-container").addClass("hide");

// START BUTTON CLICK
$(".reset").on("click", function(){
    quizIndex = 0;
    score = 0;
    $("#timer").removeClass("hide");
    $("#start-screen").addClass("hide");
    $("#game-over-container").addClass("hide");
    $("#timer").html(timeLeft + " seconds remaining")
    printQuestion();
});

// TIMER LOGIC
function timer(){
    interval = setInterval(function(){
        if (timeLeft > 0){
            timeLeft --;
            $("#timer").html(timeLeft + " seconds remaining")
        } else {
            clearInterval(interval);
            printResult(quizArray[quizIndex].t);
            if (quizIndex < quizArray.length){
                setTimeout(printQuestion, 3000);
            } else {
                setTimeout(printGameOver, 3000); 
            }
            quizIndex ++;
            timeLeft = 30;
        }
    }, 1000)
}

// PRINTS THE QUESTION
function printQuestion(){
    timeLeft = 30;
    $("#timer").html(timeLeft + " seconds remaining")
    timer();

    $("#timer").removeClass("hide");

    $("#result-container").addClass("hide");

    $("#question-container").removeClass("hide");

    $("#question").text(quizArray[quizIndex].q);

    $("#answer-1").text(quizArray[quizIndex].a1);

    $("#answer-2").text(quizArray[quizIndex].a2);

    $("#answer-3").text(quizArray[quizIndex].a3);

    $("#answer-4").text(quizArray[quizIndex].a4);

    console.log("The correct answer is " + quizArray[quizIndex].correctAnswer);
}

// PRINTS THE RESULT OF THE USER RESPONSE OR TIMEOUT
function printResult(text){
    $("#question-container").addClass("hide");

    $("#timer").addClass("hide");

    $("#result-container").removeClass("hide");

    $("#result").text(text);

    var image = $("<img>").addClass("image").attr("src", quizArray[quizIndex].image)

    $("#image").html(image);
}

// PRINTS THE GAME OVER SCREEN
function printGameOver(){
    $("#question-container").addClass("hide");

    $("#result-container").addClass("hide");
    
    $("#timer").addClass("hide");

    $("#game-over-container").removeClass("hide");

    $("#score").html("Score: " + score + "/" + quizArray.length)
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
        setTimeout(printQuestion, 3000);
    } else {
        setTimeout(printGameOver, 3000); 
    }
});


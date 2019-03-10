// need a questions array
// inside the questions array, each question, with its possible answers, and its correct answer, will be inside of an object
// once the game is initiated by the user, the first question will be displayed, with the possible answers below it
// a timer will begin a countdown from 00:30
// the user may respond by clicking directly on one of the answers.
// if the user answers the question before the time runs out, display a feedback screen telling the user whether or not
    // they are correct. 
// This feedback screen should last 5 seconds and then move on to the next question.
// if the user fails to respond before the question times out, display an "out of time" message with the same parameters
    // as the feedback screen.
// after all 5 questions are finished, display a final score in "X/5" format to the user, with a "start over" button 
    // that will call a reset function.

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
        image: "https://via.placeholder.com/640x360"
    }
]

var quizIndex = 0;

var score = 0;

var userAnswer;

function printQuestion(){
    $("#question-container").removeClass("hide");

    $("#question").text(quizArray[quizIndex].q);

    $("#answer-1").text(quizArray[quizIndex].a1);

    $("#answer-2").text(quizArray[quizIndex].a2);

    $("#answer-3").text(quizArray[quizIndex].a3);

    $("#answer-4").text(quizArray[quizIndex].a4);
}

function printCorrect(){
    $("#results-container").removeClass("hide");

    $("#result").text(quizArray[quizIndex].c);

    $("#image").html("<img> class=image").attr("scr", quizArray[quizIndex].image)
}

function printIncorrect(){

}

printQuestion();

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
        printQuestion();
        
    } else {
        $("#question-container").addClass("hide");
        $("#game-over-container").toggleClass("hide");
    }
})


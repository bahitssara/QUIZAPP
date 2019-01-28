'use strict';

let questionNum = 0;
let answerTotal = 0;

$(document).ready(function(){
   $('.start-button').on('click', renderQuestionPage)

})

function renderQuestionPage() {
    const data = questionList[questionNum];
    if (questionNum < questionList.length){   
   $('.main-page').replaceWith( `
    <section class="question-pages">
        <p class="question-counter">Question ${questionNum + 1}</p>
        <p class ="score-count">Score:${answerTotal}/10</p>
        <h2>${data.question}</h2>
        <form>  
            <fieldset>
                <label for="${data.choices[0]}">
                <input type="radio" id="${data.choices[0]}" class="radio-button" name="answerButton" value="${data.choices[0]}" checked>${data.choices[0]}</label>
                <label for="${data.choices[1]}">
                <input type="radio" id="${data.choices[1]}" class="radio-button" name="answerButton" value="${data.choices[1]}" checked>${data.choices[1]}</label>
                <label for="${data.choices[2]}">
                <input type="radio" id="${data.choices[2]}" class="radio-button" name="answerButton" value="${data.choices[2]}" checked>${data.choices[2]}</label>
                <label for="${data.choices[3]}">
                <input type="radio" id="${data.choices[3]}" class="radio-button" name="answerButton" value="${data.choices[3]}" checked>${data.choices[3]}</label>
            </fieldset>
            <button class="submit-button">Submit</button>
        </form>
    </section>`
   )
    } else {
        renderResultsPage();
    }
    $('.submit-button').on('click', submitAnswer)
    
}


function rightAnswerPage() {
    $('.question-pages').replaceWith(`
    <section class='main-page'>
        <h2>Cheers! Looks like I've got some competition!</h2>
        <img src="YesRight2.gif" class="right-gif" alt="Sincerity is Scary Dancing">
        <button class="next-button">FORWARD MATE</button>
    </section>`)

}

function wrongAnswerPage(){
    const correctAnswer = `${questionList[questionNum].rightAnswer}`
    $('.question-pages').replaceWith(`
    <section class='main-page'>
        <h2>Bollocks, seems like you still got some googling to do!</h2>
        <img src="MattyWrong2.gif" class="gif-resize" alt ="Matty singing">
        <p class="correct-answer">The right answer is : ${correctAnswer} !</p>
        <button class="next-button">MOVING ON</button>
    </section>`)

}


function submitAnswer(e){
    e.preventDefault();
    const check = questionList[questionNum]; 
    const checkAnswer = $('input[name=answerButton]:checked').val();

    if (checkAnswer === check.rightAnswer){
        rightAnswerPage(); 
        answerTotal++;
    } else {
        wrongAnswerPage();
    }
    
    $('.next-button').on('click', renderQuestionPage)
    questionNum++;
}


function renderResultsPage(){
    $('.main-page').replaceWith(`
    <section class='main-page'>
        <h2>The results are in!</h2>
        <img src="finalresult2.gif" class="final-results" alt="matty dancing">
        <p class="results">You got ${answerTotal}/10!</p>
        <button class="restart-button">Try Again?</button>
    </section>
    `)

    $('.restart-button').on('click', function(event){
        location.reload();
    });
}




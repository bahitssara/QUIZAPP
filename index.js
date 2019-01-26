'use strict';

let questionNum = 0;
let answerKey = 0;

$(document).ready(function(){
   $('.start-button').on('click', renderQuestionPage)

})




function renderQuestionPage() {
    const data = questionList[questionNum];
    
   $('.main-page').replaceWith( `
    <section class="question-pages">
        <p class="question-counter">${questionNum + 1}/10</p>
        <h2>${data.question}</h2>
        <form>  
            <fieldset>
                <label for="${data.choices[0]}">${data.choices[0]}</label>
                <input type="radio" id="${data.choices[0]}" name="answerButton" value="${data.choices[0]}" checked> 
                <label for="${data.choices[1]}">${data.choices[1]}</label>
                <input type="radio" id="${data.choices[1]}" name="answerButton" value="${data.choices[1]}" checked>
                <label for="${data.choices[2]}">${data.choices[2]}</label>
                <input type="radio" id="${data.choices[2]}" name="answerButton" value="${data.choices[2]}" checked>
                <label for="${data.choices[3]}">${data.choices[3]}</label>
                <input type="radio" id="${data.choices[3]}" name="answerButton" value="${data.choices[3]}" checked>
            </fieldset>
            <button class="submit-button">Submit</button>
        </form>
    </section>`
   )
    $('.submit-button').on('click', submitAnswer)
    questionNum++;
}


function rightAnswerPage() {
    $('question-pages').replaceWith(`<section class=answerFeedback>
    <h2>Cheers! Looks like I've got some competition!</h2>
    <img src="ANSWERRIGHT.gif" alt="Sincerity is Scary Dancing">
    <button class ="nextButton">FORWARD MATE</button>
    </section>`)
}

function wrongAnswerPage(){
    $('question-pages').replaceWith(`<section class=answerFeedback>
    <h2>Bollocks, seems like you still got some googling to do!</h2>
    <img src="ANSWERWRONG.gif" alt ="Matty singing">
    <button class="nextButton">MOVING ON</button>
    </section>`)
}


function submitAnswer(e){
    const check = questionList[rightAnswer];
    e.preventDefault();
    const checkAnswer = $('input[name=answerButton]:checked').val();
    if (checkAnswer === check.rightAnswer){
        rightAnswerPage(); 
        }else {
        wrongAnswerPage();
        }
}


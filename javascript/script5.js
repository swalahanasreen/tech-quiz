const quizData = [{
        question: "Using _______ statement is how you test for a specific condition.",
        a: "Select.",
        b: "if",
        c: "switch",
        d: "for",
        correct: "b",
    },
    {
        question: " Which of the following is the structure of an if statement?",
        a: "if (conditional expression is true) thenexecute this codeend if",
        b: " if (conditional expression is true)execute this codeend if",
        c: " if (conditional expression is true) {then execute this code>->}",
        d: "if (conditional expression is true) then {execute this code}”;",
        correct: "c",
    },
    {
        question: "To set up the window to capture all Click events, we use which of the following statement?",
        a: "window.captureEvents(Event.CLICK)",
        b: "window.handleEvents (Event.CLICK);",
        c: "window.routeEvents(Event.CLICK )",
        d: "window.raiseEvents(Event.CLICK );",
        correct: "a",
    },
    {
        question: "In JavaScript, _________ is an object of the target language data type that encloses an object of the source language.",
        a: "a wrapper",
        b: "a link",
        c: "a cursor",
        d: "a form",
        correct: "a",
    },
    {
        question: "Choose the server-side JavaScript object?",
        a: "FileUpLoad",
        b: "Function",
        c: "File",
        d: "Date",
        correct: "c",
    },
    {
        question: "What is mean by “this” keyword in javascript?",
        a: "It refers current object",
        b: "It referes previous object",
        c: "It is variable which contains value",
        d: " None of the above",
        correct: "a",
    },


];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if (currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>
                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})
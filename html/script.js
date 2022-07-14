const quizData = [{
       question:"What is HTML?",
       a: "HTML describes the structure of a webpage",
       b: "HTML is the standard markup language mainly used to create web pages",
       c: "HTML consists of a set of elements that helps the browser how to view the content",
       d: "all the above",
       correct: "d",
    },
    {
        question: "What is the correct syntax of doctype in HTML5?",
        a: "</doctype html>",
        b: "<doctype html>",
        c: "<doctype html!>",
        d: "<!doctype html>",
        correct: "d",
    },
    {
        question: "What is DOM in HTML?",
        a: "Language dependent application programming",
        b: "Hierarchy of objects in ASP.NET",
        c: "Application programming interface",
        d: "Convention for representing and interacting with objects in html documents",
        correct: "d",
    },
    {
        question: "In which part of the HTML metadata is contained?",
        a: "head tag",
        b: "title tag",
        c: "html tag",
        d: "body tag",
        correct: "a",
    },
    {
        question: "Which of the following is not a HTML5 tag?",
        a: " <track>",
        b: "<video>",
        c: "<slider>",
        d: "<source>",
        correct: "c",
    },
    {
        question: "Which of the following is not the element associated with the HTML table layout?",
        a: "alignment",
        b: "color",
        c: "size",
        d: "spanning",
        correct: "b",
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
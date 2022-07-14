const quizData = [{
        question: "  ______ tag is an extension to HTML that can enclose any number of JavaScript statements.",
        a: "<SCRIPT>",
        b: "<BODY>",
        c: "<HEAD>",
        d: "<TITLE>",
        correct: "a",
    },
    {
        question: "How does JavaScript store dates in a date object?",
        a: "The number of milliseconds since January 1st, 1970",
        b: "The number of days since January 1st, 1900",
        c: "The number of seconds since Netscape’s public stock offering.",
        d: "None of the above",
        correct: "a",
    },
    {
        question: " Which of the following attribute can hold the JavaScript version?",
        a: "LANGUAGE",
        b: "SCRIPT",
        c: "VERSION",
        d: "None of the above",
        correct: "a",
    },
    {
        question: "What is the correct JavaScript syntax to write “Hello World”?",
        a: "System.out.println(“Hello World”)",
        b: "println (“Hello World”)",
        c: "document.write(“Hello World”)",
        d: "response.write(“Hello World”)",
        correct: "c",
    },
    {
        question: "Which of the following way can be used to indicate the LANGUAGE attribute?",
        a: "<LANGUAGE=”JavaScriptVersion”>",
        b: "<SCRIPT LANGUAGE=”JavaScriptVersion”>",
        c: "<SCRIPT LANGUAGE=”JavaScriptVersion”> JavaScript statements…</SCRIPT>",
        d: "<SCRIPT LANGUAGE=”JavaScriptVersion”!> JavaScript statements…</SCRIPT>",
        correct: "c",
    },
    {
        question: "What is the correct syntax for referring to an external script called ” abc.js”",
        a: "<script href=” abc.js”>",
        b: "<script name=” abc.js”>",
        c: "<script src=” abc.js”>",
        d: "None of the above",
        correct: "c",
    },

    {
        question: "Inside which HTML element do we put the JavaScript?",
        a: "<js>",
        b: "<scripting>",
        c: "<script>",
        d: "<javascript>",
        correct: "c",
    },
    {
        question: "Which types of image maps can be used with JavaScript?",
        a: "Server-side image maps",
        b: "Client-side image maps ",
        c: "Server-side image maps and Client-side image maps",
        d: "None of the above",
        correct: "b",
    },
    {
        question: "Which of the following navigator object properties is the same in both Netscape and IE?",
        a: "navigator.appCodeName ",
        b: " navigator.appName",
        c: "navigator.appVersion",
        d: "None of the above",
        correct: "a",
    },
    {
        question: " Which is the correct way to write a JavaScript array?",
        a: "var txt = new Array(1:”tim”,2:”kim”,3:”jim”)",
        b: "var txt = new Array:1=(“tim”)2=(“kim”)3=(“jim”)",
        c: "var txt = new Array(“tim”,”kim”,”jim”)",
        d: "var txt = new Array=”tim”,”kim”,”jim”",
        correct: "c",
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
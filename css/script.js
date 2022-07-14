const quizData = [{
        question: "What does CSS stand for?",
        a: "Creative Style Sheets",
        b: "Colorful Style Sheets",
        c: "Cascading Style Sheets",
        d: "Computer Style Sheets",
        correct: "c",
    },
    {
        question: "What is the correct HTML for referring to an external style sheet?",
        a: "<stylesheet>mystyle.css</stylesheet />",
        b: " <style src=”mystyle.css” />",
        c: "<link rel=”stylesheet” type=”text/css” href=”mystyle.css”>",
        d: " none of above",
        correct: "c",
    },
    {
        question: "Where in an HTML document is the correct place to refer to an external style sheet?",
        a: "At the end of the document",
        b: " In the <head> section",
        c: " At the top of the document",
        d: "In the <body> section",
        correct: "b",
    },
    {
        question: "Which HTML attribute is used to define inline styles?",
        a: " font ",
        b: "class",
        c: "styles",
        d: " style",
        correct: "d ",
    },
    {
        question: "Which is the correct CSS syntax?",
        a: "body {color: black}",
        b: "{body;color:black}",
        c: "{body:color=black(body}",
        d: "body:color=black",
        correct: "a",
    },
    {
        question: "How do you change the text color of an element?",
        a: "text-color=",
        b: "fgcolor:",
        c: " color:",
        d: "text-color:",
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
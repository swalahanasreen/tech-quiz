const quizData = [{
       question:"Which tag is used to create a numbered list in HTML?",
       a: " <ol>",
       b: "<ul>",
       c: "<li>",
       d: "<ll>",
       correct: "a",
    },
    {
        question: "How to create a checkbox in HTML Form?",
        a: "<input type=”text”>",
        b: "<input type=”textarea”>",
        c: "<input type=”checkbox”>",
        d: " <input type=”button”>",
        correct: "c",
    },
    {
        question: "Which of the following extension is used to save an HTML file?",
        a: ".hl",
        b: ".h",
        c: ".htl",
        d: "html",
        correct: "d",
    },
    {
        question: "Which HTML tag is used to convert the plain text into italic format?",
        a: "<b>",
        b: " <p>",
        c: "<i>",
        d: "<a>",
        correct: "c",
    },
    {
        question: "Which tag is used to create a blank line in HTML?",
        a: "<b>",
        b: "<br>",
        c: "<em>",
        d: "<a>",
        correct: "b",
    },
    {
        question: "What is the use of <hr/> tag in HTML? ",
        a: "For making content appearance italics",
        b: "To create vertical rule between sections",
        c: "To create a line break",
        d: "To create horizontal rule between sections",
        correct: "d",
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
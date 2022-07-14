const quizData = [{
        question: "Which of the following class makes round corner image for automatically adjust to fit the size of the screen?",
        a: ".img-res-image",
        b: ".img-responsive-image",
        c: ".img-responsive",
        d: " .img-res",
        correct: "c",
    },
    {
        question: "Medium devices are defined as having a screen width from",
        a: " 900 pixels to 1000 pixels",
        b: " 768 pixels to 991 pixels",
        c: " 992 pixels to 1199 pixels",
        d: " 512 pixels to 2048 pixels",
        correct: "c",
    },
    {
        question: "Which of the following class makes round corner image",
        a: " .img-rounded",
        b: " .img-round-corner",
        c: " .img-rnd",
        d: ".img-circle",
        correct: "a",
    },
    {
        question: "The .container class provides",
        a: "6 columns across the page ",
        b: "12 columns across the page",
        c: "columns across the page",
        d: "columns across the page",
        correct: "b",
    },
    {
        question: " Default size of H5 bootstrap heading,",
        a: "14px",
        b: "16px",
        c: "18px",
        d: "20px",
        correct: "a",
    },
    {
        question: " The .container-fluid class provides",
        a: "Full width container",
        b: "Fixed width container",
        c: "Table format",
        d: "To create a Form",
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
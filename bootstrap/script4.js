const quizData = [{
        question: "Glyphicons used for",
        a: "using different icons like badge",
        b: " using slideshow",
        c: " using animation",
        d: " using favicon",
        correct: "a",
    },
    {
        question: " Which class creates pagination?",
        a: " pagination",
        b: " pager",
        c: " pagination-link",
        d: " link-pagination",
        correct: "a",
    },
    {
        question: "Default size of H3 bootstrap heading",
        a: "18px",
        b: " 30px",
        c: " 26px",
        d: "24px",
        correct: "d",
    },
    {
        question: "Which class creates list of items?",
        a: "lst-group ",
        b: "list-group",
        c: "menu-group",
        d: "list-grp",
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
        question: " Bootstrap is developed by",
        a: "James Gosling",
        b: "Mark Jukervich",
        c: " Mark Otto and Jacob Thornton",
        d: "None of them",
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
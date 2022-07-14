const quizData = [{
        question: "Which of the following class applies the hover color to a particular row or cell of a table?",
        a: " active",
        b: "success",
        c: "warning",
        d: "danger",
        correct: "a",
    },
    {
        question: "Which of the following bootstrap style of button indicates caution should be taken with this action?",
        a: "btn-warning",
        b: " btn-danger",
        c: "btn-link",
        d: "btn-info",
        correct: "a",
    },
    {
        question: "Which of the following bootstrap styles are used to create a vertical pills navigation?",
        a: "nav, .nav-tabs",
        b: "nav, .nav-pills",
        c: "nav, .nav-pills, .nav-stacked",
        d: " nav, .nav-tabs, .nav-justified",
        correct: "c",
    },
    {
        question: "Which class indicates a dropdown menu?",
        a: ".dropdown-list ",
        b: ".select",
        c: ".dropdown",
        d: "none of the above",
        correct: "c",
    },
    {
        question: "A standard navigation tab is created with:,",
        a: "<ul class=”navigation-tabs”>",
        b: "<ul class=”nav tabs”>",
        c: "<ul class=”navnav-tabs”>",
        d: "<ul class=”navnav-navbar”>",
        correct: "b",
    },
    {
        question: "Which class is used to create a black navigation bar?",
        a: ".navbar-default",
        b: ".navbar-black",
        c: ".navbar-dark",
        d: ".navbar-dark",
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
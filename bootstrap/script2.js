const quizData = [{
        question: "Which plugin is used to cycle through elements, like a slideshow?",
        a: "orbit",
        b: "slideshow",
        c: "scrollspy",
        d: "carousel",
        correct: "d",
    },
    {
        question: " Which plugin is used to create a modal window?",
        a: " modal",
        b: " window",
        c: "dialog Box",
        d: " popup",
        correct: "a",
    },
    {
        question: "Which plugin is used to create a tooltip?",
        a: " popup",
        b: "tooltip",
        c: "modal",
        d: "dialog Box",
        correct: "b",
    },
    {
        question: ". Bootstrap’s grid system allows up to",
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
        a: "Fixed width container",
        b: "Table format",
        c: "To create a Form",
        d: "Full width container",
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
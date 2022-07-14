const quizData = [{
       question:"Which of the following CSS property sets the font size of text?",
       a: "font-size",
       b: "text-size",
       c: "text",
       d: "size",
       correct: "a",
    },
    {
        question: "Which of the following is not the property of the CSS box model?",
        a: "margin",
        b: "color",
        c: "width",
        d: "height",
        correct: "b",
    },
    {
        question: "Which of the following CSS property specifies the look and design of an outline?",
        a: "outline-style",
        b: "outline-format",
        c: "outline-font",
        d: "none of the mentioned",
        correct: "a",
    },
    {
        question: "Which of the following CSS property sets the shadow for a box element?",
        a: "set-shadow",
        b: "box-shadow",
        c: "shadow",
        d: "canvas-shadow",
        correct: "b",
    },
    {
        question: "Which of the following CSS property is used to set the color of the text?",
        a: " text-decoration",
        b: "pallet",
        c: "colour",
        d: "color",
        correct: "d",
    },
    {
        question: "Which of the following CSS selector selects the elements that are checked?",
        a: ":checked",
        b: " E ~ F",
        c: "::after",
        d: "none of the mentioned",
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
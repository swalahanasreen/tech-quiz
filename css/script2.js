const quizData = [{
       question:"Which of the following CSS style property is used to specify an italic text?",
       a: "style.",
       b: "font",
       c: "font-style",
       d: "@font-face",
       correct: "c",
    },
    {
        question: "Which of the following are the CSS Extension Prefixes for Webkit?",
        a: "-chrome",
        b: " -web",
        c: "  -o-",
        d: " -webkit",
        correct: "d",
    },
    {
        question: " Which of the following is the correct syntax to link an external style sheet in the HTML file?",
        a: "<link rel=”stylesheet” href=”style.css” />",
        b: "<link rel=”stylesheet” src=”style.css” />",
        c: "<style rel=”stylesheet” src=”style.css” />",
        d: "<style rel=”stylesheet” link=”style.css” />",
        correct: "a",
    },
    {
        question: "Which of the following function defines a linear gradient as a CSS image?",
        a: "gradient()",
        b: "linear-gradient()",
        c: "grayscale()",
        d: "image()",
        correct: "b",
    },
    {
        question: "Which of the following CSS property can be used to set the image as a border instead of the border style?",
        a: "background-image-source",
        b: "background-image",
        c: "border-image-source",
        d: "border-image",
        correct: "c",
    },
    {
        question: "Which of the following is the correct way to apply CSS Styles?",
        a: "in an external CSS file",
        b: "inside an HTML element",
        c: "inside the <head> section of an HTML page",
        d: "all of the mentioned",
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
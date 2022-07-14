const quizData = [{
       question:" Which attribute specifies a unique alphanumeric identifier to be associated with an element?",
       a: "type",
       b: "article",
       c: "id",
       d: "class",
       correct: "c",
    },
    {
        question: "Which of the following is an HTML specification used to add more information to HTML tags?",
        a: "Modifydata",
        b: "Minidata",
        c: "Macrodata",
        d: "Microdata",
        correct: "d",
    },
    {
        question: " Which HTML element is used for YouTube videos?",
        a: " <samp>",
        b: "<small>",
        c: "<frame>",
        d: "<iframe>",
        correct: "d",
    },
    {
        question: "Which of the following HTML element is used for canvas graphics?",
        a: "<css>",
        b: "<paint>",
        c: "<canvas>",
        d: "<graphic>",
        correct: "c",
    },
    {
        question: "Which method is used to get user’s position?",
        a: "getCurrentPosition()",
        b: "getDirectPosition()",
        c: "post()",
        d: "getDirection",
        correct: "a",
    },
    {
        question: "What does getCurrentPosition() returns?",
        a: "latitude",
        b: "longitude",
        c: "direction",
        d: "coordinates",
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
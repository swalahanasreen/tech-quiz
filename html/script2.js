const quizData = [{
        question: "Which element is used for or styling HTML5 layout?",
        a: "CSS",
        b: "jQuery",
        c: "JavaScript",
        d: "all the above",
        correct: "a",
    },
    {
        question: " HTML is a subset of ___________",
        a: "SGMT",
        b: "SGML",
        c: "SGME",
        d: "XHTML",
        correct: "b",
    },
    {
        question: " Which character is used to represent when a tag is closed in HTML?Success callback function evoke only when ___________",
        a: "user accepts to share location information",
        b: " always evoke",
        c: "gps is accessible",
        d: "only by mobile browser",
        correct: "a",
    },
    {
        question: "In HTML, which attribute is used to create a link that opens in a new window tab?",
        a: "src=”_blank”",
        b: " alt=”_blank”",
        c: " target=”_self”",
        d: "target=”_blank”",
        correct: "d",
    },
    {
        question: "Which HTML element is used for short quote?",
        a: "<em>",
        b: "<abbr>",
        c: "<q>",
        d: "<blockquote>",
        correct: "c",
    },
    {
        question: "Which HTML element is used for abbreviation or acronym?",
        a: "<em>",
        b: "<abbr>",
        c: "<q>",
        d: "<blockquote>",
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
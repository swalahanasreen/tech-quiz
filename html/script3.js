const quizData = [{
       question:" Which of the following HTML tag is used to add a row in a table?",
       a: "<th>",
       b: "<td>",
       c: "<tr>",
       d: "<tt>",
       correct: "c",
    },
    {
        question: "What is the work of <address> element in HTML5?",
        a: "contains IP address",
        b: "contains home address",
        c: "contains url",
        d: " contains contact details for author",
        correct: "d",
    },
    {
        question: "Which of the following tag is used to create a text area in HTML Form?",
        a: "<textarea> </textarea>",
        b: "<text></text>",
        c: "<input type=”text” />",
        d: "<input type=”textarea” />",
        correct: "a",
    },
    {
        question: "To show deleted text, which HTML element is used?",
        a: "<del>",
        b: "<em>",
        c: "<strong>",
        d: "<ins>",
        correct: "a",
    },
    {
        question: "What is the correct syntax of web address? ",
        a: "port://domain.filenmae:path/scheme/prefix",
        b: "prefix://scheme.port:domain/filename/path",
        c: "path://prefix.port:domain/filename/scheme",
        d: "scheme://prefix.domain:port/path/filename",
        correct: "d",
    },
    {
        question: " Which tag is used to create a dropdown in HTML Form?",
        a: "<input>",
        b: "<select>",
        c: "<text>",
        d: "<textarea>",
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
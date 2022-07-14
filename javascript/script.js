const quizData = [{
        question: "Which of the following type of variable is visible everywhere in your JavaScript code?",
        a: "Global variable",
        b: "local variable",
        c: "Both of the above",
        d: "None of the above",
        correct: "a",
    },
    {
        question: "Which built-in method returns the character at the specified index?",
        a: "characterAt()",
        b: "getCharAt()",
        c: "charAt()",
        d: "None of the above",
        correct: "c",
    },
    {
        question: "Which built-in method returns the calling string value converted to upper case?",
        a: "toUpperCase()",
        b: "toUpper()",
        c: "changeCase(case)",
        d: "None of the above",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
    {
        question: "Which of the following function of Number object returns a string value version of the current number?,",
        a: "toString()",
        b: "toFixed()",
        c: "toLocaleString()",
        d: "toPrecision()",
        correct: "a",
    },
    {
        question: "Which of the following function of String object is used to match a regular expression against a string?",
        a: "concat()",
        b: "match()",
        c: "search()",
        d: "replace()",
        correct: "b",
    },

    {
        question: "Which of the following function of String object creates a string to be displayed as bold as if it were in a <b> tag?",
        a: "anchor()",
        b: "big()",
        c: "blink()",
        d: "bold()",
        correct: "d",
    },
    {
        question: "Which of the following function of Array object returns a string representing the array and its elements?",
        a: "toSource()",
        b: "sort()",
        c: "splice()",
        d: "toString()",
        correct: "d",
    },
    {
        question: "Which of the following function of String object creates a string to be displayed as bold as if it were in a <sub> tag?",
        a: "sup()",
        b: "small()",
        c: "sub()",
        d: "strike()",
        correct: "c",
    },
    {
        question: " Which of the following function of Array object returns the last (greatest) index of an element within the array equal to the specified value, or -1 if none is found?",
        a: "indexOf()",
        b: "join()",
        c: "lastIndexOf()",
        d: "map()",
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
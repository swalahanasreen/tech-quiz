const quizData = [{
        question: " What does the <noscript> tag do?",
        a: "Enclose text to be displayed by non-JavaScript browsers.",
        b: "Prevents scripts on the page from executing.",
        c: "Describes certain low-budget movies.",
        d: "None of the above",
        correct: "a",
    },
    {
        question: " If para1 is the DOM object for a paragraph, what is the correct syntax to change the text within the paragraph?",
        a: "New Text",
        b: "para1.value=”New Text",
        c: "para1.firstChild.nodeValue= “New Text",
        d: "para1.nodeValue=”New Text”;",
        correct: "b",
    },
    {
        question: "JavaScript entities start with _______ and end with _________.",
        a: "Semicolon, colon",
        b: "Semicolon, Ampersand",
        c: "Ampersand, colon",
        d: "Ampersand, semicolon",
        correct: "d",
    },
    {
        question: "Which of the following best describes JavaScript?",
        a: " a low-level programming language.",
        b: "a scripting language precompiled in the browser.",
        c: "a compiled scripting language.",
        d: "an object-oriented scripting language.",
        correct: "d",
    },
    {
        question: "Choose the server-side JavaScript object?",
        a: "FileUpLoad",
        b: "Function",
        c: "File",
        d: "Date",
        correct: "c",
    },
    {
        question: "Choose the client-side JavaScript object?",
        a: "Database",
        b: "Cursor",
        c: "Client",
        d: " FileUpLoad",
        correct: "d",
    },

    {
        question: "Which of the following is not considered a JavaScript operator?",
        a: "new",
        b: "this",
        c: "typeof",
        d: "delete",
        correct: "b",
    },
    {
        question: " ______method evaluates a string of JavaScript code in the context of the specified object.",
        a: "Eval",
        b: "ParseInt ",
        c: "ParseFloat",
        d: "Efloat",
        correct: "a",
    },
    {
        question: "Which of the following event fires when the form element loses the focus: <button>, <input>, <label>,<select>, <textarea>?",
        a: "onfocus ",
        b: "onblur",
        c: "onclick",
        d: "ondblclick",
        correct: "b",
    },
    {
        question: "The syntax of Eval is ________________",
        a: "[objectName.]eval(numeriC.",
        b: " [objectName.]eval(string)",
        c: "[EvalName.]eval(string)",
        d: " [EvalName.]eval(numeriC.",
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
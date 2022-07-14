const quizData = [{
        question: " Why so JavaScript and Java have similar name?",
        a: "JavaScript is a stripped-down version of Java",
        b: "JavaScript’s syntax is loosely based on Java’s",
        c: "They both originated on the island of Java",
        d: "None of the above",
        correct: "b",
    },
    {
        question: "When a user views a page containing a JavaScript program, which machine actually executes the script?",
        a: "The User’s machine running a Web browser",
        b: "The Web server",
        c: "A central machine deep within Netscape’s corporate office",
        d: "None of the above",
        correct: "a",
    },
    {
        question: " ______ JavaScript is also called client-side JavaScript",
        a: "Microsoft",
        b: "Navigator",
        c: "LiveWire",
        d: "Native",
        correct: "b",
    },
    {
        question: "What are variables used for in JavaScript Programs?",
        a: "Storing numbers, dates, or other values",
        b: "Varying randomly",
        c: "Causing high-school algebra flashbacks",
        d: "none of the above",
        correct: "a",
    },
    {
        question: "_____ JavaScript statements embedded in an HTML page can respond to user events such as mouse-clicks, form input, and page navigation.",
        a: "Client-side",
        b: "Server-side",
        c: "Local",
        d: "Native",
        correct: "a",
    },
    {
        question: "What should appear at the very end of your JavaScript? The <script LANGUAGE=”JavaScript”>tag",
        a: "The </script>",
        b: "The <script>",
        c: "The END statement",
        d: "None of the above",
        correct: "a",
    },

    {
        question: "Which of the following can’t be done with client-side JavaScript?",
        a: "Validating a form",
        b: "Sending a form’s contents by email",
        c: "Storing the form’s contents to a database file on the server",
        d: "None of the above",
        correct: "c",
    },
    {
        question: "Which of the following are capabilities of functions in JavaScript?",
        a: "Return a value",
        b: "Accept parameters and Return a value ",
        c: "Accept parameters",
        d: "None of the above",
        correct: "c",
    },
    {
        question: "Which of the following is not a valid JavaScript variable name?",
        a: "2names",
        b: " _first_and_last_names",
        c: "FirstAndLast",
        d: "None of the above",
        correct: "a",
    },
    {
        question: "  __________ JavaScript is also called server-side JavaScript.",
        a: "Microsoft",
        b: "Navigator",
        c: "LiveWire",
        d: "Native",
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
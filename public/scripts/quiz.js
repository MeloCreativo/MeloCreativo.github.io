// DEFINICION DE VALORES CONSTANTES
const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

// DEFINICION DE VALORES VARIABLES
let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

// Preguntas para "QuizScript"
let questions = [
    {
        question:  "¿Quién pintó la Mona Lisa?",
        choice1: "Leonardo Devecio",
        choice2: "Miguel Ángel",
        choice3: "Leonardo Davinci",
        choice4: "Francesco Virgolini",
        answer: 3,
    },
    {
        question:  "¿Quién fue el encargado de pintar el techo de la Capilla Sixtina?",
        choice1: "Donatello",
        choice2: "Neil Amstrong",
        choice3: "Miguel Angel",
        choice4: "Vincent Van Gogh",
        answer: 3,
    },
    {
        question:  "¿Quién fue el reconocido autor de El Guernica?",
        choice1: "Ricardo Mollo",
        choice2: "Pablo Picasso",
        choice3: "Santos Biasatti",
        choice4: "Claude Monet",
        answer: 2,
    },
    {
        question:  "¿Quién fue el famoso autor de la obra \"El grito\"?",
        choice1: "Eduard Munch",
        choice2: "Zinedin Zidane",
        choice3: "Jean Claude Van Damme",
        choice4: "Bruce Lee",
        answer: 1,
    }
]

const SCORE_POINTS = 100 // Seteo del valor para cada pregunta correcta
const MAX_QUESTIONS = 4 // Setelo del valor máximo de preguntas a mostrar

// INIICO DEL JUEGO
startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

// Trackeo y busqueda de las preguntas
getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('/pages/ending-quiz.html')
    }

    questionCounter++
    progressText.innerText = `Pregunta ${questionCounter} de ${MAX_QUESTIONS}` // Indice de preguntas
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%` // Obtencion del puntaje

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length) // Seteo de orden random para mostrar las preguntas
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => { // Obtencion de la respuesta correcta
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => { // Identificacion de click en respuesta correcta o incorrecta
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct-answer' : 'incorrect-answer' // Dinamismo de clases

        if(classToApply === 'correct-answer') { // Aumento de puntos si la respuesta es correcta
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()
        }, 1000)
    })
})

incrementScore = num => { // Obtencion del puntaje
    score += num
    scoreText.innerText = score
}

/**********************************/
/* LLAMADA A LA FUNCION PRINCIPAL */
/**********************************/
startGame()
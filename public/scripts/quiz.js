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
const questions = {
    'html': [
        {
            question:  "¿Cuál es el significado de HTML?",
            choice1: "Hypertext and Markup Links",
            choice2: "Hyper Tool Markup Links",
            choice3: "Hyper Text Markup Language",
            choice4: "Hyper Title Markup League",
            answer: 3,
        },
        {
            question:  "¿Cuál es la etiqueta utilizada para definir un párrafo?",
            choice1: "<p>",
            choice2: "<b>",
            choice3: "<strong>",
            choice4: "<parragraph>",
            answer: 1,
        },
        {
            question:  "¿Cuál es la etiqueta correcta para crear un hyperlink?",
            choice1: "<a href=\"http://www.quizscript.com\">>",
            choice2: "<a>",
            choice3: "<a target=\"http://www.quizscript.com\">",
            choice4: "<a href=\"...\">",
            answer: 1,
        },
        {
            question:  "¿Qué caracter es usado para marcar el cierre de una etiqueta?",
            choice1: "<",
            choice2: "/",
            choice3: "``",
            choice4: "+",
            answer: 2,
        }
    ],
    'css': [
        {
            question:  "¿Cuál es la propiedad utilizada para determinar el color del texto?",
            choice1: "text-color",
            choice2: "font-color",
            choice3: "color-text",
            choice4: "color",
            answer: 4,
        },
        {
            question:  "¿A qué hacen referencia las siglas CSS?",
            choice1: "Counter Strike Sheet",
            choice2: "Classic Styles Sense",
            choice3: "Cascade Style Ships",
            choice4: "Cascade Style Sheets",
            answer: 4,
        },
        {
            question:  "¿Cuál de las siguientes opciones no corresponde a un pre-procesador de CSS?",
            choice1: "Sass",
            choice2: "Less",
            choice3: "Fass",
            choice4: "Stylus",
            answer: 3,
        },
        {
            question:  "¿Cuál de las siguientes opciones no corresponde a una propiedad de CSS?",
            choice1: "background-color",
            choice2: "width-size",
            choice3: "content",
            choice4: "fill",
            answer: 2,
        }
    ],
    'javascript': [
        {
            question:  "¿Cuál de las siguientes opciones no corresponde a una naming-convention de JS?",
            choice1: "Camel Case",
            choice2: "Title Case",
            choice3: "String Case",
            choice4: "Lowercase",
            answer: 3,
        },
        {
            question:  "Si deseo mostrar un mensaje en forma de alerta debería utilizar...",
            choice1: "Un alert",
            choice2: "Un prompt",
            choice3: "Una función",
            choice4: "Un console.log",
            answer: 1,
        },
        {
            question:  "¿Cómo debería escribir \"Hello world\" en un alert?",
            choice1: "msg(Hello world)",
            choice2: "alert(\"Hello world\")",
            choice3: "alt(Hello World)",
            choice4: "(alert (Hello world))",
            answer: 2,
        },
        {
            question:  "¿Cómo se crea una función en Javascript?",
            choice1: "function:(myfunction)",
            choice2: "function myFunction()",
            choice3: "fun(myFunction)",
            choice4: "function = () => /function",
            answer: 2,
        }
    ],
    'python': [
        {
            question:  "¿Cómo debo insertar un comentario en Python?",
            choice1: "//Esto es un comentario",
            choice2: "#Esto es un comentario",
            choice3: "/*Esto es un comentario",
            choice4: "/-Esto es un comentario-/",
            answer: 2,
        },
        {
            question:  "¿Cuál de los siguientes no es un nombre válido para una variable?",
            choice1: "_myvar",
            choice2: "my-var",
            choice3: "Myvar",
            choice4: "my_var",
            answer: 3,
        },
        {
            question:  "¿Cuál es la extensión correcta para archivos de Python?",
            choice1: ".py",
            choice2: ".pyth",
            choice3: ".ph",
            choice4: ".psd",
            answer: 1,
        },
        {
            question:  "¿Cuál es la manera correcta de crear una función usando Python?",
            choice1: "def ()myfunction:",
            choice2: "Myfunct{}:",
            choice3: "myFunction()=()",
            choice4: "def myFunction():",
            answer: 4,
        }
    ],
    'react': [
        {
            question:  "¿Qué comando debería correr para iniciar el entorno local de React?",
            choice1: "npm build",
            choice2: "npm run dev",
            choice3: "npm serve",
            choice4: "npm start",
            answer: 4,
        },
        {
            question:  "¿Cuál es el puerto local usado por defecto en al utilizar React?",
            choice1: "3171",
            choice2: "8080",
            choice3: "3000",
            choice4: "3001",
            answer: 3,
        },
        {
            question:  "¿Qué palabra clave debería utilizar para crear una constante?",
            choice1: "var",
            choice2: "let",
            choice3: "con",
            choice4: "const",
            answer: 4,
        },
        {
            question:  "¿Qué operador debería utilizar para renderizar condicionalmente un componente de React?",
            choice1: "::",
            choice2: "||",
            choice3: "&&",
            choice4: "00",
            answer: 3,
        }
    ],
    'c': [
        {
            question:  "¿Cómo debería insertar un comentario en C++?",
            choice1: "/*Esto es un comentario",
            choice2: "//Esto es un comentario",
            choice3: "// Esto es un comentario",
            choice4: "# Esto es un comentario",
            answer: 3,
        },
        {
            question:  "¿Qué tipo de dato es creado para almacenar texto?",
            choice1: "String",
            choice2: "string",
            choice3: "MyString",
            choice4: "myString():",
            answer: 2,
        },
        {
            question:  "¿Cómo debería crear una variable con el número 5?",
            choice1: "double x = 5",
            choice2: "let x = 5",
            choice3: "int x = 5",
            choice4: "num x = 5",
            answer: 3,
        },
        {
            question:  "¿Qué método debería utilizar para conocer el largo de un string?",
            choice1: "lenght()",
            choice2: "getSize():",
            choice3: "length()",
            choice4: "len()",
            answer: 3,
        }
    ]
}

const SCORE_POINTS = 100 // Seteo del valor para cada pregunta correcta
const MAX_QUESTIONS = 4 // Setelo del valor máximo de preguntas a mostrar

// INIICO DEL JUEGO
startGame = () => {
    questionCounter = 0
    score = 0
    const queryString = window.location.search;
    console.log(queryString);
    const urlParams = new URLSearchParams(queryString);
    const category = urlParams.get('category')
    availableQuestions = [...questions[category]]
    getNewQuestion()
    console.log(availableQuestions)
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
// DEFINICION DE VALORES CONSTANTES
const username = document.querySelector('#username')
const saveScoreButton = document.querySelector('#saveScoreButton')
const finalScore = document.querySelector('#finalScore')
const mostRecentScore = localStorage.getItem('mostRecentScore')

// Se configuran los puntajes a mostrar
const highScores = JSON.parse(localStorage.getItem('highScores')) || []
// Se determinan la cantiad de puntajes a mostrar
const MAX_HIGH_SCORES = 5
// Texto y valor del puntaje final
finalScore.innerText = "Tu puntaje: " + mostRecentScore
// Si el usuario no ingresa un valor en el input no podrá validar
username.addEventListener('keyup', () => {
    saveScoreButton.disabled = !username.value
} )

// Guardado de puntaje alto
saveHighScore = e => {
    e.preventDefault()

    const score = {
        score: mostRecentScore,
        name: username.value
    }

    // Se agrega el puntaje a una lista
    highScores.push(score)

    highScores.sort((a,b) => {
        return b.score - a.score
    })

    highScores.splice(5)

    localStorage.setItem('highScores', JSON.stringify(highScores))
    window.location.assign('/')
}
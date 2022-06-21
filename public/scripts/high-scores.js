// DEFINICION DE VALORES CONSTANTES
const highScoresList = document.querySelector('#highScoresList')
const highScores = JSON.parse(localStorage.getItem('highScores')) || []

// Se obtienen los puntajes y se vuelcan en <li>
highScoresList.innerHTML = highScores.map (score => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`
}).join('')
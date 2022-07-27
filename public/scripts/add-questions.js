// Obtencion de data desde el form
const getFormData = (e) => {
    e.preventDefault();
    let form = document.querySelector('#add-question')
    let retrieveData = new FormData(form);
    var obj = {};
	for (var key of retrieveData.keys()) {
		obj[key] = retrieveData.get(key);
	}
	console.log(obj);
    const category = obj.categories;
    delete obj.categories;
    if (localStorage.getItem(category) != null) {
        const questionData = JSON.parse(localStorage.getItem(category))
        localStorage.setItem(category, JSON.stringify([...questionData,obj]));
    } else {
        localStorage.setItem(category, JSON.stringify([obj]));
    }
    clearInputs();
}
document.querySelector("[type='submit']").addEventListener('click', getFormData)

// Se realiza un check de todos los inputs completos para
// habilitar el submit button
function inputCheck() {
    const submitBtn = document.getElementById('save')
    
    const newQuestion = document.getElementById('new-question')
    const correctAnswer = document.getElementById('correct-answer')
    const incorrectAnswer1 = document.getElementById('incorrect-answer1')
    const incorrectAnswer2 = document.getElementById('incorrect-answer2')
    const incorrectAnswer3 = document.getElementById('incorrect-answer3')
    const selectCategories = document.getElementById('select-categories')
    
    const checkEnableButton = () => {
      submitBtn.disabled = !(
          newQuestion.value && 
          correctAnswer.value && 
          incorrectAnswer1.value &&
          incorrectAnswer2.value &&
          incorrectAnswer3.value &&
          selectCategories.value &&
          selectCategories.value !== 'Choose'
       )
    }
    
    newQuestion.addEventListener('change', checkEnableButton)
    correctAnswer.addEventListener('change', checkEnableButton)
    incorrectAnswer1.addEventListener('change', checkEnableButton)
    incorrectAnswer2.addEventListener('change', checkEnableButton)
    incorrectAnswer3.addEventListener('change', checkEnableButton)
    selectCategories.addEventListener('change', checkEnableButton)
}

inputCheck();

var serializeForm = function (form) {
	var obj = {};
	var formData = new FormData(form);
	for (var key of formData.keys()) {
		obj[key] = formData.get(key);
	}
	return obj;
};

// Se muestra y oculta el div en forma de alert
function showHideAlert() {
    var x = document.getElementById("hidden_div");
    if (x.style.display === "none") {
      x.style.display = "flex";
    } else {
      x.style.display = "none";
    }
}

function toggleClasses() {
    showHideAlert();
    setTimeout(showHideAlert, 6000);
}

// Se limpian los campos del formulario una vez completado
function clearInputs() {
    document.getElementById('add-question').reset();
    toggleClasses();
}
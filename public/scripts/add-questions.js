const getFormData = (e) => {
    e.preventDefault();
    let form = document.querySelector('#add-question')
    let coso = new FormData(form);
    console.log(coso);
    console.log(...coso);
    var obj = {};
	for (var key of coso.keys()) {
		obj[key] = coso.get(key);
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
}
document.querySelector("[type='submit']").addEventListener('click', getFormData)

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

function myFunc() {
    document.getElementById('add-question').reset();
    document.getElementById("hidden_div").style.display = "block";
    document.getElementById("add-question").onsubmit = function(){
        location.reload(true);
    }
}

function showDiv() {
    document.getElementById("hidden_div").style.display = "block";
}

var serializeForm = function (form) {
	var obj = {};
	var formData = new FormData(form);
	for (var key of formData.keys()) {
		obj[key] = formData.get(key);
	}
	return obj;
};
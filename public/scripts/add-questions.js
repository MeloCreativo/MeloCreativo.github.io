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

const submitBtn = document.getElementById('save')

const newQuestion = document.getElementById('new-question')
const correctAnswer = document.getElementById('correct-answer')
const incorrectAnswer1 = document.getElementById('incorrect-answer1')
const incorrectAnswer2 = document.getElementById('incorrect-answer2')
const incorrectAnswer3 = document.getElementById('incorrect-answer3')
const selectCategories = document.getElementById('select-categories')

// run this function whenever the values of any of the above 4 inputs change.
// this is to check if the input for all 4 is valid.  if so, enable submitBtn.
// otherwise, disable it.
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


var serializeForm = function (form) {
	var obj = {};
	var formData = new FormData(form);
	for (var key of formData.keys()) {
		obj[key] = formData.get(key);
	}
	return obj;
};
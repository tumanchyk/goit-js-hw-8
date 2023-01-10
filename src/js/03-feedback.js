import throttle from 'lodash.throttle';

const LOCAL_STORAGE_KEY = "feedback-form-state";
const formEl = document.querySelector('.feedback-form')
const emailInputEl = document.querySelector('[name="email"]')
const messageTextareaEl = document.querySelector('[name="message"]')

formEl.addEventListener('input', throttle(fillForm, 500))
formEl.addEventListener('submit', onFormSubmit)

fillFields()

const formData = {}

function fillForm(e){    
 formData.email = emailInputEl.value;
 formData.message = messageTextareaEl.value
const savedData = JSON.stringify(formData)
localStorage.setItem(LOCAL_STORAGE_KEY, savedData)
}

function onFormSubmit(e){
    e.preventDefault()
    if(emailInputEl.value && messageTextareaEl.value){
    console.log(formData) 
    e.currentTarget.reset()
    localStorage.removeItem(LOCAL_STORAGE_KEY)
    }
}
function fillFields(){
    const savedMessage = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if(savedMessage) {
       savedMessage ? emailInputEl.value = savedMessage.email : {};
       savedMessage ? messageTextareaEl.value = savedMessage.message : {}
    }
  }
  
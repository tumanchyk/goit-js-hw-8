// import throttle from 'lodash.throttle';

// const LOCAL_STORAGE_KEY = "feedback-form-state";

// const formEl = document.querySelector('.feedback-form')

// formEl.addEventListener('input', throttle(fillForm, 500))
// formEl.addEventListener('submit', onFormSubmit)

// fillFields()

// const formData = {}

// function fillForm(e){    
// if(e.target.name === 'email') formData.email = e.target.value;
// if(e.target.name === 'message') formData.message = e.target.value

// const savedData = JSON.stringify(formData)
// localStorage.setItem(LOCAL_STORAGE_KEY, savedData)
// }

// function onFormSubmit(e){
//     e.preventDefault()
//     e.currentTarget.reset()
//     localStorage.removeItem(LOCAL_STORAGE_KEY)
//     console.log(formData) 
// }
// function fillFields(){
//     const savedMessage = localStorage.getItem(LOCAL_STORAGE_KEY);
//     if(savedMessage) {
//         const data = JSON.parse(savedMessage)
//        const { email, message } = formEl.elements
//        email.value = data.email
//        message.value = data.message
//     }
    
//   }
  
const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textArea = document.querySelector('textarea')


const storageKey = "feedback-form-state";

const formData = {
    email: '',
    message: ''
}

form.addEventListener('submit', handleForm);
input.addEventListener('input', handleInput);
textArea.addEventListener('input', handleTextArea);



function handleForm(event){
    event.preventDefault();

    const form = event.currentTarget;

    const makeJson = JSON.stringify(formData)
    localStorage.setItem(storageKey, makeJson);


    form.reset();


}


function handleInput(event){
    const email = event.target.value;

    formData.email = email;
    console.log(formData);
    
    
}

function handleTextArea(event){
    const message = event.currentTarget.value;

    formData.message = message;
    console.log(formData);
}






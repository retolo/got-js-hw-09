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


const valueStorage = localStorage.getItem(storageKey);
const parc = JSON.parse(valueStorage);
if(parc.email !== '' || parc.message !== ''){
    input.value = parc.email;
    textArea.textContent = parc.message;
}



function handleForm(event){
    event.preventDefault();

    const form = event.currentTarget;

    const makeJson = JSON.stringify(formData)
    localStorage.setItem(storageKey, makeJson);

    


    if(formData.email === '' || formData.message === '')
        alert('Fill please all fields');

    else{
        form.reset();
        
    }
    


}


function handleInput(event){
    const email = event.target.value;

    formData.email = email;
   
    
    
}

function handleTextArea(event){
    const message = event.currentTarget.value;

    formData.message = message;
    
}






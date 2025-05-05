const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textArea = document.querySelector('textarea')

// localStorage.clear()
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
if(parc && parc.email  && parc.message){
    input.value = parc.email;
    textArea.value = parc.message;
}




function handleForm(event){
    event.preventDefault();

    const form = event.currentTarget;

    
    
    
    

    


    if(input.value.trim() === '' || textArea.value.trim() === ''){
        alert('Fill please all fields');
    }

    const makeJson = JSON.stringify(formData)
    localStorage.removeItem(storageKey);
    console.log(localStorage.getItem(storageKey));

    

    
    

    
    
    
    
    try {
        setTimeout(() => {
            localStorage.setItem(storageKey, makeJson);
        }, 7000); 
        
    } catch (error) {
        alert(error.message);
        
    }
        
        
    
    console.log(formData);
    form.reset();
    


}


function handleInput(event){
    
    const email = event.target.value;

    formData.email = email;
   
    
    
}

function handleTextArea(event){
    const message = event.currentTarget.value;

    formData.message = message;
    
}






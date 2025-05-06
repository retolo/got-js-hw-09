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
form.addEventListener('input', handleInputForm);
// input.addEventListener('input', handleInput);
// textArea.addEventListener('input', handleTextArea);


const valueStorage = localStorage.getItem(storageKey);
const parc = JSON.parse(valueStorage);
if(parc && parc.email  && parc.message){
    input.value = parc.email;
    textArea.value = parc.message;
}




function handleForm(event){
    event.preventDefault();

    const form = event.currentTarget;

    
    
    try {
        if(input.value.trim() === '' || textArea.value.trim() === ''){
            alert('Fill please all fields');
            console.log(formData);
        
            form.reset();
        }

        
    
        
         
        
    } catch (error) {
        alert(error.message);
        
    }
        
        
    
    
    


}


// function handleInput(event){
    
//     const email = event.target.value;

//     formData.email = email;
   
    
    
// }

// function handleTextArea(event){
//     const message = event.currentTarget.value;

//     formData.message = message;
    
// }


function handleInputForm(){
    const email = document.querySelector('input').value;
    const message = document.querySelector('textarea').value;

    formData.email = email;
    formData.message = message;
    localStorage.setItem(storageKey, JSON.stringify(formData));
    

}





import throttle from "lodash.throttle";
const formRef = document.querySelector(".feedback-form");
const FEEDBACK_FORM_STATE_KEY = "feedback-form-state";

initForm();
formRef.addEventListener("submit",onFormSubmit);
function onFormSubmit (event){
        event.preventDefault();
        formRef.reset();
        if(localStorage.getItem(FEEDBACK_FORM_STATE_KEY)){
            console.log(localStorage.getItem(FEEDBACK_FORM_STATE_KEY));
            localStorage.removeItem(FEEDBACK_FORM_STATE_KEY); 
       }
        // const formData = new FormData(formRef);
        // formData.forEach((value, name));
}
formRef.addEventListener("input", throttle(onTextareaInput, 500));

function onTextareaInput(event){
    let persistedFilters = localStorage.getItem(FEEDBACK_FORM_STATE_KEY);
    persistedFilters = persistedFilters ? JSON.parse(persistedFilters) : {};
    persistedFilters[event.target.name] = event.target.value;
    localStorage.setItem(FEEDBACK_FORM_STATE_KEY, JSON.stringify(persistedFilters));
    }

function initForm(){
    let persistedFilters = localStorage.getItem(FEEDBACK_FORM_STATE_KEY);
    
    if (persistedFilters) {
        persistedFilters = JSON.parse(persistedFilters);
        Object.entries(persistedFilters).forEach(([name,value]) =>{console.log(name,value)
        formRef.elements[name].value = value;
        });  
    }
}
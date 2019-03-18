import { elements } from "./base";

//return thing in input field
export const getInput = () => elements.inputForm.value; 

// clear input text field
export const clearInput = () => {

    elements.inputForm.value = '';

};

 
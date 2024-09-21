import { useState } from "react";
import TextInputForm from "./TextInputForm";

function TextInputFormContainer(){
    //taken a variable in react in which if the value of that changes the ui gets updated according to that
    //the variable can be changed through the setInputType method
    //default value of the variable inputType is set password.
    const [inputType,setInputType]=useState("password");

    function handleTextInputChange(event){
        console.log("Text input Changed");
        console.log(event.target.value);
    }
    function handleShowHideClick(){
        console.log("Show/Hide button clicked");
        if(inputType === "password"){
            setInputType("text");
        }else{
            setInputType("password");
        }
    }
    //bydefault when we enter the submit button in a form, the page gets refreshed so we are preventing that
    function handleFormSubmit(event){
        event.preventDefault();
        console.log("form submitted")
    }

    return (<TextInputForm 
        inputType={inputType}
        handleTextInputChange={handleTextInputChange}
        handleShowHideClick={handleShowHideClick}
        handleFormSubmit={handleFormSubmit}
    />);
}

export default TextInputFormContainer;
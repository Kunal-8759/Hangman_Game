import { useState } from "react";
import { useLocation } from "react-router-dom";
import PlayGame from "./PlayGame";

function PlayGameContainer(){
    const {state} = useLocation();
    const originalWord = state.value ;
    const hint = state.hint;

    //guessedLetter is an array
    const [guessedLetters,setGuessedLetters] = useState([]);
    const [step,setStep] = useState(0);

    function handleLetterClick(event){
        if(originalWord.includes(event.target.value)){
            console.log("Right Guess");
        }    
        else{
            console.log("Wrong Guess");
            setStep(step+1);
        }
        setGuessedLetters([...guessedLetters,event.target.value]);
    }

    return (
        <PlayGame 
            hint={hint}
            originalWord={originalWord}
            guessedLetters={guessedLetters}
            step={step}
            handleLetterClick={handleLetterClick}
        
        />
    );
}

export default PlayGameContainer;
import { Link } from "react-router-dom";
import MaskedText from "../components/MaskedText/MaskedText";
import LetterButtons from "../components/LetterButtons/LetterButtons";
import HangMan from "../components/HangMan/HangMan";

function PlayGame({ hint , originalWord, guessedLetters, step, handleLetterClick}){
    

    return (
        <>
            <h1>Play Game</h1>
            <h1>Hint : {hint} </h1>
            <MaskedText originalWord={originalWord} guessedLetters={guessedLetters}/>

            <div>
                <LetterButtons originalWord={originalWord} guessedLetters={guessedLetters} onLetterClick={handleLetterClick}/>
            </div>

            <div>
                <HangMan step={step}/>
            </div>

            <div>
                <Link to="/start" className="text-blue-400">Start Game Link</Link>
            </div>
        </>
        
    );
}

export default PlayGame;
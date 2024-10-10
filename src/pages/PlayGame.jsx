import { Link } from "react-router-dom";
import MaskedText from "../components/MaskedText/MaskedText";
import LetterButtons from "../components/LetterButtons/LetterButtons";
import HangMan from "../components/HangMan/HangMan";
import ReactModal from "../components/Modal/ReactModal";

function PlayGame({ hint , originalWord, guessedLetters, step, handleLetterClick , onNewSinglePlayerGame}) {
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
                <Link to="/" className="text-blue-400">Home Page Link</Link>
            </div>
            
            <div>
                <Link to="/start" className="text-blue-400">Start Game Link</Link>
            </div>

            <div>
                <ReactModal step={step} originalWord={originalWord} guessedLetters={guessedLetters} onNewSinglePlayerGame={onNewSinglePlayerGame}/>
            </div>
        </>
        
    );
}

export default PlayGame;
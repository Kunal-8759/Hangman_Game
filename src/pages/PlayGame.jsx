// // // // import { Link } from "react-router-dom";
// // // // import MaskedText from "../components/MaskedText/MaskedText";
// // // // import LetterButtons from "../components/LetterButtons/LetterButtons";
// // // // import HangMan from "../components/HangMan/HangMan";
// // // // import ReactModal from "../components/Modal/ReactModal";

// // // // function PlayGame({ hint , originalWord, guessedLetters, step, handleLetterClick , onNewSinglePlayerGame}) {
// // // //     return (
// // // //         <>
// // // //             <h1>Play Game</h1>
// // // //             <h1>Hint : {hint} </h1>
// // // //             <MaskedText originalWord={originalWord} guessedLetters={guessedLetters}/>

// // // //             <div>
// // // //                 <LetterButtons originalWord={originalWord} guessedLetters={guessedLetters} onLetterClick={handleLetterClick}/>
// // // //             </div>

// // // //             <div>
// // // //                 <HangMan step={step}/>
// // // //             </div>

// // // //             <div>
// // // //                 <Link to="/" className="text-blue-400">Home Page Link</Link>
// // // //             </div>
            
// // // //             <div>
// // // //                 <Link to="/start" className="text-blue-400">Start Game Link</Link>
// // // //             </div>

// // // //             <div>
// // // //                 <ReactModal step={step} originalWord={originalWord} guessedLetters={guessedLetters} onNewSinglePlayerGame={onNewSinglePlayerGame}/>
// // // //             </div>
// // // //         </>
        
// // // //     );
// // // // }

// // // // export default PlayGame;

import { Link } from "react-router-dom";
import MaskedText from "../components/MaskedText/MaskedText";
import LetterButtons from "../components/LetterButtons/LetterButtons";
import HangMan from "../components/HangMan/HangMan";
import ReactModal from "../components/Modal/ReactModal";

function PlayGame({ hint, originalWord, guessedLetters, step, handleLetterClick, onNewSinglePlayerGame }) {

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-100 to-blue-200">
      {/* Game Title */}
      <header className="text-center py-6 bg-blue-400 shadow-lg">
        <h1 className="text-4xl md:text-5xl font-bold text-white">Hangman Game</h1>
      </header>

      {/* Main Game Content */}
      <div className="flex-1 flex flex-col md:flex-row p-6 gap-6">
        {/* Left Side: Game Info and Controls */}
        <div className="w-full md:w-1/2 space-y-6 bg-white rounded-lg shadow-lg p-6">

          {/* Hint */}
          <div className="bg-blue-100 p-4 rounded-lg">
            <h2 className="text-xl md:text-2xl text-blue-800">
              Hint: <span className="font-semibold">{hint}</span>
            </h2>
          </div>
          
          {/* Masked Text */}
          <div className="text-3xl md:text-4xl font-mono tracking-widest whitespace-nowrap overflow-x-auto pb-2 text-center">
            <MaskedText originalWord={originalWord} guessedLetters={guessedLetters} />
          </div>

          {/* Letter Buttons */}
          <LetterButtons 
            originalWord={originalWord} 
            guessedLetters={guessedLetters} 
            onLetterClick={handleLetterClick} 
            className="grid grid-cols-7 sm:grid-cols-9 gap-2"
          />
        </div>

        {/* Right Side: Hangman Display */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center bg-white rounded-lg shadow-lg p-6">
          <HangMan step={step} className="w-full max-w-[400px] h-[400px]" />
        </div>
      </div>

      {/* Footer Links */}
      <footer className="py-4 bg-blue-400 mt-6">
        <div className="flex justify-center space-x-8">
            <button onClick={onNewSinglePlayerGame} className="bg-blue-500 hover:bg-blue-450 text-white py-2 px-4 rounded-md">
                        Play SinglePlayer Mode
            </button>
          <Link to="/start" className="bg-blue-500 hover:bg-blue-450 text-white py-2 px-4 rounded-md">
            Play MultiPlayer Mode
          </Link>
        </div>
      </footer>

      {/* React Modal */}
      <ReactModal 
        step={step} 
        originalWord={originalWord} 
        guessedLetters={guessedLetters} 
        onNewSinglePlayerGame={onNewSinglePlayerGame} 
      />
    </div>
  );
}

export default PlayGame;
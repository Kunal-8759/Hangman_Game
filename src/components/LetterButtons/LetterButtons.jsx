// const ALPHABETS = "QWERTYUIOPASDFGHJKLZXCVBNM".split("");//make an array of alphabets

// function LetterButtons({originalWord, guessedLetters ,onLetterClick}) {

//     const originalWordSet = new Set(originalWord.split(''));//make a set of original word
//     const guessedLettersSet = new Set(guessedLetters);//make a set of guessed letters

//     const buttonStyle = function(letter) {
//         if(guessedLettersSet.has(letter)) {
//             //it maybe the guessed letter is right or wrong
//             return `${originalWordSet.has(letter) ? 'bg-green-500' : 'bg-red-500'}`;
//         } else {
//             return 'bg-blue-500';
//         }
//     }
//     //rendering the list 
//     const buttons = ALPHABETS.map((letter)=>{
//         return (
//             <button
//                 key={`button-${letter}`}
//                 value={letter}
//                 onClick = {onLetterClick}
//                 disabled = {guessedLettersSet.has(letter) }//disable the button if the letter is already guessed
//                 className={`h-12 w-12 m-1 text-white rounded-md ${buttonStyle(letter)}`}
//             >
//                 {letter}
//             </button>
//         );
//     });

//     return (
//         <>
//             {buttons}
//         </>
//     );

// }

// export default LetterButtons;



const KEYBOARD_LAYOUT = [
  "QWERTYUIOP".split(""),
  "ASDFGHJKL".split(""),
  "ZXCVBNM".split("")
];

function LetterButtons({ originalWord, guessedLetters, onLetterClick }) {
  const originalWordSet = new Set(originalWord.toUpperCase().split(''));
  const guessedLettersSet = new Set(guessedLetters.map(letter => letter.toUpperCase()));

  const buttonStyle = function(letter) {
    if (guessedLettersSet.has(letter)) {
      return originalWordSet.has(letter) ? 'bg-green-500 ' : 'bg-red-500 ';
    } else {
      return 'bg-blue-500 ';
    }
  }

  return (
    <div className="flex flex-col items-center space-y-2">
      {KEYBOARD_LAYOUT.map((row, rowIndex) => (
        <div key={`row-${rowIndex}`} className="flex justify-center">
          {row.map((letter) => (
            <button
              key={`button-${letter}`}
              value={letter}
              onClick={onLetterClick}
              disabled={guessedLettersSet.has(letter)}
              className={`h-12 w-12 m-1 text-white rounded-md ${buttonStyle(letter)}`}
            >
              {letter}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}

export default LetterButtons;
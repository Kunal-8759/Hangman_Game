// import { Link } from "react-router-dom";
// import Button from "../components/Button/Button";
// import { useEffect  } from "react";
// import useWordStore from "../stores/WordStores";

// function HomePage() {
    
//     const { setWordList, setWord } = useWordStore(); // coming from the store

//     async function downloadWords(){
//         const response = await fetch("http://localhost:3000/words");
//         const data = await response.json();

//         setWordList([...data]);

//         const index= Math.floor(Math.random()*data.length);
//         const wordSelected = data[index];

//         console.log(wordSelected);
//         setWord(wordSelected);
        
//     }

//     //this useEffeect will run when HomePage component is mounted
//     //when component loaded a new word is selected
//     useEffect(()=>{
//         console.log("HomePage Mounted");
//         downloadWords();
//     },[]);

//   return (
//     <>
//         <Link to="/play">
//             <Button text={"Single Player"}/>
//         </Link>

//         <br />

//         <Link to="/start">
//            <div className="mt-4">
//                 <Button text={"MultiPlayer"} styleType="secondary" />    
//            </div>
//         </Link>    
//     </>
//   )
// }

// export default HomePage;


import { Link } from "react-router-dom";
import Button from "../components/Button/Button";
import { useEffect } from "react";
import useWordStore from "../stores/WordStores";

function HomePage() {
  const { setWordList, setWord } = useWordStore();

  async function downloadWords() {
    const response = await fetch("http://localhost:3000/words");
    const data = await response.json();

    setWordList([...data]);

    const index = Math.floor(Math.random() * data.length);
    const wordSelected = data[index];

    console.log(wordSelected);
    setWord(wordSelected);
  }

  useEffect(() => {
    console.log("HomePage Mounted");
    downloadWords();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-100 to-blue-200">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
        <h1 className="text-5xl font-bold text-blue-600 mb-6">Hangman</h1>
        <p className="text-gray-600 mb-8">
          Test your word-guessing skills!
        </p>
        <div className="space-y-4">
          <Link to="/play" className="block">
            <Button 
              text="Single Player" 
              styleType="primary"
              className="w-full py-3 text-lg font-semibold"
            />
          </Link>
          <Link to="/start" className="block">
            <Button 
              text="MultiPlayer" 
              styleType="secondary"
              className="w-full py-3 text-lg font-semibold"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
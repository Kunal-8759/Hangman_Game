import { Link } from "react-router-dom";
import Button from "../components/Button/Button";
import { useEffect } from "react";
import useWordStore from "../stores/WordStores";
import words from "../assets/words/words";

function HomePage() {
  const { setWordList, setWord } = useWordStore();

  async function downloadWords() {

    //when we need to interact from the json server to fetch the words
    
    // const response = await fetch("http://localhost:3000/words");
    // const data = await response.json();

    // setWordList([...data]);

    // const index = Math.floor(Math.random() * data.length);
    // const wordSelected = data[index];

    // console.log(wordSelected);
    // setWord(wordSelected);

    setWordList([...words]);
    const index = Math.floor(Math.random() * words.length);
    const wordSelected = words[index];

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
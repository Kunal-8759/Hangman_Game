import { Link } from "react-router-dom";
import Button from "../components/Button/Button";
import { useEffect  } from "react";
import useWordStore from "../stores/WordStores";

function HomePage() {
    
    const { setWordList, setWord } = useWordStore(); // coming from the store

    async function downloadWords(){
        const response = await fetch("http://localhost:3000/words");
        const data = await response.json();

        setWordList([...data]);

        const index= Math.floor(Math.random()*data.length);
        const wordSelected = data[index];

        console.log(wordSelected);
        setWord(wordSelected);
        
    }

    //this useEffeect will run when HomePage component is mounted
    //when component loaded a new word is selected
    useEffect(()=>{
        console.log("HomePage Mounted");
        downloadWords();
    },[]);

  return (
    <>
        <Link to="/play">
            <Button text={"Single Player"}/>
        </Link>

        <br />

        <Link to="/start">
           <div className="mt-4">
                <Button text={"MultiPlayer"} styleType="secondary" />    
           </div>
        </Link>    
    </>
  )
}

export default HomePage;
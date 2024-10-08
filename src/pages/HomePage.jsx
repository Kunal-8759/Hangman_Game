import { Link } from "react-router-dom";
import Button from "../components/Button/Button";
import { useEffect , useState } from "react";

function HomePage() {
    const [value,setValue]=useState("");
    const [hint,setHint]=useState("");

    async function downloadWords(){
        const response = await fetch("http://localhost:3000/words");
        const data = await response.json();

        const index= Math.floor(Math.random()*data.length);
        const wordSelected = data[index];

        console.log(wordSelected);
        setValue(wordSelected.wordSelected);
        setHint(wordSelected.Hint);
    }

    //this useEffeect will run when HomePage component is mounted
    //when component loaded a new word is selected
    useEffect(()=>{
        console.log("HomePage Mounted");
        downloadWords();
    },[]);

  return (
    <>
        <Link to="/play" state={{value : value.toUpperCase() , hint :hint }}>
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
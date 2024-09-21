import TextInputFormContainer from "../components/TextInputForm/TextInputFormContainer";
import { Link } from "react-router-dom";

function StartGame(){
    return (
        <>
            <h1>Start page of the game</h1>
            <TextInputFormContainer />
            <Link to="/play" className="text-blue-400">Play Game Link</Link>
        </>
    );
}
export default StartGame;
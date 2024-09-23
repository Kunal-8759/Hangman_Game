import { Link, useLocation } from "react-router-dom";

function PlayGame(){
    const {state} = useLocation();
    const receivedData = state;
    return (
        <>
            <h1>Play Game</h1>
            <Link to="/start" className="text-blue-400">Start Game Link</Link>
            <p>{receivedData} </p>
        </>
        
    );
}

export default PlayGame;
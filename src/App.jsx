 
import './App.css'
import Button from './components/Button/Button';

function App() {
  return (
    <div>
      <Button text="Click Me 1" onClickHandler={()=>console.log("clicked me 1")} styleType='primary' />
      <Button text="Click Me 2" onClickHandler={()=>console.log("clicked me 2")} styleType='warning' />
      <Button text="Click Me 3" onClickHandler={()=>console.log("clicked me 3")} styleType='success' />
    </div>
  );
}

export default App

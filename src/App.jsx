import { Route, Routes } from 'react-router-dom';
import './App.css'
import StartGame from './pages/StartGame';
import PlayGameContainer from './pages/PlayGameContainer';

function App() {
  return (
    <Routes>
      <Route path='/start' element={<StartGame/>} />
      <Route path='/play' element={<PlayGameContainer />} />
      <Route path='/' element={<div>Home Page</div>} />
    </Routes>
  );
}

export default App

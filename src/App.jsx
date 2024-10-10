import { Route, Routes } from 'react-router-dom';
import './App.css'
import StartGame from './pages/StartGame';
import PlayGameContainer from './pages/PlayGameContainer';
import HomePage from './pages/HomePage';

function App() {

  return (

    
      <Routes>
        <Route path='/start' element={<StartGame/>} />
        <Route path='/play' element={<PlayGameContainer />} />
        <Route path='/' element={ <HomePage/> } />
      </Routes>
  );
}

export default App

// import React from 'react';




// // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)


// function App() {
//   let subtitle;
//   const [modalIsOpen, setIsOpen] = React.useState(false);

//   function openModal() {
//     setIsOpen(true);
//   }

//   function afterOpenModal() {
//     // references are now sync'd and can be accessed.
//     subtitle.style.color = 'blue';
//   }

//   function closeModal() {
//     setIsOpen(false);
//   }

//   return (
//     <div>
//       <button onClick={openModal}>Open Modal</button>
//       <Modal
//         isOpen={modalIsOpen}
//         onAfterOpen={afterOpenModal}
//         onRequestClose={closeModal}
//         style={customStyles}
//       >
//         <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
//         <button onClick={closeModal}>close</button>
//         <div>I am a modal</div>
//       </Modal>
//     </div>
//   );
// }
// Modal.setAppElement('#root');

// export default App;

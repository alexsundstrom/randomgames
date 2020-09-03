import React from 'react';
import './App.css';

import StartScreen from './pages/StartScreen'
import MiniGames from './pages/MiniGames'

function App() {
  return (
      <React.Fragment>
     <StartScreen />
     <MiniGames />
      </React.Fragment>
  );
}

export default App;

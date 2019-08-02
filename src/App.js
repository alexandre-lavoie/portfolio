import React from 'react';
import './App.css';
import Background from './images/Background.png';
import Spaceship from './images/Spaceship.svg';

function App() {
  return (
    <div className="App" style={{backgroundImage: `url(${Background})`}}>
      <span className="Title">Alexandre Lavoie</span>
      <img src={Spaceship} className="Spaceship" alt="Spaceship"/>
      <div className="Center">
        <div className="Earth" />
      </div>
    </div>
  );
}

export default App;

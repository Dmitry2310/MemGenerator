import React from 'react';
import './App.css';
import { Header } from './Components/Header';
import { Meme } from './Components/Meme';


const App = () => {
  return (
    <div className='wrapper'>
      < Header />
      < Meme />
    </div>
  );
}

export default App;

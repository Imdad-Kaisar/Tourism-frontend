import React, { useState } from 'react';
import Background from './components/Background.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import GettingStartedButton from './components/intro/Intro.jsx';


const App =() => {
  
  return (
    <div>
      <Background />
      <Header />
      <GettingStartedButton />
      
      
    </div>
  )  
}


export default App;


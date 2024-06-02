import React, { useState } from 'react';
import Background from './components/Background.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import GettingStartedButton from './components/intro/Intro.jsx';
import Footer from './components/footer/Footer.jsx';
import './App.css'
import QuoteDisplay from './components/Quotes/Quotes.jsx';

const App =() => {
  
  return (
    <div className='app'>
      
      
      
      
      
       <Header />
      <QuoteDisplay />
      <GettingStartedButton />
      
      <Background />
      <Footer />
      
    
      
      
    </div>
  )  
}


export default App;


import React from "react";
import Header from './components/Header.jsx';
import Background from './components/Background.jsx';
import GettingStartedButton from './components/intro/Intro.jsx';
import Footer from './components/footer/Footer.jsx';
import QuoteDisplay from './components/Quotes/Quotes.jsx';
import Login from "./components/Login/Login.jsx";

function Layout() {
    return (
      <>
      <div className='app'>
         <Header />
         <QuoteDisplay />
         <GettingStartedButton />
         <Background />
         <Footer />
     
   
     
     
       </div>
      </>
    )
  }
  
  export default Layout;

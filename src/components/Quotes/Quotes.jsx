import React, { useState, useEffect } from "react";
import './Quotes.css'
const quotes = [
    { quote: "The world is a book and those who do not travel read only one page", author: "Saint Augustine" },
    { quote: "Travel is fatal to prejudice, bigotry, and narrow-mindedness", author: "Mark Twain" },
    { quote: "Not all those who wander are lost", author: "J.R.R. Tolkien" },
    { quote: "Life is either a daring adventure or nothing at all", author: "Helen Keller" },
    { quote: "Travel makes one modest. You see what a tiny place you occupy in the world", author: "Gustave Flaubert" },
    { quote: "I travel not to go anywhere, but to go. To see the world and be “somewhere” anywhere on it.", author: " David Byrne" },
    { quote: "Travel is never a matter of money, but of courage", author: "Paulo Coelho" },
    
  ];

function QuoteDisplay() {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  const quote = quotes[currentQuoteIndex];

  
 

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 8000); // Adjust time interval between quotes (ms)

    return () => clearInterval(intervalId); // Clear interval on unmount
  }, []);

  return (
    <div className=" quote-display">
      <p>"{quote.quote}"</p>
      <span>-- {quote.author}</span>
      </div>
  );
}

export default QuoteDisplay;
import React, { useState } from 'react';
import FlashCard from './Components/FlashCard.jsx';
import './App.css';

const cardPairs = [
  { question: 'What is the closest planet to the Sun?', answer: 'Mercury!', imageUrl:"https://science.nasa.gov/wp-content/uploads/2023/11/mercury-messenger-globe-pia15162.jpg" },
  { question: 'Venus', answer: 'Hottest planet in our solar system.', imageUrl:"" },
  // Add more planets here
];

function App() {
  const [cardIndex, setCardIndex] = useState(0); 

  const handleNextCard = () => {
    setCardIndex(prevIndex => (prevIndex + 1) % cardPairs.length); 
  };

  const handlePrevCard = () => {
    setCardIndex(prevIndex => (prevIndex - 1 + cardPairs.length) % cardPairs.length);
  };

  return (
    <div className="app">
      <h1>Solar System Flashcards</h1>
      <p>Learn interesting facts about space and the planets in our solar system!</p>
      <FlashCard card={cardPairs[cardIndex]} />
      <div className="navigation">
        <button onClick={handlePrevCard}>&lt; Back</button>
        <button onClick={handleNextCard}>Next &gt;</button>
      </div>
    </div>
  );
}

export default App;
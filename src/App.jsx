import React, { useState } from 'react';
import FlashCard from './Components/FlashCard.jsx';
import './App.css';

const cardPairs = [
  { question: 'What is the closest planet to the Sun?', answer: 'Mercury!', imageUrl:"https://science.nasa.gov/wp-content/uploads/2023/11/mercury-messenger-globe-pia15162.jpg" },
  { question: 'What is the largest planet in the solar system?', answer: 'Jupiter!', imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Hubble_Visible_View_of_Jupiter.jpg/322px-Hubble_Visible_View_of_Jupiter.jpg" },
  { question: 'What is the hottest planet in the solar system?', answer: 'Venus!', imageUrl:"https://science.nasa.gov/wp-content/uploads/2023/11/mercury-messenger-globe-pia15162.jpg" },
  { question: 'What is the denset object in the universe?', answer: 'Mercury!', imageUrl:"https://science.nasa.gov/wp-content/uploads/2023/11/mercury-messenger-globe-pia15162.jpg" },
  { question: 'What is the coldest planet in the solar system?', answer: 'Mercury!', imageUrl:"https://science.nasa.gov/wp-content/uploads/2023/11/mercury-messenger-globe-pia15162.jpg" },
  { question: 'What planet is farthest from the sun?', answer: 'Mercury!', imageUrl:"https://science.nasa.gov/wp-content/uploads/2023/11/mercury-messenger-globe-pia15162.jpg" },
  { question: 'What ?', answer: 'Mercury!', imageUrl:"https://science.nasa.gov/wp-content/uploads/2023/11/mercury-messenger-globe-pia15162.jpg" },
  { question: 'What is the closest planet to the Sun?', answer: 'Mercury!', imageUrl:"https://science.nasa.gov/wp-content/uploads/2023/11/mercury-messenger-globe-pia15162.jpg" },
  { question: 'What is the closest planet to the Sun?', answer: 'Mercury!', imageUrl:"https://science.nasa.gov/wp-content/uploads/2023/11/mercury-messenger-globe-pia15162.jpg" },
  { question: 'What is the closest planet to the Sun?', answer: 'Mercury!', imageUrl:"https://science.nasa.gov/wp-content/uploads/2023/11/mercury-messenger-globe-pia15162.jpg" },
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
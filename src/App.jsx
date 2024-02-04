import React, { useState } from 'react';
import FlashCard from './Components/FlashCard.jsx';
import './App.css';

const cardPairs = [
  { question: 'What is the closest planet to the Sun?', answer: 'Mercury!', imageUrl:"https://science.nasa.gov/wp-content/uploads/2023/11/mercury-messenger-globe-pia15162.jpg" },
  { question: 'What is the largest planet in the solar system?', answer: 'Jupiter!', imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Hubble_Visible_View_of_Jupiter.jpg/322px-Hubble_Visible_View_of_Jupiter.jpg" },
  { question: 'What is the hottest planet in the solar system?', answer: 'Venus!', imageUrl:"https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcT6b03Qr3tnaBzlbznWySao6lYzR84Qw7kF-5DJ6C-3tWD_HB7yHI1dvHB4OwlWX7q-" },
  { question: 'What is the denset object in the universe?', answer: 'A Black Hole!', imageUrl:"https://cdn.mos.cms.futurecdn.net/V6yAEuQQwk6akhK9gTuMWP-1200-80.jpg" },
  { question: 'What is the coldest planet in the solar system?', answer: 'Uranus!', imageUrl:"https://images-assets.nasa.gov/image/PIA18182/PIA18182~orig.jpg" },
  { question: 'What planet is farthest from the sun?', answer: 'Neptune!', imageUrl:"https://static.independent.co.uk/2022/06/04/01/Neptune.jpg" },
  { question: 'What planet has the fastes wind speed in the solar system?', answer: 'Neptune!', imageUrl:"https://static.independent.co.uk/2022/06/04/01/Neptune.jpg" },
  { question: 'What planet has the most rings?', answer: 'Saturn!', imageUrl:"https://science.nasa.gov/wp-content/uploads/2023/12/hubble-saturn-oct2023-stsci-01hgxc6bfxwq6kfgxbptrn6mcq.png?w=4096&format=png" },
  { question: 'What planet has the largets mountain in the solar system?', answer: 'Mars!', imageUrl:"https://science.nasa.gov/wp-content/uploads/2016/05/1-mars-nasa-gov-jpg.webp?w=4096&format=png&crop=1" },
  { question: 'What plaent has the most moons?', answer: 'Saturn!', imageUrl:"https://science.nasa.gov/wp-content/uploads/2023/12/hubble-saturn-oct2023-stsci-01hgxc6bfxwq6kfgxbptrn6mcq.png?w=4096&format=png" },
];

function App() {
  const [cardIndex, setCardIndex] = useState(0); 

  const handleNextCard = () => {
    const randomIndex = Math.floor(Math.random() * cardPairs.length);
    setCardIndex(randomIndex);
  };

  const handlePrevCard = () => {
    setCardIndex(prevIndex => (prevIndex - 1 + cardPairs.length) % cardPairs.length);
  };

  return (
    <div className="app">
      <h1>Solar System Flashcards</h1>
      <h2>Learn interesting facts about space and the planets in our solar system!</h2>
      <p>Below are {cardPairs.length} flashcards with study questions based on the planets in our solar system.</p>
      <FlashCard card={cardPairs[cardIndex]} />
      <div className="navigation">
        <button onClick={handlePrevCard}>&lt; Back</button>
        <button onClick={handleNextCard}>Next &gt;</button>
      </div>
    </div>
  );
}

export default App;
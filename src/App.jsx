import React, { useState } from 'react';
import FlashCard from './Components/FlashCard.jsx';
import './App.css';

const cardPairs = [
  { question: 'What is the closest planet to the Sun?', answer: 'Mercury', imageUrl:"https://science.nasa.gov/wp-content/uploads/2023/11/mercury-messenger-globe-pia15162.jpg" },
  { question: 'What is the largest planet in the solar system?', answer: 'Jupiter', imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Hubble_Visible_View_of_Jupiter.jpg/322px-Hubble_Visible_View_of_Jupiter.jpg" },
  { question: 'What is the hottest planet in the solar system?', answer: 'Venus', imageUrl:"https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcT6b03Qr3tnaBzlbznWySao6lYzR84Qw7kF-5DJ6C-3tWD_HB7yHI1dvHB4OwlWX7q-" },
  { question: 'What is the denset object in the universe?', answer: 'Black Hole', imageUrl:"https://cdn.mos.cms.futurecdn.net/V6yAEuQQwk6akhK9gTuMWP-1200-80.jpg" },
  { question: 'What is the coldest planet in the solar system?', answer: 'Uranus', imageUrl:"https://images-assets.nasa.gov/image/PIA18182/PIA18182~orig.jpg" },
  { question: 'What planet is farthest from the sun?', answer: 'Neptune', imageUrl:"https://static.independent.co.uk/2022/06/04/01/Neptune.jpg" },
  { question: 'What planet has the fastes wind speed in the solar system?', answer: 'Neptune', imageUrl:"https://static.independent.co.uk/2022/06/04/01/Neptune.jpg" },
  { question: 'What planet has the most rings?', answer: 'Saturn', imageUrl:"https://science.nasa.gov/wp-content/uploads/2023/12/hubble-saturn-oct2023-stsci-01hgxc6bfxwq6kfgxbptrn6mcq.png?w=4096&format=png" },
  { question: 'What planet has the largets mountain in the solar system?', answer: 'Mars', imageUrl:"https://science.nasa.gov/wp-content/uploads/2016/05/1-mars-nasa-gov-jpg.webp?w=4096&format=png&crop=1" },
  { question: 'What plaent has the most moons?', answer: 'Saturn', imageUrl:"https://science.nasa.gov/wp-content/uploads/2023/12/hubble-saturn-oct2023-stsci-01hgxc6bfxwq6kfgxbptrn6mcq.png?w=4096&format=png" },
];

function App() {

  const [cardIndex, setCardIndex] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);

  const handleStart = () => {
    setQuizStarted(true);
    handleNextCard(); 
  };

  const handleNextCard = () => {
    const randomIndex = Math.floor(Math.random() * cardPairs.length);
    setCardIndex(randomIndex);
  };

  const handlePrevCard = () => {
    setCardIndex(prevIndex => (prevIndex - 1 + cardPairs.length) % cardPairs.length);
  };

  // Define the shuffleCards function here
  const shuffleCards = () => {
    const shuffledCards = [...cardPairs].sort(() => 0.5 - Math.random());
    setCardIndex(0);
    // setCardPairs(shuffledCards); // Uncomment this if you have a cardPairs state
  };



  return (
    <div className="app">
      <h1>The Ultimate Plant Parent!</h1>
      <p>How good of a plant parent are you? Test all of your planty knowledge here!</p>
      <p>Number of cards: {cardPairs.length}</p>
      {!quizStarted ? (
        <button onClick={handleStart}>Start!</button>
      ) : (
        <>
          <FlashCard card={cardPairs[cardIndex]} />
          <div className="navigation">
            <button onClick={handlePrevCard}>&lt; Back</button>
            <button onClick={handleNextCard}>Next &gt;</button>
            <button onClick={shuffleCards}>Shuffle Cards</button>
          </div>
        </>
      )}
    </div>
  );
}
export default App;
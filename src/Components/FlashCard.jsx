import React, { useState, useEffect } from 'react';
import './FlashCard.css';

function FlashCard({ card }) {
  const [showAnswer, setShowAnswer] = useState(false);
  const [userGuess, setUserGuess] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);

  useEffect(() => {
    // Reset states when the card prop changes
    setShowAnswer(false);
    setIsCorrect(null);
    setUserGuess('');
  }, [card]);

  const handleSubmitGuess = (event) => {
    event.preventDefault(); // Prevent the form from submitting in a traditional way
    const guessIsCorrect = userGuess.trim().toLowerCase() === card.answer.trim().toLowerCase();
    setIsCorrect(guessIsCorrect);
    setShowAnswer(true); // Show the answer after submitting the guess
  };

  return (
    <div className={`flashcard ${showAnswer ? 'show-answer' : ''}`} >
      <div className="card-side card-front">
        <div className="card-content">{card.question}</div>
        <form onSubmit={handleSubmitGuess}> {/* Add form tag to handle submit */}
          <input
            type="text"
            value={userGuess}
            onChange={(e) => setUserGuess(e.target.value)}
            placeholder="Enter your guess"
            disabled={showAnswer} // Disable input when the answer is shown
          />
          <button type="submit" disabled={showAnswer}>Submit</button>
        </form>
        {showAnswer && (
           <div className={`flashcard ${showAnswer ? (isCorrect ? 'correct-guess' : 'incorrect-guess') : ''}`}>
            {isCorrect ? 'Correct!' : 'Incorrect!'}
          </div>
        )}
      </div>
      <div className="card-side card-back">
        <img src={card.imageUrl} alt={card.question} className="planet-image" />
        <div className="card-content">{card.answer}</div>
        <div className={`flashcard ${showAnswer ? (isCorrect ? 'correct-guess' : 'incorrect-guess') : ''}`}>
            {isCorrect ? 'Correct!' : 'Incorrect!'}
        </div>
      </div>
    </div>
  );
}

export default FlashCard;


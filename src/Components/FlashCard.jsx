import React, { useState, useEffect } from 'react';
import './FlashCard.css';

function FlashCard({ card, onAnswerCheck }) {
  const [showAnswer, setShowAnswer] = useState(false);
  const [userGuess, setUserGuess] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);

  useEffect(() => {
    setShowAnswer(false);
    setIsCorrect(null);
    setUserGuess('');
  }, [card]);

  const handleSubmitGuess = (event) => {
    event.preventDefault();
    const guessIsCorrect = userGuess.toLowerCase() === card.answer.toLowerCase();
    setIsCorrect(guessIsCorrect);
    setShowAnswer(true);
    onAnswerCheck(guessIsCorrect);
  };

  return (
    <div className={`flashcard ${showAnswer ? 'show-answer' : ''}`}>
      <div className="card-side card-front">
        <div className="card-content">{card.question}</div>
        {!showAnswer && (
          <form onSubmit={handleSubmitGuess}>
            <input
              type="text"
              value={userGuess}
              onChange={(e) => setUserGuess(e.target.value)}
              placeholder="Enter your guess"
            />
            <button type="submit">Submit</button>
          </form>
        )}
      </div>
      <div className="card-side card-back">
        <img src={card.imageUrl} alt={card.question} className="planet-image" />
        <div className="card-content">{card.answer}</div>
        {showAnswer && (
          <div className={`answer-feedback ${isCorrect ? 'correct' : 'incorrect'}`}>
            {isCorrect ? 'Correct!' : 'Incorrect! The answer was ' + card.answer}
          </div>
        )}
      </div>
    </div>
  );
}

export default FlashCard;



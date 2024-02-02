import React, { useState } from 'react';
import './FlashCard.css'; // Make sure to import your CSS file

function FlashCard({ card }) {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className={`flashcard ${showAnswer ? 'show-answer' : ''}`} onClick={() => setShowAnswer(!showAnswer)}>
      <div className="card-side card-front">
        <div className="card-content">{card.question}</div>
      </div>
      <div className="card-side card-back">
        <img src={card.imageUrl} alt={card.question} className="planet-image" />
        <div className="card-content">{card.answer}</div>
      </div>
    </div>
  );
}

export default FlashCard;


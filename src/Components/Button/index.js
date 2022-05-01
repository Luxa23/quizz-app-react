import React, { useState } from 'react';
import './styles.css';

export function Button() {
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <button
      type="button"
      value={showAnswer}
      onClick={event => {
        setShowAnswer(!showAnswer);
      }}
    >
      {showAnswer ? 'Hide answer' : 'Show answer'}
    </button>
  );
}

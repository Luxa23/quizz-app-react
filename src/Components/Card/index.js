import React, { useState } from 'react';
import './styles.css';
import { Button } from '../Button/index';
import { Bookmark } from '../Bookmark';

export function Card({ question }) {
  const [bookmarked, setBookmarked] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <section className="card">
      <Bookmark
        checked={bookmarked}
        onToggle={() => setBookmarked(!bookmarked)}
      />
      <h2>{question.title}</h2>
      <p>{question.question}</p>

      <p style={{ display: showAnswer ? 'block' : 'none' }}>
        {question.answer}
      </p>
      <Button onClick={() => setShowAnswer(!showAnswer)}>
        {showAnswer ? 'Hide' : 'Show'} Answer
      </Button>

      <ul>
        {question.tags.map(tag => {
          return <li>{tag}</li>;
        })}
      </ul>
    </section>
  );
}

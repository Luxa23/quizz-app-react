import React, { useState } from 'react';
import './styles.css';
import { Button } from '../Button/index';
import { Bookmark } from '../Bookmark';

export function Card({ question }) {
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <section class="card">
      <Bookmark />
      <h2>{question.title}</h2>
      <p>{question.question}</p>
      <Button />

      <span class="secret">{question.answer}</span>
      <ul>
        {question.tags.map(tag => {
          return <li>{tag}</li>;
        })}
      </ul>
    </section>
  );
}

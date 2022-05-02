import React, { useState } from 'react';
import { Button } from '../Button/index';
import { Bookmark } from '../Bookmark';
import StyledSection from '../Card/StyledSection';
import StyledWrapper from '../Wrapper/StyledWrapper';

export function Card({ question }) {
  const [bookmarked, setBookmarked] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <StyledSection>
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

      <StyledWrapper>
        {question.tags.map(tag => {
          return <li>{tag}</li>;
        })}
      </StyledWrapper>
    </StyledSection>
  );
}

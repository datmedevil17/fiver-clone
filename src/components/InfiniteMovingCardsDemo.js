import React from 'react';
import './InfiniteMovingCardsDemo.css';

const cards = [
  {
    text: `It was the best of times, it was the worst of times,
           it was the age of wisdom, it was the age of foolishness,
           it was the epoch of belief, it was the epoch of incredulity,
           it was the season of Light, it was the season of Darkness,
           it was the spring of hope, it was the winter of despair.`,
    author: 'Charles Dickens',
    source: 'A Tale of Two Cities',
  },
  {
    text: `To be, or not to be, that is the question: Whether 'tis nobler in the mind
           to suffer The slings and arrows of outrageous fortune, Or to take Arms
           against a Sea of troubles, And by opposing end them: to die, to sleep.`,
    author: 'William Shakespeare',
    source: 'Hamlet',
  },
  {
    text: `All that we see or seem is but a dream within a dream.`,
    author: 'Edgar Allan Poe',
    source: 'A Dream Within a Dream',
  },
];

const InfiniteMovingCardsDemo = () => {
  return (
    <div className="infinite-cards-container">
      <div className="cards-track">
  {[...cards, ...cards].map((card, index) => (
    <div className="card" key={index}>
      <p className="card-text">{card.text}</p>
      <span className="card-author">{card.author}</span>
      <small className="card-source">{card.source}</small>
    </div>
  ))}
</div>

    </div>
  );
};

export default InfiniteMovingCardsDemo;

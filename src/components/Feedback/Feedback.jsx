import React, { Component } from 'react';
import { Container } from './Feedback.styled';

export class Feedback extends Component {
  //   static PropTypes = {};

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onAddFeedback = feedback => {
    this.setState(prevState => ({
      [feedback]: prevState[feedback] + 1,
    }));
  };

  render() {
    return (
      <Container>
        <h1>Please leave feedback</h1>
        <button type="button" onClick={() => this.onAddFeedback('good')}>
          Good
        </button>
        <button type="button" onClick={() => this.onAddFeedback('neutral')}>
          Neutral
        </button>
        <button type="button" onClick={() => this.onAddFeedback('bad')}>
          Bad
        </button>
        <h2>Statistics</h2>
        <p>Good:{this.state.good}</p>
        <p>Neutral:{this.state.neutral}</p>
        <p>Bad:{this.state.bad}</p>
      </Container>
    );
  }
}

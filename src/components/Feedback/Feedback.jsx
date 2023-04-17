import React, { Component } from 'react';
import { Container } from './Feedback.styled';

export class Feedback extends Component {
  //   static PropTypes = {};

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <Container>
        <h1>Please leave feedback</h1>
        <button type="button">Good</button>
        <button type="button">Neutral</button>
        <button type="button">Bad</button>
        <h2>Statistics</h2>
        <p>Good:{this.state.good}</p>
        <p>Neutral:{this.state.neutral}</p>
        <p>Bad:{this.state.bad}</p>
      </Container>
    );
  }
}

import React, { Component } from 'react';
import { BtnBlock, Container } from './Feedback.styled';

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

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    const positivePercentage = Math.round((this.state.good / total) * 100);
    return positivePercentage;
  };

  render() {
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    return (
      <Container>
        <h1>Please leave feedback</h1>
        <BtnBlock>
          <button type="button" onClick={() => this.onAddFeedback('good')}>
            Good
          </button>
          <button type="button" onClick={() => this.onAddFeedback('neutral')}>
            Neutral
          </button>
          <button type="button" onClick={() => this.onAddFeedback('bad')}>
            Bad
          </button>
        </BtnBlock>
        <h2>Statistics</h2>
        <p>Good:{this.state.good}</p>
        <p>Neutral:{this.state.neutral}</p>
        <p>Bad:{this.state.bad}</p>
        <p>Total:{total}</p>
        <p>
          Positive feedback:
          {isNaN(positivePercentage) ? '0' : positivePercentage}%
        </p>
      </Container>
    );
  }
}

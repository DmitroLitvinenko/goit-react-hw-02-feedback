import { BtnBlock, Container } from './Feedback.styled';

export const Feedback = ({ good, neutral, bad, onAddFeedback }) => {
  //   static PropTypes = {};

  const countTotalFeedback = () => {
    const total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = good + neutral + bad;
    const positivePercentage = Math.round((good / total) * 100);
    return positivePercentage;
  };

  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();
  return (
    <Container>
      <h1>Please leave feedback</h1>
      <BtnBlock>
        <button type="button" onClick={() => onAddFeedback('good')}>
          Good
        </button>
        <button type="button" onClick={() => onAddFeedback('neutral')}>
          Neutral
        </button>
        <button type="button" onClick={() => onAddFeedback('bad')}>
          Bad
        </button>
      </BtnBlock>
      <h2>Statistics</h2>
      <p>Good:{good}</p>
      <p>Neutral:{neutral}</p>
      <p>Bad:{bad}</p>
      <p>Total:{total}</p>
      <p>
        Positive feedback:
        {isNaN(positivePercentage) ? '0' : positivePercentage}%
      </p>
    </Container>
  );
};

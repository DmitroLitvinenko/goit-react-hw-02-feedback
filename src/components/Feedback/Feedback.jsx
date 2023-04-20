import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Container } from './Feedback.styled';
import { Statistics } from 'components/Statistics/Statistics';
import { Section } from 'components/Section/Section';
import { Notification } from 'components/Notification/Notification';

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
  const options = ['good', 'neutral', 'bad'];
  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={onAddFeedback} />
        {total > 0 ? (
          <Section title="Statistics">
            <Statistics
              good={good}
              bad={bad}
              neutral={neutral}
              total={total}
              positivePercentage={positivePercentage}
            />
          </Section>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </Container>
  );
};

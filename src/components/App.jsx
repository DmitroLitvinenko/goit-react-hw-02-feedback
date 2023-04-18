import { Component } from 'react';
import { Feedback } from './Feedback/Feedback';

export class App extends Component {
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
      <>
        <Feedback
          good={this.state.good}
          bad={this.state.bad}
          neutral={this.state.neutral}
          onAddFeedback={this.onAddFeedback}
        />
      </>
    );
  }
}

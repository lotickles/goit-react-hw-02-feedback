import { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export class App extends Component {
  //initial state
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  // display the total number of collected reviews from all categories
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    // if total is greater than 0, return the positive percentage, else 0
    return total > 0 ? Math.round((good / total) * 100) : 0;
  };

  handleClick = type => {
    this.setState(prevState => ({ ...prevState, [type]: prevState[type] + 1 }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const options = ['good', 'neutral', 'bad'];
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <div className="container">
        <Section title="Please leave feedback">
          {/*create a dom to FeedbackOptions*/}

          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.handleClick}
          />
        </Section>

        <Section title="Statistics">
          {total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}

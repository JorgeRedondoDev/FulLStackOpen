import React, { useState } from "react";
import ReactDOM from "react-dom";

const Statistics = (props) => {
  if (props.good === 0 || props.neutral === 0 || props.bad === 0) {
    return <p>No feedback given</p>;
  }

  return (
    <table>
      <tbody>
        <tr>
          <td>good</td>
          <td>{props.good}</td>
        </tr>
        <tr>
          <td>neutral</td>
          <td>{props.neutral}</td>
        </tr>
        <tr>
          <td>bad</td>
          <td>{props.bad}</td>
        </tr>
        <tr>
          <td>all</td>
          <td>{props.bad + props.neutral + props.good}</td>
        </tr>
        <tr>
          <td>average</td>
          <td>
            {(props.good - props.bad) /
              (props.bad + props.neutral + props.good)}
          </td>
        </tr>
        <tr>
          <td>positive</td>
          <td>
            {(props.good / (props.bad + props.neutral + props.good)) * 100}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>Given Feedback</h1>
      <div>
        <button onClick={() => setGood(good + 1)}>good</button>
        <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
        <button onClick={() => setBad(bad + 1)}>bad</button>
      </div>

      <h1>statics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

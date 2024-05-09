import { useState } from "react";

export default function StateExample2() {
  const [count, setCount] = useState(0);
  const [rate, setRate] = useState(1);

  function increaseCount() {
    setCount(count + rate);
  }

  function decreaseCount() {
    setCount(count - rate);
  }

  function increaseRate() {
    setRate(rate + 1);
  }

  function decreaseRate() {
    setRate(rate - 1);
  }

  return (
    <div>
      <h2>Count is {count}</h2>
      <button onClick={increaseCount}>Increase count</button>
      <button onClick={decreaseCount}>Decrease Count</button>
      <br></br>
      <h3>Rate is {rate}</h3>
      <button onClick={increaseRate}>Increase rate</button>
      <button onClick={decreaseRate}>Decrease rate</button>
    </div>
  );
}

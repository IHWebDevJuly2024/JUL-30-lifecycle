import { useState, useEffect } from "react";
import "./HomePage.css";

export const HomePage = () => {
  // the state is the variable that is going to make my component reload with the new info
  // when we use the "setCount" we modify the value of the count
  const [count, setCount] = useState(0);
  const [secondCount, setSecondCount] = useState(0);

  console.log("The homepage has been rendered");

  // the useEffect is a hook that allows us to run code after the component has been rendered, and it can be used to run code only once
  useEffect(() => {
    console.log("THIS IS INSIDE THE USEEFFECT");
  }, [count]);

  return (
    <>
      <h1 id="app-title">Counter example</h1>
 
      <div className="container-counters">
        <h3>First counter</h3>
        <h2 className="counter">{count}</h2>
        <button className="btn-count" onClick={() => setCount(count + 1)}>
          ➕
        </button>
        <h3>Second counter </h3>
        <h2 className="counter">{secondCount}</h2>
        <button
          className="btn-count"
          onClick={() => setSecondCount(secondCount + 1)}
        >
          ➕
        </button>
      </div>
    </>
  );
};

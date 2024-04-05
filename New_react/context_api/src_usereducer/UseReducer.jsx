import "./UseReducer.css";
import React, { useReducer } from "react";

const intialState = 0;
const reducer = (state, action) => {
  if (action.type === "INCREMENT") {
    return state + 1;
  }
  if (action.type === "DECREMENT") {
    return state - 1;
  }
};

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, intialState);

  return (
    <>
      <div className="new">
        <p>{state}</p>
        <div>
          <button onClick={() => dispatch({ type: "INCREMENT" })}>Inc</button>
          <button onClick={() => dispatch({ type: "DECREMENT" })}>Dec</button>
        </div>
      </div>
    </>
  );
};

export default UseReducer;

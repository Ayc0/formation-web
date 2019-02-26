import React, { useState, useEffect, Fragment } from "react";
import ReactDOM from "react-dom";

const Timer = ({ initialValue = 0 }) => {
  const [counter, setCounter] = useState(initialValue);

  const updateCounter = () => setCounter(counter + 1);

  useEffect(() => {
    const timeoutID = setTimeout(updateCounter, 1000);
    return () => {
      clearTimeout(timeoutID);
    };
  });

  return <span style={{ display: "block" }}>Timer: {counter}</span>;
};

const Input = ({ id, value, onChange, children }) => (
  <Fragment>
    <label htmlFor={id}>{children}</label> <br />
    <input id={id} type="text" value={value} onChange={event => onChange(event.target.value)} />
  </Fragment>
);

const App = () => {
  const [name, setName] = useState("");

  return (
    <Fragment>
      <Timer initialValue={10} />
      <Input id="name" value={name} onChange={setName}>
        Name
      </Input>
    </Fragment>
  );
};

ReactDOM.render(<App />, document.body);

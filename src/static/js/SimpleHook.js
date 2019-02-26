import React, { useState, useEffect, Fragment } from "react";

const MyComponent = props => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("did mount");
    return () => {
      console.log("will unmount");
    };
  }, []);

  useEffect(() => {
    console.log("did mount and did update");
  });

  console.log("render");
  return (
    <Fragment>
      {counter}
      <button onClick={() => setCounter(counter - 1)}>-</button>
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </Fragment>
  );
};

export default MyComponent;

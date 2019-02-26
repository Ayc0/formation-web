import React, { Fragment, Component } from "react";

class MyComponent extends Component {
  constructor(props) {
    super(props);

    console.log("constructor");

    this.state = { counter: 0 };
  }

  componentDidMount() {
    console.log("did mount");
  }

  componentDidUpdate() {
    console.log("did update");
  }

  componentWillUnmount() {
    console.log("will unmount");
  }

  render() {
    console.log("render");
    return (
      <Fragment>
        {this.state.counter}
        <button onClick={() => this.setState(({ counter }) => ({ counter: counter + 1 }))}>-</button>
        <button onClick={() => this.setState(({ counter }) => ({ counter: counter - 1 }))}>+</button>
      </Fragment>
    );
  }
}

export default MyComponent;

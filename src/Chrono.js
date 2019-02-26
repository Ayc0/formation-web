import React, { Component } from "react";

export default class Chrono extends Component {
  constructor(props) {
    super(props);

    this.intervalID = null;

    this.state = {
      instant: 0
    };

    this.stopChrono = () => {
      if (this.intervalID) {
        clearInterval(this.intervalID);
        this.intervalID = null;
      }
      this.setState({ instant: 0 });
    };

    this.startChrono = () => {
      if (this.intervalID) {
        this.stopChrono();
      }
      this.basetime = Date.now();
      this.intervalID = setInterval(() => {
        this.setState({
          instant: parseInt((Date.now() - this.basetime) / 1000, 10)
        });
      }, 1000);
    };
  }

  componentWillUnmount() {
    this.stopChrono();
  }

  render() {
    if ((this.props.style || {}).visibility === "hidden") {
      return null;
    }
    return (
      <React.Fragment>
        <div style={{ margin: "1em" }}>{this.state.instant}</div>
        <div>
          <button onClick={this.startChrono}>{this.intervalID ? "Restart" : "Start"}</button>
          <button onClick={this.stopChrono}>Stop</button>
        </div>
      </React.Fragment>
    );
  }
}

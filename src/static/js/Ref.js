// Exemple avec des classes

import React, { createRef, Component } from "react";

class ClassComponent extends Component {
  constructor(props) {
    super(props);

    this.input = createRef();
  }

  componentDidMount() {
    this.input.current.focus();
  }

  render() {
    return <input type="text" ref={this.input} />;
  }
}

// Exemple avec des fonctions

import React, { useRef, useEffect } from "react";

const FunctionComponent = () => {
  const input = useRef();

  useEffect(() => {
    input.current.focus();
  }, []);

  return <input type="text" ref={input} />;
};

import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 10 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((state) => ({
      count: state.count + 1,
    }));
  }

  render() {
    return <lasca component="component_2"></lasca>;
  }
}

ReactDOM.render(<App />, document.getElementById("app"));

import React from "react";
import "./styles.css";
import randomColor from "randomcolor";
class Randombg extends React.Component {
  constructor() {
    super();
    this.state = {
      randomval: ""
    };
  }
  displayrandomcolor = () => {
    const color = randomColor();
    this.setState({
      randomval: color
    });
  };

  render() {
    return (
      <div
        className="container-fluid fill-window mx-auto text-center"
        style={{ background: this.state.randomval }}
      >
        <h1 className="m-3 p-3">{this.state.randomval}</h1>
        <button
          onClick={this.displayrandomcolor}
          className="btn btn-primary"
          type="button"
        >
          Generate
        </button>
      </div>
    );
  }
}
export default Randombg;

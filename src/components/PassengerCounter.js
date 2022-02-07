import React, { Component } from "react";
// import "../components";
import "../App.css";
export class PassengerCounter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      str: "",
    };

    //     this.state1 = {
    //       total: "",
    //     };
  }
  increment() {
    this.setState((prevstate) => ({
      count: prevstate.count + 1,
    }));
  }

  decrement() {
    this.setState((prevstate) => ({
      count: prevstate.count - 1,
    }));
  }

  save() {
    this.setState(() => ({
      str: this.state.str + this.state.count + ",",
    }));
  }

  render() {
    return (
      <div>
        <div id="change1">
          <h1>People Entered- {this.state.count}</h1>
          <button onClick={() => this.increment()} id="btn1">
            Increment
          </button>
          <br />
          <button onClick={() => this.decrement()} id="btn2">
            Decrement
          </button>
          <br />
          <button onClick={() => this.save()} id="btn3">
            Save
          </button>
          <br />
          <h3>Total people enterd are {this.state.str}</h3>
        </div>
      </div>
    );
  }
}

export default PassengerCounter;

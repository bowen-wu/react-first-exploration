import React from "react";
import ReactDOM from "react-dom";

function F1(props) {
  return (
    <div>
      1111 {props.n}
      <F2 n={props.n}/>
    </div>
  )
}
function F2(props) {
  return (
    <div>
      2222 {props.n}
      <F3 n={props.n}/>
    </div>
  )
}
function F3(props) {
  return (
    <div>
      3333 {props.n}
      <F4 n={props.n}/>
    </div>
  )
}
function F4(props) {
  return (
    <div>
      4444 {props.n}
    </div>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      n: 99
    }
  }
  render() {
    return (
      <div className="App">
        <F1 n={this.state.n}/>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

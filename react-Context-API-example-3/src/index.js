import React from "react";
import ReactDOM from "react-dom";
import './styles.css';

function F1() {
  return (
    <div className="bordered">
      1111 
      <F2 />
    </div>
  )
}
function F2() {
  return (
    <div className="bordered">
      2222
      <F3 />
    </div>
  )
}
function F3() {
  return (
    <div className="bordered">
        3333
        <nContext.Consumer>
            {n => <F4 n={n} />}
        </nContext.Consumer>
        <F3copy copy="f3copy">
            {(n) => {
                console.log('call me!', '调用时传递的值 -> n', n);
                return (
                    <div>
                        {n}
                    </div>
                )
            }}
        </F3copy>
    </div>
  )
}
// F3 翻译之后为 
// function F3() {
//     return React.createElement(
//         'div', 
//         {className: 'bordered'},
//         '3333',
//         React.createElement(nContext.Consumer, null, function(n) {
//             return React.createElement(F4, {n: n});
//         })
//     )
// }

// nContext.Consumer 的原因
function F3copy(props) {
    let n = 100;
    console.log('props.children', props.children);
    let result = props.children(n);
    console.log('result', result);
    return (
        <div>
            {props.copy}
            <hr />
            {result}
        </div>
    )
}
function F4(props) {
  return (
        <div className="bordered">
        4444 {props.n}
        </div>
  )
}

const nContext = React.createContext(100);

class App extends React.Component {
  render() {
    return (
        <nContext.Provider value="100">
            <div className="App">
                <F1 />
            </div>
        </nContext.Provider>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

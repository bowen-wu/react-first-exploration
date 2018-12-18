import React from "react";
import ReactDOM from "react-dom";
import { useState } from 'react';

import "./styles.css";

function App() {
  const [count /* 值 */, setCount /* 更新函数 */] = useState(0 /* 初始值 */);
  const add = () => {
    setCount(count + 1);
  }
  const minus = () => {
    setCount(count - 1);
  }
  return (
    <div>
      <div>{count}</div>
      <div>
        <button onClick={add}>+1</button>
        <button onClick={minus}>-1</button>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

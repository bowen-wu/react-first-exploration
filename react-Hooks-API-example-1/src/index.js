import React from "react";
import ReactDOM from "react-dom";
import { useState, useEffect } from 'react';

import "./styles.css";

function App() {
  const [count /* 值 */, setCount /* 更新函数 */] = useState(0 /* 初始值 */);
  useEffect(() => {
      // output 不知道从哪里来，所以是有副作用的函数，所以要放置在 useEffect
      document.querySelector('#output').innerText = count;
  })
  const [user, setUser] = useState({name: 'bowen', age: 18, hobbies: ['lol', 'dog', 'code']});
  const add = () => {
    setCount(count + 1);
  }
  const minus = () => {
    setCount(count - 1);
  }
  const ageAdd = () => {
      setUser({
          ...user,
          age: user.age + 1
      });
  }
  const addHobby = (hobby) => {
      setUser({
          ...user,
          hobbies: [...user.hobbies, hobby]
      });
  }
  const deleteHobby = () => {
      user.hobbies.splice(1, 1);
      setUser({
          ...user,
      });
  }
  return (
    <div className="App">
        <div>{count}</div>
        <div>
            <button onClick={add}>+1</button>
            <button onClick={minus}>-1</button>
        </div>
        <div>{user.name} {user.age} {user.hobbies.join('-')}</div>
        <div>
            <button onClick={ageAdd}>+1</button>
            <button onClick={() => addHobby('walk')}>增加爱好</button>
            <button onClick={deleteHobby}>delete hobby</button>
        </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

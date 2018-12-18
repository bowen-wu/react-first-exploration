import React from "react";
import ReactDOM from "react-dom";
import { useState } from 'react';

import "./styles.css";

function App() {
  const [count /* 值 */, setCount /* 更新函数 */] = useState(0 /* 初始值 */);
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
    <div>
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

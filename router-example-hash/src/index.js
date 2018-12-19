import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function Box1() {
  return <div className="box">注册</div>;
}
function Box2() {
  return <div className="box">登录</div>;
}

function App() {
  let pathname = window.location.pathname;
  console.log("pathname", pathname);

  let [ui, setUi] = useState(pathname === "/signup" ? "signUp" : "login");
  let onClickLogin = () => {
    setUi("login");
    window.history.pushState(null, '', "login");
  };
  let onClickSignUp = () => {
    setUi("signUp");
    window.history.pushState(null, '', "signup");
  };

  return (
    <div className="App">
      <button onClick={onClickLogin}>登录</button>
      <button onClick={onClickSignUp}>注册</button>
      <div>{ui === "signUp" ? <Box1 /> : <Box2 />}</div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

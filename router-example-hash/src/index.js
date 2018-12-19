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
  let hash = window.location.hash;
  console.log("hash", hash);

  let [ui, setUi] = useState(hash === "#signup" ? "signUp" : "login");
  let onClickLogin = () => {
    setUi("login");
    window.location.hash = "login";
  };
  let onClickSignUp = () => {
    setUi("signUp");
    window.location.hash = "signup";
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

import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function Signup() {
  return <div className="box">注册</div>;
}
function Login() {
  return <div className="box">登录</div>;
}

function Welcome() {
    return <div className="box">欢迎</div>
}

function App() {
  let path = window.location.path;
  let initUi = ''
  console.log('path', path);
  if(path === '/welcome') {
      initUi = 'welcome';
  } else if (path === '/login') {
      initUi = 'login';
  } else {
      initUi = 'signup'
  }

  let [ui, setUi] = useState(initUi);

  let onClickLogin = () => {
    setUi('login');
    window.history.pushState(null, '', 'login');
  };

  let onClickSignup = () => {
    setUi('signup');
    window.history.pushState(null, '', 'signup');
  };

  let onClickWelcome = () => {
      setUi('welcome');
      window.history.pushState(null, '', '/welcome');
  }

  let showUi = () => {
      if(ui === 'welcome') {
          return <Welcome />
      } else if(ui === 'login') {
          return <Login />
      } else {
          return <Signup />
      }
  }

  return (
    <div className="App">
      <button onClick={onClickLogin}>登录</button>
      <button onClick={onClickSignup}>注册</button>
      <button onClick={onClickWelcome}>欢迎</button>
      <div>{showUi()}</div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

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
  return (
    <div className="App">
      App
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
    <Router>
    <div>
        <Link to="/"><button>Home</button></Link>
        <Link to="/login/"><button>Login</button></Link>
        <Link to="/signup/"><button>Signup</button></Link>
        <Link to="/welcome/"><button>Welcome</button></Link>

        <Route path="/" exact component={App} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/welcome" exact component={Welcome} />

    </div>
  </Router>, rootElement);

import React from "react";
import ReactDOM from "react-dom";

import './styles.css';

const themeContext = React.createContext();

function Box(props) {
  return <div className={[`box ${props.theme}`]}>{props.children}</div>
}

function Button() {
  return <button>click me</button>
}

function Input() {
  return <input />
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: 'green'
    }
  }
  changeTheme() {
    if(this.state.theme === 'green') {
      this.setState({theme: 'red'});
    } else {
      this.setState({ theme: 'green' });
    }
  }
  render() {
    return (
      <themeContext.Provider value={this.state.theme}>
        <div className="App">
        <button onClick={this.changeTheme.bind(this)}>change theme</button>
        <themeContext.Consumer>
         {(theme) => 
            <div>
              <Box theme={theme}><Button /></Box>
              <Box theme={theme}><Input /></Box>
            </div>
          }

        </themeContext.Consumer>
        </div>
      </themeContext.Provider>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

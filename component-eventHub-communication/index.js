let money = {
    amount: 10000,
};

function App() {
  return (
      <div className='app'>
          <Papa1 />
          <Papa2 />
      </div>
  )
}

class Papa1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            money,
        }
    }
    render() {
        return (
            <div className='papa'>
                Papa1 {this.state.money.amount}<hr />
                <Son1 />
                <Son2 />
            </div>
        )
    }

}

class Papa2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            money,
        }
    }    
    render() {
        return (
            <div className='papa'>
                Papa2 {this.state.money.amount}<hr />
                <Son3 />
                <Son4 />
            </div>
        )
    }
}

class Son1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            money,
        }
    }
    render() {
        return (
            <div className='son'>
                Son1 {this.state.money.amount}
            </div>
        )
    }
}

class Son2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            money,
        }
    }
    render() {
        return (
            <div className='son'>
                Son2 {this.state.money.amount}
            </div>
        )
    }
}

class Son3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            money,
        }
    }
    render() {
        return (
            <div className='son'>
                Son3 {this.state.money.amount}
            </div>
        )
    }
}

class Son4 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            money,
        }
    }
    render() {
        return (
            <div className='son'>
                Son4 {this.state.money.amount}
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));
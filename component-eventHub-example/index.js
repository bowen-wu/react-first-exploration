let money = {
    amount: 100000,
  }
  let user = {
    id: 123,
    nickname: 'hello world'
  }
  
  
  
  let callbackLists = {};
  let eventHub = {
    trigger(eventName, data) {
      callbackLists[eventName] && callbackLists[eventName].forEach(callback => callback(data));
    },
    on(eventName, callback) {
      if(!callbackLists[eventName]) {
        callbackLists[eventName] = [];
      }
      callbackLists[eventName].push(callback)
    },
  }
  
  let store= {
    init() {
      eventHub.on('consume', (data) => {  // subscribe
        money.amount -= data;  // reducer
        render();
      })
    }
  }
  store.init()
  
  
  class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        money,
        user,
      }
    }
    render() {
      return (
        <div className="root">
          <BigPapa money={this.state.money}/>
          <YoungPapa money={this.state.money}/>
        </div>
      )
    }
  }
  
  class BigPapa extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
      }
    }
    render() {
      return (
        <div className="papa">
          <p>BigPapa -> {this.props.money.amount}</p>
          <Son1 money={this.props.money}/>
          <Son2 money={this.props.money}/>
        </div>
      )
    }
  }
  class YoungPapa extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
      }
    }
    render() {
      return (
        <div className="papa">
          <p>YoungPapa -> {this.props.money.amount}</p>
          <Son3 money={this.props.money}/>
          <Son4 money={this.props.money}/>
        </div>
      )
    }
  }
  class Son1 extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
      }
    }
    render() {
      return (
        <div className="son">son1 -> {this.props.money.amount}</div>
      )
    }
  }
  class Son2 extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
      }
    }
    paid() {
      // action === type + payload
      eventHub.trigger('consume', 100);  // dispatch
    }
    render() {
      return (
        <div className="son">
          <div>son2 -> {this.props.money.amount}</div>
          <button onClick={() => this.paid()}>pay</button>
        </div>
      )
    }
  }
  class Son3 extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
      }
    }
    render() {
      return (
        <div className="son">son3 -> {this.props.money.amount}</div>
      )
    }
  }
  class Son4 extends React.Component{
    constructor(props) {
      super(props);
      this.state = {
      }
    }
    render() {
      return (
       <div className="son">son4 -> {this.props.money.amount}</div>
      )
    }
  }
  
   
  function render() {
    ReactDOM.render(<App />, document.querySelector('#root'));
  }
  
  render();
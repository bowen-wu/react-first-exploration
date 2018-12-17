let createStore = Redux.createStore;
let reducers = (state, action) => {
  state = state || {money: { amount: 100000 }}
  switch (action.type) {
    case 'consume':
      console.log('action.payload', action.payload);
      console.log('state.money.amount', state.money.amount);
      return {money: {amount: state.money.amount - action.payload}};
    default:
      return state
  }
}
const store = createStore(reducers);

console.log('store.getState()', store.getState());




class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="root">
        <BigPapa money={this.props.store.money}/>
        <YoungPapa money={this.props.store.money}/>
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
    // action    
    store.dispatch({type: 'consume', payload: 100});
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
  // 所有的数据 都用传，即使顶层组件也要传
  ReactDOM.render(<App store={store.getState()}/>, document.querySelector('#root'));
}

render();
store.subscribe(render);  // 只要状态变更 则触发 subscribe 
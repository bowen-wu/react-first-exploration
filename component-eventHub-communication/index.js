let createStore = Redux.createStore;
let reducers = (state = 0, action) => {
    state = state || {
        money: {
            amount: 10000,
        }
    }
    switch (action.type) {
        case 'I want to consume':
            return {
                money: {
                    amount: state.money.amount - action.payload
                }
            }
        default:
            return state
    }
}
const store = createStore(reducers);


class App extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (
          <div className='app'>
              <Papa1 money={this.props.store.money}/>
              <Papa2 money={this.props.store.money}/>
          </div>
        )
    }
}

class Papa1 extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='papa'>
                Papa1 {this.props.money.amount}<hr />
                <Son1 money={this.props.money}/>
                <Son2 money={this.props.money}/>
            </div>
        )
    }

}

class Papa2 extends React.Component {
    constructor(props) {
        super(props);
    }    
    render() {
        return (
            <div className='papa'>
                Papa2 {this.props.money.amount}<hr />
                <Son3 money={this.props.money}/>
                <Son4 money={this.props.money}/>
            </div>
        )
    }
}

class Son1 extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='son'>
                Son1 {this.props.money.amount}
            </div>
        )
    }
}

class Son2 extends React.Component {
    constructor(props) {
        super(props);
    }
    consume() {
        // eventHub.emit('I want to consume', 100);
        
        store.dispatch({ type: 'I want to consume', payload: 100 });
    }
    render() {
        return (
            <div className='son'>
                Son2 {this.props.money.amount}
                <button onClick={this.consume.bind(this)}>consume</button>
            </div>
        )
    }
}

class Son3 extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='son'>
                Son3 {this.props.money.amount}
            </div>
        )
    }
}

class Son4 extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='son'>
                Son4 {this.props.money.amount}
            </div>
        )
    }
}

function render() {
    ReactDOM.render(<App store={store.getState()}/>, document.querySelector('#root'));
}

render();
store.subscribe(render);
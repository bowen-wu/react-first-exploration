let money = {
    amount: 10000,
};


let events = {};
let eventHub = {
    emit(eventName, data) {
        if(!events[eventName]) {
            return;
        }
        events[eventName].forEach(callback => {
            callback.call(null, data);
        })
    },
    on(eventName, callback) {
        if(!events[eventName]) {
            events[eventName] = []
        }
        events[eventName].push(callback);
    }
}

let store = {
    init() {
        eventHub.on('I want to consume', (data) => {
            money.amount -= data;
            render();
        })
    }
}
store.init();

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            money
        }
    }
    render() {
        return (
          <div className='app'>
              <Papa1 money={this.state.money}/>
              <Papa2 money={this.state.money}/>
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
        eventHub.emit('I want to consume', 100);
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
    ReactDOM.render(<App />, document.querySelector('#root'));
}

render();
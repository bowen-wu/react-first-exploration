class Parents extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            guy: '',
            son1Age: 18,
            son2Age: 10,
        }
    }
    onCallParent1(name) {
        console.log(`${name} call me`);
        this.setState({guy: name, son1Age: this.state.son1Age + 1});
    }
    onCallParent2(name) {
        console.log(`${name} call me`);
        this.setState({guy: name, son2Age: this.state.son2Age + 1});
    }
    render() {
        return (
            <div className="parents">
                <div>I am parents</div>
                <div>Who call me? -> {this.state.guy}</div>
                <Son1 callParent={this.onCallParent1.bind(this)} age={this.state.son1Age}/>
                <Son2 callParent={this.onCallParent2.bind(this)} age={this.state.son2Age}/>
            </div>
        )
    }
}

class Son1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'son 1',
            style: {
                color: 'red'
            }
        }
    }
    onChangeName() {
        if(this.state.name === 'son 1') {
            this.setState({name: 'girl 1', style: {color: 'green'}});
        } else {
            this.setState({name: 'son 1'})
        }
    }
    render() {
        return (
            <div className="son">
                <div style={this.state.style}>name: {this.state.name}</div>
                <div>age: {this.props.age}</div>
                <button onClick={this.onChangeName.bind(this)}>change name</button>
                <button onClick={this.props.callParent.bind(this, this.state.name)}>call parent</button>
            </div>
        )
    }
}

class Son2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'son 2',
        }
    }
    onChangeName() {
        if(this.state.name === 'son 2') {
            this.setState({name: 'girl 2'});
        } else {
            this.setState({name: 'son 2'})
        }
    }
    render() {
        return (
            <div className="son">
                <div>name: {this.state.name}</div>
                <div>age: {this.props.age}</div>
                <button onClick={this.onChangeName.bind(this)}>change name</button>
                <button onClick={this.props.callParent.bind(this, this.state.name)}>call parent</button>
            </div>
        )
    }
}


ReactDOM.render(<Parents />, document.querySelector('#root'));
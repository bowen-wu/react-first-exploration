import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class Parent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasChild: true,
        }
    }
    killSon() {
        this.setState({
            hasChild: false
        })
    }
    callSon() {
        this.setState({
            word: 'Are you OK?'
        })
    }
    render() {
        return (
            <div>
                I am parents -> 
                <button onClick={this.killSon.bind(this)}>kill son</button>
                <button onClick={this.callSon.bind(this)}>call son</button>
                {this.state.hasChild ? <App word={this.state.word}/> : null}
            </div>
        )
    }
}

class App extends React.Component {
    onClick() {
        console.log('user click');
        this.setState({
            n: this.state.n + 1,
        });
    }
    updateX() {
        this.setState({
            x: this.state.x + '!'
        });
    }
    constructor(props) {
        super(props);
        this.state = {
            n: 0,
            x: '只有 n 改变的情况下才去更新 UI'
        }
        console.log('create App', props  );
    }
    componentWillMount(e) {
        console.log('will mount App', e);
    }
    render(e) {  // ==> update
        console.log('填充 / 更新 App content', e)
        return (
            <div className="App">
                hello world -> {this.state.n}
                <hr />
                my parents say -> {this.props.word}
                <hr />
                this.state.x -> {this.state.x}
                <br />
                <button onClick={this.onClick.bind(this)}>+1</button>
                <button onClick={this.updateX.bind(this)}>update X</button>
            </div>
          );
    }
    componentDidMount(e) {
        console.log('mount App 完毕', e);
    }
    componentWillUpdate(e) {
        console.log('update App 之前', e);
    }

    // update is render 

    componentDidUpdate(e) {
        console.log('update App 之后', e);
    }

    componentWillUnmount(e) {
        console.log('App 快要死了', e)
    }

    componentWillReceiveProps(props) {
        console.log('my parent say', props)
    }

    shouldComponentUpdate(nextProps, nextState) { // 允许我们手动地判断是否要进行组件更新，根据组件的应用场景设置函数的合理返回值能够帮我们避免不必要的更新
        console.log('this.state', this.state);
        console.log('nextState', nextState);

        // 只有 n 改变的情况下才去更新 UI
        if(nextState.n === this.state.n) {
            return false;
        } else {
            return true;
        }
    }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Parent />, rootElement);

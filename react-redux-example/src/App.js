import React, { Component } from 'react';
import {connect} from 'react-redux';

class App extends Component {
    add1() {
        this.props.add1();
    }
    add4() {
        setTimeout(() => {
            this.props.add1();
        }, 2000);
    }
    render() {
        return ( 
        <div >
            你点击了 <span id = "value" > { this.props.n } </span> 次 
            <div>
                <button id = "add1" onClick = { this.add1.bind(this) } > +1 </button> 
                <button id = "add2" onClick = { this.props.add2 }> +2 </button> 
                <button id = "add1IfOdd" onClick = {() => this.props.add3(this.props)}> 如果是单数就 + 1 </button> 
                <button id = "add1After2Sec" onClick = { this.add4.bind(this) }> 2s钟后 + 1 </button> 
            </div> 
        </div>
        );
    }
}

function mapStateToProps(state){
    return {
        n: state.n,
        remark: state.remark,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        add1: () => dispatch({type: 'add', payload: 1}),
        add2: () => dispatch({type: 'add', payload: 2}),
        add3: (state) => {
            if(state.n % 2 === 1) {
                dispatch({type: 'add', payload: 1});
                return ;
            }
            dispatch({type: '', payload: ''});
        },
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(App);
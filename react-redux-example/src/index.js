import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';

const stateChanger = (state, action) => {
    if(state === undefined) {
        return 0;
    }
    let newState = undefined;
    switch(action.type) {
        case 'add':
            newState = state + action.payload;
            break;
        default: 
            newState = state;
            break;
    }
    return newState;
}
const store = createStore(stateChanger);
let add3 = () => {
    if(store.getState() % 2 === 1) {
        store.dispatch({type: 'add', payload: 1});
    }
}
let add4 = () => {
    setTimeout(() => {
        store.dispatch({type: 'add', payload: 1});
    }, 2000)
}
function render() {
    ReactDOM.render(<App 
                        value={store.getState()} store={store}
                        onAdd2={() => {store.dispatch({type: 'add', payload: 2})}}
                        onAdd3={add3}
                        onAdd4={add4}
                    />, document.getElementById('root'));
}
render();
store.subscribe(render);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const reducer = (state, action) => {
    if(state === undefined) {
        return {n: 0, remark: 'I am remark'};
    }
    let newState = undefined;
    switch(action.type) {
        case 'add':
            newState = {
                n: state.n + action.payload,
                remark: 'I am remark'
            };
            break;
        default: 
            newState = state;
            break;
    }
    return newState;
}
const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

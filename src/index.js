import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from "./redux/store";
import "./index.scss";
import * as serviceWorker from './serviceWorker';

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <App appState={state.appState}/>,
        document.getElementById('root')
    );
};

rerenderEntireTree(store.getState());

store.subscribe(() => rerenderEntireTree(store.getState()));

serviceWorker.unregister();
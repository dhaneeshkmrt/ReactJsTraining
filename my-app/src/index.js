import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

export const element = React.createElement('test-element', {id: 'test-001', className:'class1'}, <App />);

ReactDom.render(element, document.getElementById('root'))



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

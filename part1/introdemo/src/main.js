import ReactDOM from 'react-dom/client';
import React from 'react';
import SayHello from './SayHello';
import App from './App';

const storage = document.getElementById('root')

const root = ReactDOM.createRoot(storage);

root.render(React.createElement(App))
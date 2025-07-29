import ReactDOM from 'react-dom/client';
import React from 'react';
import SayHello from './SayHello';

const storage = document.getElementById('root')

const root = ReactDOM.createRoot(storage);



let App = () => {
   const myDiv= React.createElement ('div', {},
       [React.createElement('div', {}, React.createElement(SayHello, { name: 'Mahesh' })),
           React.createElement('div', {}, React.createElement(SayHello, { name: 'Bijay' })),
           React.createElement('div', {}, React.createElement(SayHello, { name: 'Lokesh' }))]
   )
    return myDiv;
}

root.render(React.createElement(App))
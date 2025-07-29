const storage = document.getElementById('root')

const root = ReactDOM.createRoot(storage);

let SayHello = (props) => {
    return (React.createElement('h1', { className: 'mahesh' }, `Say Hi to Me: ${props.name}`)
    )  
}

let App = () => {
   return (
        [React.createElement('div', {}, React.createElement(SayHello, { name: 'Mahesh' })), React.createElement('div', {}, React.createElement(SayHello, { name: 'Bijay' })), React.createElement('div', {}, React.createElement(SayHello, { name: 'Lokesh' }))]
    )
}

root.render(React.createElement(App))
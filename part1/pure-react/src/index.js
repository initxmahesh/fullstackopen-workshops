const storage = document.getElementById('root')

const root = ReactDOM.createRoot(storage);

let App = React.createElement('h1', { className: 'mahesh' }, "Say Hi to Me")

root.render(App)
import ReactDOM from 'react-dom/client'
import React from 'react'

let SayHello = (props) => {
    // return (React.createElement('h1', { className: 'mahesh' }, `Say Hi to Me: ${props.name}`)
    // )

    return (
        <p>Hello {props.name}</p>
    )
}

export default SayHello
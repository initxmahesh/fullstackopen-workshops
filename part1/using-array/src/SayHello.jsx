import ReactDOM from 'react-dom/client'
import React from 'react'

let SayHello = ({name}) => {
    // return (React.createElement('h1', { className: 'mahesh' }, `Say Hi to Me: ${props.name}`)
    // )
    function getFullName() {
        return ` ${name.firstName} ${name.lastName}`
    }
    return (
        <p> Hello {getFullName()}</p>
    )
}

export default SayHello
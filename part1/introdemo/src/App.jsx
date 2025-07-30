import SayHello from "./SayHello"

let App = () => {
//    const myDiv= React.createElement ('div', {},
//        [
//            React.createElement(SayHello, { name: 'Mahesh' }),
//            React.createElement(SayHello, { name: 'Bijay' }),
//            React.createElement(SayHello, { name: 'Lokesh' })
//        ]
//    )
    //     return myDiv;
    
    return (
        <div>
            <h1 className='sayHello'>Hello World</h1>
            <SayHello name="Mahesh" />
            <SayHello name="Bijay" />
            <SayHello name = "Lokesh" />
        </div>
    )

}

export default App
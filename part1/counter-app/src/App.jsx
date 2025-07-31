import { useState } from 'react'
import Display from './Display';
import Button from './Button';

function App() {
  // let counter = 1;
  const [counter, setCounter] = useState(1)  //it returns array and takes initial values as an argument with two values

  // function click(){
    // let countVal = document.getElementById('count');
    // counter++;
    // countVal.innerText = `The counter is at ${counter}`
  //   console.log(counter)
  //   return setCounter(counter + 1)

  // }
  return (
    <>
      <div id='count'>The counter is at {counter}</div>
      {/* <Button onClickFunc={() => { setCounter(counter - 1) }} /> */}
      <Button onClickFunc={() => setCounter(counter - 1)} label = "decrease count" />
      <Button onClickFunc={() => setCounter(counter + 1)} label="increase count" />
      <Button onClickFunc={() => setCounter(0)} label = "reset count" />
      <Display counter={counter} />
    </>
  )
}

export default App

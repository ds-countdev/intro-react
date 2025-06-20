import { useState } from "react";

export const Counter = ({value}) =>{

    const [counter, setCounter] = useState(value);
    const counterIncrement = () => setCounter(c => c+1);
    
    return <>
    <h2>counter values is {counter}</h2>
        <button onClick={ counterIncrement }>increase counter by 1</button>
    </>;
}
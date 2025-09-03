import { useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";


function Counter(){
    const [counter, setCounter] = useLocalStorage('counter1',0);
    const increaseCount = () =>{
        setCounter(counter+1);
    }
    const decrementCount = () => {
         setCounter(counter-1)
    }

    return(
        <>
            <h2> Count : {counter} </h2>
            <button onClick={()=>decrementCount() }>
                Decrement
            </button>
            <button onClick={()=> increaseCount()}>
                Increment
            </button>
        </>
    )
}
export default Counter;
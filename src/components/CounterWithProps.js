

function CounterWithProp({counter, increaseCount, decreaseCount}){
     return(
        <>
            <h2>Count: {counter}</h2>
            <button onClick={()=> decreaseCount()}>
                Decrement
            </button>
            <button onClick={()=> increaseCount()}>
                Increment
            </button>
        </>
    )
}
export default CounterWithProp;
// Make a greeting card component with props
function WelcomeWithProps(props){
    return (
        <>
            <h2>
                { props.message }
            </h2>
            <h3>
                {props.anothermessage}
            </h3>
            <button onClick={()=> props.decreaseCount()}>
                Decrement
            </button>
            <button onClick={()=> props.increaseCount()}>
                Increment
            </button>
        </>
    )
}
export default WelcomeWithProps;

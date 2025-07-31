import { useEffect, useState } from "react";

export function Clock (){
    const [time,setTime] = useState(new Date());

    useEffect(()=>{
        const tiner = setInterval (()=>{
            setTime(new Date());
        },100) 

        return () => clearInterval(tiner);
    },[])

    return(
        <h2>Clock: {time.toLocaleTimeString()}</h2>
    )
}
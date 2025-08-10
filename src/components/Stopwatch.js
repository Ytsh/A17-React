import { useEffect, useState } from "react";

export function Stopwatch(){
    const [isRunning,setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);

    useEffect(()=>{

        let interval = null;
        if(isRunning){
            const baseTime = Date.now() - elapsedTime;
            interval = setInterval(()=>{
                setElapsedTime(Date.now() - baseTime);
            },10)
        }else{
            clearInterval(interval);
        }

        return ()=> clearInterval(interval)

    },[isRunning])

    const formatTime = (ms) =>{
        const totalSecond = Math.floor(ms/1000);
        const minutes = String(Math.floor(totalSecond/60)).padStart(2,'0')
        const seconds = String(totalSecond%60).padStart(2,'0')
        const milliseconds = String(ms%1000).padStart(3,'0').slice(0,2);
        return `${minutes}:${seconds}:${milliseconds}`;
    }

    const handlePause = () => setIsRunning(false);
    const handleStart = () => setIsRunning(true);
    const handleReset = () => {
        setIsRunning(false);
        setElapsedTime(0);
    }
    return(
        <>
            <h2>Stopwatch</h2>
            <p>{formatTime(elapsedTime)}</p>
            <button onClick={handleStart} disabled={isRunning} >Start</button>
            <button onClick={handlePause} disabled={!isRunning} >Stop</button>
            <button onClick={handleReset} >Reset</button>

        </>
    )
}
import { useEffect, useState } from "react"


export function UseEffectExample(){
const [data,setData] = useState('');
const [count, setCount] = useState(0);
    
//run once
useEffect(()=>{
    console.log("This code runs once only")
},[])

useEffect(()=>{
    console.log("This code runs on render and whenever data changes")
},[data])

//generally never used
useEffect(()=>{
    // console.log("This code runs on render and whenver any state changes of that compoenent")
})

useEffect(()=>{
//some code
    console.log('Running effecct with count:', count);
    
return() => {
    console.log('Cealing up for count:', count);
        // this code runs before next run or onmount 
}
},[count])

return(<>
    <input onChange={(e) => setData(e.target.value)} value={data} placeholder="nter data"/>

    <p>Count: {count}</p>
    <button onClick={e => setCount(prev=> prev+1)} >Increment</button>

</>)
}
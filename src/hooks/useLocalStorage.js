import { useEffect, useState } from "react";


export function useLocalStorage(key, initialValue){


    const [value, setValue] = useState(()=>{
        try{
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item):initialValue;
        }catch(error){
            console.warn("Error reading localstorage", error);
            return initialValue;
        }
    })

    useEffect(()=>{
        try{
            localStorage.setItem(key, JSON.stringify(value));
        }catch(error){
            console.warn('Error writing to localstorage',error);
        }
    }, [value,setValue]);

    return [value,setValue];
    
}
import { useEffect, useState } from "react";


export function Fetch(){

    const [data, setData] = useState(null);
    const [loading,setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(()=>{
        setLoading(true);
        fetch('https://fakestoreapi.com/products')
            .then((response) => {
                if(!response.ok){
                    throw new Error(`HTTP code. Status ${response.status}`)
                    // thousand of code thiyo bhanem, skip bhayo 
                }
                return response.json();
            })
            .then((data)=>{
                setData(data);
                setLoading(false);
            })
            .catch(error =>{
                setError(error.message)
                setLoading([]);
            })
    },[])
    
}
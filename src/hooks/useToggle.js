import { useState } from "react";

export function useToggle(initialValue = false){
    const [value, setValue] = useState(initialValue);
    
    const updateValue = () => setValue(previous => !previous);

    return [value, updateValue];
}
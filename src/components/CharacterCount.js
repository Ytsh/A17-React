import { useState } from "react";

export function CharacterCount(){
    const [text, setText] = useState("");

    const handleOnChange = (e) => {
        if(text.length>=100){
            return;
        }
        setText(e.target.value);
    }

    return(
        <>
            <h2>Character Count</h2>
            <textarea 
                value={text}
                onChange={handleOnChange}
                rows={4}
                cols={50}
            />
            <p>Character count: {text.length} </p>
        </>
    )
}
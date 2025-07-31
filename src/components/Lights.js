import { useState } from "react";

function Lights(){
    const [lightOn, setLightOn] = useState(false)
    return(
        <>
            {lightOn ? "Light is On":"Light is off"}

            <button onClick={() => setLightOn(!lightOn)}>
                Toggle Light</button>
        </>
    )
}
export default Lights;
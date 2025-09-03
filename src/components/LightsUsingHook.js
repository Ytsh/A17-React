import { useToggle } from "../hooks/useToggle"

export function LightUsingHook(){
    
    const [light,updateLight] = useToggle(false);

    return(
        <>
            {light? "Light is On":"Light is off"}
            <button onClick={updateLight}>{light? "Turn Off":"Turn On"}</button>
        </>
    )
}
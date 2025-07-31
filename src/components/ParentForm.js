import { useState } from "react"
import Form from "./Form"
import WelcomeWithProps from "./WelcomeWithProps";

function ParentFOrm(){

    const [formData, setFormData] = useState(
        {email:"", password:""}
    )
    
    const handleSubmit = (e) =>{
        //do something
        e.preventDefault();
        setFormData({email:"", password:""})
    }
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]:e.target.value})
        console.log(e.target.value);
    }

    return(
        <>
        <Form 
            formData={formData}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            />
            <WelcomeWithProps message={formData.email} />
            <WelcomeWithProps message={formData.password} />
        </>
    )

}
export default ParentFOrm
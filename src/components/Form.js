import { useState } from "react";

function Form({formData, handleSubmit, handleChange}){

    return(
        <>
            <h2>Form</h2>
            <form onSubmit={handleSubmit}>
                <input  
                    id="email"
                    name="email"
                    type="text"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <input  
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
                />
                <button type="submit">Submit</button>
            </form>
        </>
    )


}

export default Form;
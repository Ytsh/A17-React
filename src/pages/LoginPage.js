import { replace, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../Auth/AuthContext";
import { Button } from "react-bootstrap";

export function LoginPage(){

    const {login} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const from  = location.state?.from?.pathname || '/'
    
    const handleLogin = () =>{
        login('demoUser');
        navigate(from, {replace : true})
    }

    return (
        <div>
            <h2>Login Page</h2>
            <Button onClick={handleLogin}>Login</Button>
        </div>
    )
}
import React, {useState} from 'react'
import {useAuth} from '../../common/AuthProvider'
import {Link, Navigate, useNavigate} from 'react-router-dom'
import './loginpage.css'
import {Button, Spinner} from "react-bootstrap";
import {fetchPlayerFromAPI, login} from "./api-login.ts";
import jwtDecode from "jwt-decode";

const LoginPage = ({loadPlayer}) => {
    const navigate = useNavigate()
    const auth = useAuth()
    const [username, setUsername] = useState<string>('admin');
    const [password, setPassword] = useState<string>('admin');
    const [errorText, setErrorText] = useState<string>(null)
    const [loading, setLoading] = useState<boolean>(false)

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Perform login logic here

        setLoading(true)

        login(username, password)
            .then(res => {
                localStorage.setItem("AUTH_TOKEN", res.data);
                
                const {id} = jwtDecode(res.data)
                loadPlayer(id)
            }, rej => {
                setErrorText(rej.response.data)
                setLoading(false)
            })
    };
    
    if(auth.userId) return <Navigate to="/action" />

    return (
        <div className="loginPage__container">
            <form className="loginPage__form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" value={username} onChange={handleUsernameChange}/>
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" value={password} onChange={handlePasswordChange}/>
                </div>
                {errorText && <p className="errorText">{errorText}</p>}
                {loading ?
                    <Button type="submit" disabled>
                        <Spinner
                            as="span"
                            animation="border"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                        />
                        Loading...
                    </Button>
                    :
                    <Button type="submit">Login</Button>
                }
                <Link to="/register" className="loginPage__registerText mt-2 mb-0">No account? Register
                    here</Link>
            </form>
        </div>
    )
}

export default LoginPage
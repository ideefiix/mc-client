import React, {useState} from 'react'
import {useAuth} from '../../common/AuthProvider'
import {Link, Navigate} from 'react-router-dom'
import './loginpage.css'
import {Button, Spinner} from "react-bootstrap";
import {login} from "./api-login.ts";

const LoginPage = () => {
    const auth = useAuth()
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false)

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform login logic here

        setLoading(true)
        setTimeout(() => {
            auth.setIdHandler("123")
        }, 2000)

        //TODO UNCOMMENT LOGIN API
        /*login(username, password)
            .then(res => {
                localStorage.setItem("AUTH_TOKEN", res.data.token)
                auth.setIdHandler(res.data.userId)
            })*/
    };

    if (auth.userId) return <Navigate to="/action"/>

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
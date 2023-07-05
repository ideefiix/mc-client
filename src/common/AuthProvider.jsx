import { useState, useContext, createContext } from "react";
//import jwtDecode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext(null)

export function AuthProvider({children}) {
    const [userId, setUserId] = useState(null)
    const navigate = useNavigate()
    

    function logout() {
        setUserId(null)
        /*localStorage.removeItem("AUTH_TOKEN")
        localStorage.removeItem("REFRESH_TOKEN")
        localStorage.removeItem("SESSION_ID")
        sessionStorage.clear()*/
        navigate("/login")
    }

/*    function timeInSession() {
        const token = localStorage.getItem('AUTH_TOKEN')
        if (!token) return null

        const { exp } = jwtDecode(token)
        // Throw token a minute early to avoid latency issues
        const expirationTime = (exp * 1000) - 60000
        if (Date.now() >= expirationTime) {
            localStorage.removeItem('AUTH_TOKEN')
            localStorage.removeItem('SESSION_ID')
            return null
        } else {
            return expirationTime - Date.now()
        }
    }*/

    async function setIdHandler(id) {
        setUserId(id)
    }

    return (
        <AuthContext.Provider value={{ userId, setIdHandler, logout }}>
            {children}
        </AuthContext.Provider>
    )
}
export function useAuth() {
    return useContext(AuthContext)
}
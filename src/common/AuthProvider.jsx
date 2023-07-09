import { useState, useContext, createContext } from "react";
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext(null)

export function AuthProvider({children}) {
    const [userId, setUserId] = useState(null)
    const navigate = useNavigate()

    async function setIdHandler(id) {
        setUserId(id)
    }

    return (
        <AuthContext.Provider value={{ userId, setIdHandler}}>
            {children}
        </AuthContext.Provider>
    )
}
export function useAuth() {
    return useContext(AuthContext)
}
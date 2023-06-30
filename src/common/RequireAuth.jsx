import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from './AuthProvider'

const RequireAuth = (props) => {
    const auth = useAuth()
    const {requiredPrivilege} = props

    if(auth.userId === null) return <Navigate to='/login' />

    return (
        props.children
    )
}

export default RequireAuth
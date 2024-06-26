import React from 'react'
import { Navigate } from 'react-router-dom'

export default function Auth({children}) {

    if(localStorage.getItem('userToken'))
    {
        return <Navigate to={'/'}/>
    }

    return children;
}

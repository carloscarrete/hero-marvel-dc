import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../auth/authContext'
import {types} from '../../types/types'

export const LoginScreen = () => {

    const {dispatch} = useContext(AuthContext)

    const navigate = useNavigate();
    const handleLogin = () =>{
        const action = {
            type: types.login,
            payload: {
                logged: true,
                name: 'Carrete'
            }
        }

        dispatch(action);
        navigate(localStorage.getItem('lastPath') || '/',{
            replace: true
        });
    }

    return (
        <div className="container mt-5">
            <h1>LoginScreen</h1>
            <hr/>
            <button className="btn btn-primary" onClick={handleLogin}>
                Login
            </button>
        </div>
    )
}

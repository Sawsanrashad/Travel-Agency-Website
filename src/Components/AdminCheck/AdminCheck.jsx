import React from 'react'
import { useRecoilState } from 'recoil'
import { $loggedIn } from '../../Store'
import { toast, ToastContainer } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

export const AdminCheck = ({ children }) => {
    const [user, setUser] = useRecoilState($loggedIn)
    const navigate = useNavigate();
    if (user.role == 'admin') {
        return (children)
    }
    else {
        navigate('/')
        toast.error('You do not have permission to access this')
        return (
            ''
        )
    }
}

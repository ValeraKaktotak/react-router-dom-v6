import {useLocation, Navigate, useNavigate} from 'react-router-dom'
import {useAuth} from 'hook/useAuth'

export const RequireAuth = ({children}) => {
    const location = useLocation()
    const navigate = useNavigate()

    const {user} = useAuth()

    if(!user){
        return <Navigate to="/login" state={{from: location}} />
    }

    return children
}
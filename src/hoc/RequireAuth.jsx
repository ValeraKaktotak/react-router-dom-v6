import {useLocation, Navigate, useNavigate} from 'react-router-dom'

export const RequireAuth = ({children}) => {
    const location = useLocation()
    const navigate = useNavigate()

    const auth = false

    if(!auth){
        return <Navigate to="/login" state={{from: location}} />
    }

    return children
}
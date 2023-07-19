import {useNavigate, useLocation} from "react-router-dom"

export const LoginPage = () => {
    const navigate = useNavigate()
    const location = useLocation()
console.log(location)
    const fromPage = location.state?.from?.pathname || '/'

    return(
        <div>
            <h1>Login Page</h1>
            <p>From: {fromPage}</p>
        </div>
    )
}
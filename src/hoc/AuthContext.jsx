import {createContext, useState} from 'react'

export const AuthenticationContext = createContext(null)

export const AuthContext = ({children}) => {
const [user, setUser] = useState(null)

const signin = (newUser, cb) => {
    setUser(newUser)
    cb()
}

const signout = (newUser, cb) => {
    setUser(null)
    cb()
}

const value = {user, signin, signout}

    return <AuthenticationContext.Provider value={value}>
        {children}
    </AuthenticationContext.Provider>
}
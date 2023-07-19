import { useContext } from "react";
import { AuthenticationContext } from "hoc/AuthContext";


export function useAuth(){
    return useContext(AuthenticationContext)
}
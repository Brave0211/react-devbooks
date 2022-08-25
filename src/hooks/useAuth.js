import { useContext, } from "react";
import { AuthContext } from "../context/Authcontext";

export const useAuth = () => {
   const{token,setToken} = useContext(AuthContext)
   return {token,setToken}
}
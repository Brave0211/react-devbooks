import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {

   const Local = JSON.parse(localStorage.getItem("token"))

   const [token,setToken] = useState(Local || "")
   
   useEffect(() => { 
      if(token){
         localStorage.setItem("token",JSON.stringify(token))
      }else{
         localStorage.removeItem("token")
      }
   },[token])

   return (
      <AuthContext.Provider value={{token,setToken}}>{children}</AuthContext.Provider>
   )
}
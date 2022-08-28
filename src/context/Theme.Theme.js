import { createContext, useState } from "react";

export const ThemeContext = createContext(null)

export const ThemeProvider = ({children}) => {
   const [theme,setTheme] = useState("dark")
   const toggleTheme = () => {
      setTheme((cur)=>(cur==="light" ? "dark" : "light"))
    }
   return <ThemeContext.Provider value={{theme,toggleTheme}}>{children}</ThemeContext.Provider>
}
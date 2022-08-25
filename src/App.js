import "./app.css";
import { Private } from "./Private";
import {useAuth} from "./hooks/useAuth"
import { Login, Register } from "./pages";
import {Routes,Route} from "react-router-dom"

function App() {
  const{token} = useAuth()

  if(token){
    return <Private/>
  }
  return <>
        <Routes>
          <Route path="/" element={<Register/>}/>
        </Routes>
        <Routes>
          <Route path="sign-up" element={<Login/>}/>
        </Routes>
  </>
}

export default App;

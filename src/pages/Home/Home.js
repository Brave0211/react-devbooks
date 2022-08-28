import { Header, Hero, Searchhome } from "../../components"
import "./home.css"
import {Outlet,NavLink} from "react-router-dom"
import { lang } from "../../lang/lang"
import { LangContext } from "../../context/LangContext"
import { useContext } from "react"
export const Home = () => {
   const{lang:til} = useContext(LangContext)
   return (
      <div className="home">
         <Header />
         <Hero/>
         <Searchhome/>
         <h2 className="home__title">{lang[til].main.cat}</h2>
         <div>
            <ul className="home__list">
               <li className="home__item">
                  <NavLink to="/">{lang[til].main.period}</NavLink>
               </li>
               <li className="home__item">
                  <NavLink to="/jadid">{lang[til].main.literature}</NavLink>
               </li>
               <li className="home__item">
                  <NavLink to="/sovet">{lang[til].main.era}</NavLink>
               </li>
               <li className="home__item">
                  <NavLink to="/mustaqillik">{lang[til].main.independence}</NavLink>
               </li>
            </ul>
         </div>
         <Outlet/>
      </div>
   )
}
import { Header, Hero, Searchhome } from "../../components"
import "./home.css"
import {Outlet,NavLink} from "react-router-dom"

export const Home = () => {
   return (
      <div className="home">
         <Header />
         <Hero/>
         <Searchhome/>
         <h2 className="home__title">Asosiy kategoriyalar</h2>
         <div>
            <ul className="home__list">
               <li className="home__item">
                  <NavLink to="/">Temuriylar davri </NavLink>
               </li>
               <li className="home__item">
                  <NavLink to="/jadid">Jadid adabiyoti </NavLink>
               </li>
               <li className="home__item">
                  <NavLink to="/sovet">Sovet davri </NavLink>
               </li>
               <li className="home__item">
                  <NavLink to="/mustaqillik">Mustaqillik davri </NavLink>
               </li>
            </ul>
         </div>
         <Outlet/>
      </div>
   )
}
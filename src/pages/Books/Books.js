import { Header, Hero } from "../../components";
import "./books.css";
import { Outlet, NavLink } from "react-router-dom";
import { lang } from "../../lang/lang"
import { LangContext } from "../../context/LangContext"
import { useContext } from "react"
import { Searchbook } from "../../components/Searchbook/Searchbook";
export const Books = () => {
  const{lang:til} = useContext(LangContext)
  return (
    <div>
      <div style={{ backgroundColor: "#191919" }}>
        <Header />
        <Hero />
        <Searchbook />
        <h2 className="book__title">{lang[til].main.cat}</h2>
        <div>
          <ul className="book__list">
            <li className="book__item">
              <NavLink to="/kitoblar">{lang[til].main.period}</NavLink>
            </li>
            <li className="book__item">
              <NavLink to="jadid">{lang[til].main.literature}</NavLink>
            </li>
            <li className="book__item">
              <NavLink to="sovet">{lang[til].main.era}</NavLink>
            </li>
            <li className="book__item">
              <NavLink to="mustaqillik">{lang[til].main.independence}</NavLink>
            </li>
          </ul>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

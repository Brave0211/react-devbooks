import { Header, Hero, Searchhome } from "../../components";
import "./books.css";
import { Outlet, NavLink } from "react-router-dom";

export const Books = () => {
  return (
    <div>
      <div style={{ backgroundColor: "#191919" }}>
        <Header />
        <Hero />
        <Searchhome />
        <h2 className="book__title">Asosiy kategoriyalar</h2>
        <div>
          <ul className="book__list">
            <li className="book__item">
              <NavLink to="/kitoblar">Temuriylar davri </NavLink>
            </li>
            <li className="book__item">
              <NavLink to="jadid">Jadid adabiyoti </NavLink>
            </li>
            <li className="book__item">
              <NavLink to="sovet">Sovet davri </NavLink>
            </li>
            <li className="book__item">
              <NavLink to="mustaqillik">Mustaqillik davri </NavLink>
            </li>
          </ul>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

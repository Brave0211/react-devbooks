import "./header.css";
import { NavLink } from "react-router-dom";
import Down from "../../assets/images/down.svg";

export const Header = () => {
  return (
    <header>
      <div className="container header__container">
      <NavLink className="header__logo" to="/">BADIIYAT</NavLink>
      <ul className="header__list">
        <li className="header__item">
             <NavLink className={({isActive}) => isActive ? "active-link" : "link"} to="/">Bosh sahifa</NavLink>
        </li>
        <li className="header__item">
          <NavLink className={({isActive}) => isActive ? "active-link" : "link"} to="/kitoblar">Kitoblar</NavLink>
        </li>
      </ul>
      <button className="header__btn">
        <img src={Down} alt="..." width={15} height={12} />
      </button>
      <ul>
        <li>
          <NavLink to="/addauthor">Add Author</NavLink>
        </li>
        <li>
          <NavLink to="/addbooks">Add Books</NavLink>
        </li>
        <li>
          <NavLink to="/settings">Settings</NavLink>
        </li>
      </ul>
    </div>
    </header>
  );
};

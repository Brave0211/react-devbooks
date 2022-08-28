import "./header.css";
import { NavLink } from "react-router-dom";
import Down from "../../assets/images/down.svg";
import { lang } from "../../lang/lang"
import { LangContext } from "../../context/LangContext"
import { useContext, useEffect, useRef, useState } from "react"
import axios from "axios";
import { useAuth } from "../../hooks/useAuth";

export const Header = () => {
  const{lang:til} = useContext(LangContext)
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);
  const [myImg,setMyImg] = useState([])
  const { token } = useAuth();
  useEffect(() => {
    axios
      .get("https://book-service-layer.herokuapp.com/user/me", {
        headers: {
          Authorization: token.token,
        },
      })
      .then((res) => setMyImg(res.data))
      .catch((err) => console.log(err));
  },[]);
  return (
    <header>
      <div className="container header__container">
      <NavLink className="header__logo" to="/">BADIIYAT</NavLink>
      <ul className="header__list">
        <li className="header__item">
             <NavLink className={({isActive}) => isActive ? "active-link" : "link"} to="/">{lang[til].headers.home}</NavLink>
        </li>
        <li className="header__item">
          <NavLink className={({isActive}) => isActive ? "active-link" : "link"} to="/kitoblar">{lang[til].headers.books}</NavLink>
        </li>
      </ul>
      <img className="header_img" src={`https://book-service-layer.herokuapp.com/${myImg.image}`} alt="" width={50} height={50} />
      <button onClick={onClick} className="header__btn">
        <img src={Down} alt="..." width={15} height={12} />
      </button>
      <ul className={`${isActive ? 'active-list' : 'header_list'}`}>
        <li>
          <NavLink to="/addauthor">{lang[til].headers.addauthor}</NavLink>
        </li>
        <li>
          <NavLink to="/addbooks">{lang[til].headers.addbokks}</NavLink>
        </li>
        <li>
          <NavLink to="/settings">{lang[til].headers.settings}</NavLink>
        </li>
      </ul>
    </div>
    </header>
  );
};

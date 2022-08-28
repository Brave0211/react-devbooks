import { useRef, useState } from "react";
import axios from "axios";
import {Link} from "react-router-dom"
import "./searchhome.css";
import { lang } from "../../lang/lang";
import { LangContext } from "../../context/LangContext";
import { useContext } from "react";

export const Searchhome = () => {
  const { lang: til } = useContext(LangContext);
  const [val, setVal] = useState([]);
  const inputVal = useRef();

  const handleSearch = (evt) => {
    evt.preventDefault();
    axios
      .get(
        `https://book-service-layer.herokuapp.com/author/search?author=${inputVal.current.value}`
      )
      .then((res) => setVal(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="search">
      <div className="search__container container">
        <p>{lang[til].search.search}</p>
        <form className="search__form" onSubmit={handleSearch}>
          <input
            ref={inputVal}
            type="text"
            placeholder={lang[til].search.placeholder}
          />
          <button type="submit">{lang[til].search.searched}</button>
        </form>
      </div>
      <div>
        {val.length &&
          val.map((e) => (
            <ul key={e.id} className="my_list">
              <li>
                <Link style={{textDecaration:"none"}} to={`/author/authorid/${e.id}`}>
                  <img
                    src={`https://book-service-layer.herokuapp.com/${e.image}`}
                    alt={e.first_name}
                    width={174}
                    height={132}
                  />
                  <p className="list__item-txt">
                    {e.first_name} {e.last_name}
                  </p>
                  <p className="list__item-date">
                    {e.date_of_birth}-{e.date_of_death}
                  </p>
                </Link>
              </li>
            </ul>
          ))}
      </div>
    </div>
  );
};

import { useRef, useState } from "react";
import axios from "axios";
import { lang } from "../../lang/lang"
import { LangContext } from "../../context/LangContext"
import { useContext } from "react"

export const Searchbook = () => {
  const{lang:til} = useContext(LangContext)
  const [bookId, setBookId] = useState([]);
  const inputValue = useRef();

  const handleSearch = (evt) => {
    evt.preventDefault();
    axios
      .get(
        `https://book-service-layer.herokuapp.com/book/search?book=${inputValue.current.value}`
      )
      .then((res) => setBookId(res.data))
      .catch((err) => console.log(err));
  };
  console.log(bookId);
  return (
    <div className="search">
      <div className="search__container">
        <p>{lang[til].search.search}</p>
        <form className="search__form" onSubmit={handleSearch}>
          <input
            ref={inputValue}
            type="text"
            placeholder={lang[til].search.placeholder}
          />
          <button type="submit">{lang[til].search.searched}</button>
        </form>
      </div>
      <div>
        {bookId.length &&
          bookId.map((e) => {
            <p>{e.title}</p>
          })}
      </div>
    </div>
  );
};

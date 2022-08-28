import "./singleinfo.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Bookcard } from "../../components";
import { lang } from "../../lang/lang";
import { LangContext } from "../../context/LangContext";
import { useContext } from "react";
import styled from "styled-components";
export const Singleinfo = ({ item }) => {
  const [book, setBook] = useState("");
  const { lang: til } = useContext(LangContext);
  useEffect(() => {
    axios
      .get("https://book-service-layer.herokuapp.com/book/genreid/4")
      .then((res) => setBook(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h2 className="singleinfo-title">
        {item.first_name} {item.last_name}
      </h2>
      <p className="singleinfo-desc">{item.bio}</p>
      <span className="singleinfo-titl">{lang[til].single.works}</span>
      <p className="singleinfo-txt">{item.bio}</p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "13px",
        }}
      >
        <span className="singleinfo-text">Asarlari</span>
        <Link className="singleinfo-link" to="/kitoblar">
          {lang[til].single.all}
        </Link>
      </div>
      {book.length && (
        <List>
          {book.map((e) => (
            <Bookcard key={e.id} item={e} />
          ))}
        </List>
      )}
    </div>
  );
};

const List = styled.ul`
  width:751px;
  display: flex;
  overflow-x: scroll;
  margin: 0;
  padding: 0;
  list-style: none;
`;

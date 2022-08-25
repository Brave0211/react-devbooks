import "./singlebook.css";
import { useAuth } from "../../hooks/useAuth";
import { useParams, NavLink, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Book, Bookcard } from "../../components";

export const Singlebook = () => {
  const { token } = useAuth();
  const { id } = useParams();
  const [book, setBook] = useState("");

  const[novel,setNovel] = useState("")

  useEffect(()=>{
    axios
      .get("https://book-service-layer.herokuapp.com/book/genreid/3")
      .then(res=>setNovel(res.data))
      .catch(err=>console.log(err))
  })

  useEffect(() => {
    axios
      .get("https://book-service-layer.herokuapp.com/book/bookid/" + id, {
        headers: {
          Authorization: token.token,
        },
      })
      .then((res) => setBook([res.data]))
      .catch((err) => console.log(err));
  });

  return (
    <div className="singlebook">
      <div className="container">
        <div className="row" style={{ marginBottom: "65px" }}>
          <div className="col-5">
            {book.length &&
              book.map((e) => (
                <img
                  className="singlebook_img"
                  src={e.image}
                  alt={e.title}
                  width={519}
                  height={810}
                />
              ))}
          </div>
          <div
            className="col-7"
            style={{ paddingLeft: "56px", paddingRight: "75px" }}
          >
            {book.length && book.map((e) => <Book key={e.id} item={e} />)}
          </div>
        </div>
        <ul className="singlebook_list">
          <li className="singlebook_item">
            <NavLink
              to=""
              className={({ isActive }) =>
                isActive ? "singlebook_link" : "alink"
              }
            >
              Muallif haqida
            </NavLink>
          </li>
          <li className="singlebook_item">
            <NavLink
              to="iqtibos"
              className={({ isActive }) =>
                isActive ? "singlebook_link" : "alink"
              }
            >
              Kitobdan iqtiboslar
            </NavLink>
          </li>
          <li className="singlebook_item">
            <NavLink
              to="taqriz"
              className={({ isActive }) =>
                isActive ? "singlebook_link" : "alink"
              }
            >
              Kitobxonlar taqrizi
            </NavLink>
          </li>
        </ul>
      </div>
      <Outlet />
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "72px",
          marginBottom: "66px",
        }}
      >
        <span className="you-love">Sizga yoqishi mumkin</span>
        <NavLink className="singleinfo-link" to="/kitoblar">
          Barchasini ko’rish
        </NavLink>
      </div>
      {novel.length && (
        <ul className="list">
          {novel.map((e) => (
            <Bookcard key={e.id} item={e} />
          ))}
        </ul>
      )}
    </div>
  );
};

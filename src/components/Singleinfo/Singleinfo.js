import "./singleinfo.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Bookcard } from "../../components";
export const Singleinfo = ({ item }) => {
  const [book, setBook] = useState("");

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
      <span className="singleinfo-titl">Ijodi</span>
      <p className="singleinfo-txt">{item.bio}</p>
      <div style={{display:"flex",justifyContent: "space-between",marginBottom:"13px"}}>
        <span className="singleinfo-text">Asarlari</span>
        <Link className="singleinfo-link" to="/kitoblar">Barchasini ko'rish</Link>
      </div>
      {book.length && (
        <ul className="list">
          {book.map((e) => (
            <Bookcard key={e.id} item={e} />
          ))}
        </ul>
      )}
    </div>
  );
};

import { useEffect, useState } from "react";
import "./bookso.css";
import axios from "axios";
import { Bookcard } from "../../components";

export const Bookso = () => {
  const [bookso, setBookso] = useState("");

  useEffect(() => {
    axios
      .get("https://book-service-layer.herokuapp.com/book/genreid/3")
      .then((res) => setBookso(res.data))
      .catch((err) => console.log(err))
  },[]);

  return <div>
   {bookso.length && <ul className="list container">
      {bookso.map(e=>(
         <Bookcard key={e.id} item={e}/>
      ))}
      </ul>}
  </div>;
};

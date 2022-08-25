import { useEffect, useState } from "react";
import "./bookm.css";
import axios from "axios";
import { Bookcard } from "../../components";

export const Bookm = () => {
  const [bookm, setBookm] = useState("");

  useEffect(() => {
    axios
      .get("https://book-service-layer.herokuapp.com/book/genreid/4")
      .then((res) => setBookm(res.data))
      .catch((err) => console.log(err))
  },[]);

  return <div>
   {bookm.length && <ul className="list container">
      {bookm.map(e=>(
         <Bookcard key={e.id} item={e}/>
      ))}
      </ul>}
  </div>;
};

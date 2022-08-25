import { useEffect, useState } from "react";
import "./bookt.css";
import axios from "axios";
import { Bookcard } from "../../components";

export const Bookt = () => {
  const [bookt, setBookt] = useState("");

  useEffect(() => {
    axios
      .get("https://book-service-layer.herokuapp.com/book/genreid/1")
      .then((res) => setBookt(res.data))
      .catch((err) => console.log(err))
  },[]);

  return (<div>
   {bookt.length && <ul className="list container">
      {bookt.map(e=>(
         <Bookcard key={e.id} item={e}/>
      ))}
      </ul>}
  </div>);
};

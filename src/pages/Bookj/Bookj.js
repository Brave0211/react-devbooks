import { useEffect, useState } from "react";
import "./bookj.css";
import axios from "axios";
import { Bookcard } from "../../components";

export const Bookj = () => {
  const [bookj, setBookj] = useState("");

  useEffect(() => {
    axios
      .get("https://book-service-layer.herokuapp.com/book/genreid/2")
      .then((res) => setBookj(res.data))
      .catch((err) => console.log(err))
  },[]);

  return <div>
   {bookj.length && <ul className="list container">
      {bookj.map(e=>(
         <Bookcard key={e.id} item={e}/>
      ))}
      </ul>}
  </div>;
};

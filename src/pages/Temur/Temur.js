import { useEffect, useState } from "react";
import "./temur.css";
import axios from "axios";
import { Card } from "../../components";

export const Temur = () => {
  const [temur, setTemur] = useState("");

  useEffect(() => {
    axios
      .get("https://book-service-layer.herokuapp.com/author/genreid/1")
      .then((res) => setTemur(res.data))
      .catch((err) => console.log(err))
  },[]);

  return <div>
   {temur.length && <ul className="list container">
      {temur.map(e=>(
         <Card key={e.id} item={e}/>
      ))}
      </ul>}
  </div>;
};

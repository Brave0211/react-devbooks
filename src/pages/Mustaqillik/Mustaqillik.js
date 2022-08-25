import { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "../../components";

export const Mustaqillik = () => {
  const [mustaqillik, setMustaqillik] = useState("");

  useEffect(() => {
    axios
      .get("https://book-service-layer.herokuapp.com/author/genreid/4")
      .then((res) => setMustaqillik(res.data))
      .catch((err) => console.log(err))
  },[]);

  return <div>
   {mustaqillik.length && <ul className="list container">
      {mustaqillik.map(e=>(
         <Card key={e.id} item={e}/>
      ))}
      </ul>}
  </div>;
};

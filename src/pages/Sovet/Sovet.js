import { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "../../components";

export const Sovet = () => {
  const [sovet, setSovet] = useState("");

  useEffect(() => {
    axios
      .get("https://book-service-layer.herokuapp.com/author/genreid/3")
      .then((res) => setSovet(res.data))
      .catch((err) => console.log(err))
  },[]);

  return <div>
   {sovet.length && <ul className="list container">
      {sovet.map(e=>(
         <Card key={e.id} item={e}/>
      ))}
      </ul>}
  </div>;
};

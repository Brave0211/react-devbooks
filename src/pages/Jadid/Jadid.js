import { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "../../components";

export const Jadid = () => {
  const [jadid, setJadid] = useState("");

  useEffect(() => {
    axios
      .get("https://book-service-layer.herokuapp.com/author/genreid/2")
      .then((res) => setJadid(res.data))
      .catch((err) => console.log(err))
  },[]);

  return <div>
   {jadid.length && <ul className="list container">
      {jadid.map(e=>(
         <Card key={e.id} item={e}/>
      ))}
      </ul>}
  </div>;
};

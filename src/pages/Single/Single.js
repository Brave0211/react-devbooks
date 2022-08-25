import "./single.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import axios from "axios";
import { Singlecard, Singleinfo } from "../../components";
export const Single = () => {
  const { token } = useAuth();
  const { id } = useParams();
  const [author, setAuthor] = useState("");

  useEffect(() => {
    axios
      .get("https://book-service-layer.herokuapp.com/author/authorid/" + id, {
        headers: {
          Authorization: token.token,
        },
      })
      .then((res) => setAuthor([res.data]))
      .catch((err) => console.log(err));
  });
  return <div>
   {author.length && <div>
      {author.map(e=>(
         <div className="row" key={e.id} style={{backgroundColor: "#191919" , paddingBottom:"47px"}}>
            <div className="col-5">
              <Singlecard item={e}/>
            </div>
            <div className="col-7" style={{paddingLeft:"98px",paddingRight:"89px"}}>
              <Singleinfo item={e}/>
            </div>
         </div>
      ))}
      </div>}
  </div>;
};

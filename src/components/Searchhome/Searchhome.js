import { useEffect, useState } from "react";
import "./searchhome.css";
import axios from "axios"

export const Searchhome = () => {

  const[search,setSearch] = useState("")

  useEffect(()=>{
    axios
      .get("https://book-service-layer.herokuapp.com/author/search")
      .then(res=>setSearch(res.data))
      .catch(err=>console.log(err))
  })


  return (
    <div className="search">
      <div className="search__container">
        <p>QIDIRISH</p>
        <form className="search__form">
          <input type="text" placeholder="Adiblar, kitoblar, audiolar, maqolalar..." />
          <button type="submit">Izlash</button>
        </form>
      </div>
    </div>
  );
};

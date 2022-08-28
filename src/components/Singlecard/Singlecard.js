import "./singlecard.css";
import { lang } from "../../lang/lang"
import { LangContext } from "../../context/LangContext"
import { useContext } from "react"
export const Singlecard = ({ item }) => {
   const{lang:til} = useContext(LangContext)
  return (
    <div className="singlecard">
      <img className="singlecard-img" src={item.image} alt={item.first_name} width={582} height={779} />
      <ul className="single_list">
         <li>
            <span className="single_txt">{lang[til].single.birth}</span>
            <p>{item.date_of_birth}</p>
            <span className="single_txt">Toshkent, Uzbekistan</span>
         </li>
         <li>
            <span className="throw">-</span>
         </li>
         <li>
            <span className="single_txt">{lang[til].single.death}</span>
            <p>{item.date_of_death}</p>
            <span className="single_txt">Toshkent, Uzbekistan</span>
         </li>
      </ul>
    </div>
  );
};

import "./book.css"
import Kitob from "../../assets/images/kitob.svg"
import Earphone from "../../assets/images/earphone.svg"
import Phone from "../../assets/images/phone.svg"
import { lang } from "../../lang/lang"
import { LangContext } from "../../context/LangContext"
import { useContext } from "react"

export const Book = ({item}) => {
   const{lang:til} = useContext(LangContext)
   return (
      <div>
         <h2 className="book_title">{item.title}</h2>
         <p className="book_page">{lang[til].singlebook.pages}: <strong>{item.page}</strong></p>
         <p className="book_date">{lang[til].singlebook.publish}: <strong>{item.year}</strong></p>
         <p className="book_genre">{lang[til].singlebook.genre}: <strong>Tarixiy</strong></p>
         <p className="book_nash">{lang[til].singlebook.publisher} <strong>Nihol nashr</strong></p>
         <div className="book_info-wrapper">
            <span className="book_info">{lang[til].singlebook.info}</span>
         </div>
         <p className="book_desc">{item.description}</p>
         <span className="book_format">{lang[til].singlebook.formats}</span>
         <div style={{display: "flex",alignItems: "center",justifyContent: "space-between"}}>
            <ul className="book_list">
               <li className="book_item">
                  <img src={Kitob} alt="book" width={18} height={20} />
                  <p>{lang[til].singlebook.paper}</p>
                  <span>{item.price}$</span>
               </li>
               <li className="book_item">
                  <img src={Earphone} alt="audio" width={18} height={20} />
                  <p>{lang[til].singlebook.audio}</p>
                  <span>6:23 soat</span>
               </li>
               <li className="book_item">
                  <img src={Phone} alt="phone" width={18} height={20} />
                  <p>{lang[til].singlebook.electronic}</p>
                  <span>pdf, epub</span>
               </li>
            </ul>
            <button className="book_btn">{lang[til].singlebook.shelf} </button>
         </div>
      </div>
   )
}
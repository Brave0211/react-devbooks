import "./bookcard.css"
import {Link} from "react-router-dom"

export const Bookcard = ({item}) => {
   return (
      <li className="books__item">
            <Link to={`/book/bookid/${item.id}`}>
               <img src={`https://book-service-layer.herokuapp.com/${item.image}`} alt={item.title} width={164} height={246} />
               <p className="books__item-txt">{item.title}</p>
            </Link>
         </li>
   )
}
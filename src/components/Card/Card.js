import "./card.css"
import {Link} from "react-router-dom"
export const Card = ({item}) => {
   return (
         <li className="list__item">
            <Link to={`/author/authorid/${item.id}`}>
               <img src={`https://book-service-layer.herokuapp.com/${item.image}`} alt={item.first_name} width={174} height={132} />
               <p className="list__item-txt">{item.first_name} {item.last_name}</p>
               <p className="list__item-date">{item.date_of_birth}-{item.date_of_death}</p>
            </Link>
         </li>
   )
}
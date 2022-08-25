import "./book.css"
import Kitob from "../../assets/images/kitob.svg"
import Earphone from "../../assets/images/earphone.svg"
import Phone from "../../assets/images/phone.svg"

export const Book = ({item}) => {
   return (
      <div>
         <h2 className="book_title">{item.title}</h2>
         <p className="book_page">Sahifalar soni: <strong>{item.page}</strong></p>
         <p className="book_date">Chop etilgan: <strong>{item.year}</strong></p>
         <p className="book_genre">Janri: <strong>Tarixiy</strong></p>
         <p className="book_nash">Nashriyot <strong>Nihol nashr</strong></p>
         <div className="book_info-wrapper">
            <span className="book_info">To’liq ma’lumot</span>
         </div>
         <p className="book_desc">{item.description}</p>
         <span className="book_format">Mavjud formatlar</span>
         <div style={{display: "flex",alignItems: "center",justifyContent: "space-between"}}>
            <ul className="book_list">
               <li className="book_item">
                  <img src={Kitob} alt="book" width={18} height={20} />
                  <p>Qog’oz kitob</p>
                  <span>{item.price}$</span>
               </li>
               <li className="book_item">
                  <img src={Earphone} alt="audio" width={18} height={20} />
                  <p>Audiokitob</p>
                  <span>6:23 soat</span>
               </li>
               <li className="book_item">
                  <img src={Phone} alt="phone" width={18} height={20} />
                  <p>Elektron</p>
                  <span>pdf, epub</span>
               </li>
            </ul>
            <button className="book_btn">Javonga qo’shish </button>
         </div>
      </div>
   )
}
import "./author.css";
import Heart from "../../assets/images/heart.svg";
import Share from "../../assets/images/share.svg";

export const Author = () => {
  return (
    <div className="container" style={{display:"flex",alignItems:"normal",justifyContent: "space-between"}}>
      <div className="author">
        <p>
          Inson bolasi ne kunlarni ko‘rmaydi?! Har bir odam o‘z g‘ami bilan
          bo‘lsa, hayotdan ko‘z yumib ketganlarga umr bo‘yi motam tutib o‘tsa,
          bu moddiy olam shu kunlarga yetolarmidi? Hayot to‘lqini ojizlarni
          qirg‘oqqa irg‘itib tashlaydi. Oqimga qarshi suza olganlar, to‘lqinni
          egarlaganlargina ertangi kunga yetib keladi.
        </p>
        <div className="img-wrapper">
          <img
            src={Heart}
            alt="heart"
            width={20}
            height={18}
          />
          <img src={Share} alt="share" width={20} height={18} />
        </div>
      </div>
      <div className="author">
        <p>
        Yer kurrasida chumolidek mehnat qilayotganlardan ko‘ra, tuproq tagida yotganlar ko‘p. Yer qatlami odam suyaklariga to‘lib ketgan.
        </p>
        <div className="img-wrapper">
          <img
            src={Heart}
            alt="heart"
            width={20}
            height={18}
          />
          <img src={Share} alt="share" width={20} height={18} />
        </div>
      </div>
    </div>
  );
};

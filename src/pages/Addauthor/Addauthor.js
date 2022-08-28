import "./addauthor.css";
import axios from "axios";
import { useAuth } from "../../hooks/useAuth";
import { lang } from "../../lang/lang";
import { LangContext } from "../../context/LangContext";
import { useContext } from "react";

export const Addauthor = () => {
  const { token } = useAuth();
  const { lang: til } = useContext(LangContext);
  const handleAddAuthor = (evt) => {
    evt.preventDefault();
    const formData = new FormData();
    const [
      image,
      first_name,
      last_name,
      date_of_birth,
      date_of_death,
      genre_id,
      country,
      bio,
    ] = evt.target.elements;
    formData.append("image", image.files[0]);
    formData.append("first_name", first_name.value);
    formData.append("last_name", last_name.value);
    formData.append("date_of_birth", date_of_birth.value);
    formData.append("date_of_death", date_of_death.value);
    formData.append("country", country.value);
    formData.append("bio", bio.value);
    formData.append("genre_id", genre_id.value);
    console.log(genre_id.value);
    axios
      .post("https://book-service-layer.herokuapp.com/author", formData, {
        headers: {
          Authorization: token.token,
        },
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="row">
      <div className="col-6">
        <div className="img"></div>
      </div>
      <div className="col-6">
        <div className="form">
          <h1>{lang[til].addauthor.add}</h1>
          <form onSubmit={handleAddAuthor}>
            <label className="form_img">
              {lang[til].addauthor.img}
              <input
                className="form_image"
                type="file"
                name="image"
                placeholder="Upload image"
                aria-label="add image"
              />
            </label>
            <input
              type="text"
              name="first_name"
              placeholder={lang[til].addauthor.first}
            />
            <input
              type="text"
              name="last_name"
              placeholder={lang[til].addauthor.last}
            />
            <input
              type="number"
              name="date_of_birth"
              placeholder={lang[til].addauthor.birth}
            />
            <input
              type="number"
              name="date_of_death"
              placeholder={lang[til].addauthor.death}
            />
            <select name="genre_id">
              <option value="1">{lang[til].main.period}</option>
              <option value="2">{lang[til].main.literature}</option>
              <option value="3">{lang[til].main.era}</option>
              <option value="4">{lang[til].main.independence}</option>
            </select>
            <input type="text" name="country" placeholder="Country" />
            <textarea type="text" name="bio" placeholder="Bio" />
            <button type="submit">{lang[til].addauthor.create}</button>
          </form>
        </div>
      </div>
    </div>
  );
};

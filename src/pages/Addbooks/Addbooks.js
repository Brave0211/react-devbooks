import "./addbooks.css";
import axios from "axios";
import { useAuth } from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import { lang } from "../../lang/lang"
import { LangContext } from "../../context/LangContext"
import { useContext } from "react"

export const Addbooks = () => {
  const{lang:til} = useContext(LangContext)
  const { token } = useAuth();
  const [dataId, setDataId] = useState(1);
  const [data, setData] = useState([]);
  const handleAddBooks = (evt) => {
    evt.preventDefault();
    const formData = new FormData();
    const [image, title, page, year, price, genre_id, author_id, description] =
      evt.target.elements;
    formData.append("image", image.files[0]);
    formData.append("page", page.value);
    formData.append("title", title.value);
    formData.append("year", year.value);
    formData.append("price", price.value);
    formData.append("description", description.value);
    formData.append("author_id", author_id.value);
    formData.append("genre_id", genre_id.value);
    axios
      .post("https://book-service-layer.herokuapp.com/book", formData, {
        headers: {
          Authorization: token.token,
        },
      })
      .then((res) => setDataId(res.data))
      .catch((err) => console.log(err));
  };

  const selectClick = (evt) => {
    setDataId(evt.target.value);
  };

  useEffect(() => {
    axios
      .get(
        `https://book-service-layer.herokuapp.com/author/genreid/${dataId}`,
        {
          headers: {
            Authorization: token.token,
          },
        }
      )
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, [dataId]);

  return (
    <div className="row">
      <div className="col-6">
        <div className="img"></div>
      </div>
      <div className="col-6">
        <div className="form">
          <h1>{lang[til].addbook.add}</h1>
          <form onSubmit={handleAddBooks}>
            <label className="form_img">
              {lang[til].addbook.img}
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
              name="title"
              placeholder={lang[til].addbook.title}
            />
            <input
              type="number"
              name="page"
              placeholder={lang[til].addbook.page}
            />
            <input
              type="number"
              name="year"
              placeholder={lang[til].addbook.year}
            />
            <input
              type="number"
              name="price"
              placeholder={lang[til].addbook.price}
            />
            <select name="genre_id" onClick={selectClick}>
              <option value="1">{lang[til].main.period}</option>
              <option value="2">{lang[til].main.literature}</option>
              <option value="3">{lang[til].main.era}</option>
              <option value="4">{lang[til].main.independence}</option>
            </select>
            <select name="author_id">
              {data.length &&
                data.map((e) => (
                  <option value={e.id}>
                    {e.first_name} {e.last_name}
                  </option>
                ))}
            </select>
            <textarea
              type="text"
              name="description"
              placeholder={lang[til].addbook.desc}
            />
            <button type="submit">{lang[til].addbook.create}</button>
          </form>
        </div>
      </div>
    </div>
  );
};

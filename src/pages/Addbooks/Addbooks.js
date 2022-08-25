import "./addbooks.css";
import axios from "axios";
import { useAuth } from "../../hooks/useAuth";
import { useEffect, useState } from "react";

export const Addbooks = () => {
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
          <h1>Add books</h1>
          <form onSubmit={handleAddBooks}>
            <input
              className="form_img"
              type="file"
              name="image"
              placeholder="Upload image"
              aria-label="add image"
            />
            <input type="text" name="title" placeholder="Title" />
            <input type="number" name="page" placeholder="page" />
            <input type="number" name="year" placeholder="Year" />
            <input type="number" name="price" placeholder="Price" />
            <select name="genre_id" onClick={selectClick}>
              <option value="1">Temuriylar davri</option>
              <option value="2">Jadid adabiyoti</option>
              <option value="3">Sovet Davri</option>
              <option value="4">Mustaqillik davri</option>
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
              placeholder="Description"
            />
            <button type="submit">Create</button>
          </form>
        </div>
      </div>
    </div>
  );
};

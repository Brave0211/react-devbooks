import "./addauthor.css";
import axios from "axios";
import { useAuth } from "../../hooks/useAuth";

export const Addauthor = () => {
  const { token } = useAuth();

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
          <h1>Add author</h1>
          <form onSubmit={handleAddAuthor}>
            <input
              className="form_img"
              type="file"
              name="image"
              placeholder="Upload image"
              aria-label="add image"
            />
            <input type="text" name="first_name" placeholder="First name" />
            <input type="text" name="last_name" placeholder="Last name" />
            <input
              type="number"
              name="date_of_birth"
              placeholder="Date of birth"
            />
            <input
              type="number"
              name="date_of_death"
              placeholder="Date of death"
            />
            <select name="genre_id">
              <option value="1">Temuriylar davri</option>
              <option value="2">Jadid adabiyoti</option>
              <option value="3">Sovet Davri</option>
              <option value="4">Mustaqillik davri</option>
            </select>
            <input type="text" name="country" placeholder="Country" />
            <textarea type="text" name="bio" placeholder="Bio" />
            <button type="submit">Create</button>
          </form>
        </div>
      </div>
    </div>
  );
};

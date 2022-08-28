import "./my.css";
import User from "../../assets/images/user.png";
import Camera from "../../assets/images/Group.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../../hooks/useAuth";
import { lang } from "../../lang/lang";
import { LangContext } from "../../context/LangContext";
import { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../../context/Theme.Theme";

export const My = () => {
  const {theme} = useContext(ThemeContext)
  const { lang: til } = useContext(LangContext);
  const { token } = useAuth();
  const [my, setMy] = useState([]);

  useEffect(() => {
    axios
      .get("https://book-service-layer.herokuapp.com/user/me", {
        headers: {
          Authorization: token.token,
        },
      })
      .then((res) => setMy(res.data))
      .catch((err) => console.log(err));
  });
  const handleMy = (evt) => {
    evt.preventDefault();
    const formData = new FormData();
    const [image, first_name, last_name, phone] = evt.target.elements;
    formData.append("first_name", first_name.value);
    formData.append("last_name", last_name.value);
    formData.append("phone", phone.value);
    formData.append("image", image.files[0]);
    axios
      .put("https://book-service-layer.herokuapp.com/user/account", formData, {
        headers: {
          Authorization: token.token,
        },
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <div id={theme}>
      <div className="row" style={{ paddingTop: "43px", paddingLeft: "92px" }}>
        <div className="col-4"></div>
        <div className="col-8">
          <h2 className="my_title">My profile</h2>
          <form className="my_form" onSubmit={handleMy}>
            <Label>
              <img
                defaultValue={my.image}
                className="my_img"
                src={User}
                alt="user-me"
                width={175}
                height={175}
              />
              <img
                className="my_btn-img"
                src={Camera}
                alt="..."
                width={59}
                height={43}
              />
              <Input type="file" name="image" />
            </Label>
            <label className="my_label fname">
              {lang[til].settings.first}
              <input
                className="my_input"
                defaultValue={my.first_name}
                type="text"
                name="first_name"
              />
            </label>
            <label className="my_label lname">
              {lang[til].settings.last}
              <input
                className="my_input"
                defaultValue={my.last_name}
                type="text"
                name="last_name"
              />
            </label>
            <label className="my_label phone">
              {lang[til].settings.phone}
              <input
                className="my_input"
                defaultValue={my.phone}
                type="text"
                name="phone"
              />
            </label>
            <button className="my_form-btn" type="submit">
              {lang[til].settings.save}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const Input = styled.input`
  display: none;
`;

const Label = styled.label`
  position: absolute;
  top: 100px;
  left: 100px;
  cursor: pointer;
`;

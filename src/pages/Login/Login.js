import "./login.css";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import React, { useContext } from "react";
import { AuthContext } from "../../context/Authcontext";
import Loginimg from "../../assets/images/register.png"

export const Login = () => {
  const { setToken } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    const formData = new FormData();
    const [first_name, last_name, phone, email, password] = evt.target.elements;
    formData.append("first_name", first_name.value);
    formData.append("last_name", last_name.value);
    formData.append("phone", phone.value);
    formData.append("email", email.value);
    formData.append("password", password.value);
    axios
      .post("https://book-service-layer.herokuapp.com/user/register", formData)
      .then((data) => {
        if (data.data) {
          setToken(data.data);
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="sign row">
      <div className="sign_left col-6">
        <img src={Loginimg} alt="..." width={500} height={500} />
      </div>
      <div className="col-6 sign_content">
        <h2 className="sign__title">Sign up</h2>
        <span className="sign__txt">Already have an account?</span>
        <NavLink to="/">Sign in</NavLink>
        <form onSubmit={(evt) => handleFormSubmit(evt)} className="sign__form">
          <input
            type="text"
            placeholder="First name"
            aria-label="First name"
            autoComplete="off"
            name="first_name"
          />
          <input
            type="text"
            placeholder="Last name"
            aria-label="Last name"
            autoComplete="off"
            name="last_name"
          />
          <input
            type="number"
            placeholder="Phone"
            aria-label="Phone"
            autoComplete="off"
            name="phone"
          />
          <input
            type="email"
            placeholder="Email"
            aria-label="Email"
            autoComplete="off"
            name="email"
          />
          <input
            type="password"
            placeholder="Password"
            aria-label="Password"
            autoComplete="off"
            name="password"
          />
          <button type="submit">Next step</button>
        </form>
      </div>
    </div>
  );
};

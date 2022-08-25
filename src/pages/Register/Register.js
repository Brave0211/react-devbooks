import "./register.css";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import React, { useContext } from "react";
import { AuthContext } from "../../context/Authcontext";
import Registr from "../../assets/images/login.png"

export const Register = () => {
  const { setToken } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    const formData = new FormData();
    const [email, password] = evt.target.elements;
    formData.append("email", email.value);
    formData.append("password", password.value);
    axios
      .post("https://book-service-layer.herokuapp.com/user/login", formData)
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
      <div className="col-6 sign_left">
        <img src={Registr} alt="..." width={500} height={500} />
      </div>
      <div className="col-6 sign_contet">
        <h2 className="sign__title">Sign in</h2>
        <span className="sign__txt">Already have an account?</span>
        <NavLink to="sign-up">Sign up</NavLink>
        <form onSubmit={(evt) => handleFormSubmit(evt)} className="sign__form">
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

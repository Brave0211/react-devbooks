import "./security.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../../hooks/useAuth";
import styled from "styled-components";
import { lang } from "../../lang/lang";
import { LangContext } from "../../context/LangContext";
import { useContext } from "react";

export const Security = () => {
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
  const handleSecurity = (evt) => {
    evt.preventDefault();
    const [email, currentPassword, newPassword, confirmPassword] =
      evt.target.elements;
      console.log(currentPassword.value);
      if(newPassword.value === confirmPassword.value){
        axios
          .put(
            "https://book-service-layer.herokuapp.com/user/security",
            {
              email: email.value,
              currentPassword: currentPassword.value,
              newPassword: newPassword.value,
            },
            {
              headers: {
                Authorization: token.token,
              },
            }
          )
          .then((res) => console.log(res.data))
          .catch((err) => console.log(err));
      }
  };

  return (
    <div
      style={{
        width: "100vh",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "auto",
        marginBottom: "auto",
      }}
    >
      <div style={{ width: "708px" }}>
        <h2 className="my_title">{lang[til].settings.change}</h2>
        <form className="my_form" onSubmit={handleSecurity}>
          <label className="my_label fname">
            {lang[til].settings.email}
            <input
              className="my_input"
              defaultValue={my.email}
              type="text"
              name="email"
            />
          </label>
          <label className="my_label lname">
            {lang[til].settings.pass}
            <input
              className="my_input"
              type="password"
              name="currentPassword"
            />
          </label>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Label>
              {lang[til].settings.newpass}
              <Input type="password" name="newPassword" />
            </Label>
            <Label>
              {lang[til].settings.conpass}
              <Input type="password" name="confirmPassword" />
            </Label>
          </div>
          <button
            className="my_form-btn"
            style={{ marginRight: "0" }}
            type="submit"
          >
            {lang[til].settings.save}
          </button>
        </form>
      </div>
    </div>
  );
};

const Input = styled.input`
  width: 340px;
  margin-top: 7px;
  margin-bottom: 3px;
  padding: 12px 20px;
  background-color: #f3f6f9;
  border: none;
  border-radius: 4px;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 43px;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  color: #464e5f;
`;

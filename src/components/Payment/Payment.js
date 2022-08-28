import "./payment.css";
import styled from "styled-components";
import { lang } from "../../lang/lang";
import { useContext } from "react";
import { LangContext } from "../../context/LangContext";
import { ThemeContext } from "../../context/Theme.Theme";
import ReactSwitch from "react-switch";
export const Payment = () => {
  const { lang: til, setLang } = useContext(LangContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div id={theme} className="main">
      <Wrapper>
        <Title>{lang[til].settings.settings}</Title>
        <form>
          <Label>
            {lang[til].settings.lang}
            <Select
              defaultValue={til}
              onChange={(evt) => setLang(evt.target.value)}
            >
              <option value="uz">Uzbek</option>
              <option value="en">English</option>
              <option value="re">Russian</option>
            </Select>
          </Label>
          <LabelDef>
            {lang[til].settings.theme}
            <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
          </LabelDef>
          <Button type="submit">{lang[til].settings.save}</Button>
        </form>
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
  width: 708px;
  margin-top: 86px;
  margin-left: auto;
  margin-right: auto;
`;

const Title = styled.h2`
  margin-top: 0;
  margin-bottom: 32px;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  color: #212121;
`;

const Label = styled.label`
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  color: #464e5f;
  &:after {
    display: block;
    margin-bottom: 10px;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: #b5b5c3;
    opacity: 0.8;
    content: "Please enter your first name.";
  }
`;

const LabelDef = styled.label`
  display: flex;
  flex-direction:column;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  color: #464e5f;
`;

const Select = styled.select`
  width: 708px;
  margin-top: 7px;
  margin-bottom: 3px;
  padding: 12px 20px;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: #464e5f;
  background-color: #f3f6f9;
  border: none;
  border-radius: 4px;
`;

const Button = styled.button`
  position: relative;
  z-index: 1;
  display: block;
  margin-top: 72px;
  margin-left: auto;
  padding: 12px 20px 11px 26px;
  font-weight: 600;
  font-size: 13px;
  line-height: 20px;
  color: #ffffff;
  background-color: #152540;
  border: none;
  border-radius: 4px;
  &:before {
    position: absolute;
    z-index: 1;
    width: 708px;
    height: 2px;
    top: -32px;
    left: -534px;
    color: #ecf0f3;
    background-color: #ecf0f3;
    content: "";
  }
`;

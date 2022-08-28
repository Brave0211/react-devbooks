import "./settings.css";
import { NavLink, Outlet } from "react-router-dom";
import { lang } from "../../lang/lang";
import { useContext } from "react";
import { LangContext } from "../../context/LangContext";
import { ThemeContext } from "../../context/Theme.Theme";
export const Settings = () => {
  const { lang: til } = useContext(LangContext);
  const { theme } = useContext(ThemeContext);
  return (
    <div id={theme}>
      <div className="setting">
        <div className="setting_wrapper">
          <div className="setting_wrapper-link">
            <NavLink
              className={({ active }) =>
                active ? "setting_active" : "setting-actives"
              }
              to=""
            >
              <span className="setting_in-link">1</span>
              {lang[til].settings.my}
            </NavLink>
          </div>
          <div className="setting_wrapper-link">
            <NavLink
              className={({ active }) =>
                active ? "setting_active" : "setting-actives"
              }
              to="security"
            >
              <span className="setting_in-link">2</span>
              {lang[til].settings.security}
            </NavLink>
          </div>
          <div className="setting_wrapper-link">
            <NavLink
              className={({ active }) =>
                active ? "setting_active" : "setting-actives"
              }
              to="payment"
            >
              <span className="setting_in-link">3</span>
              {lang[til].settings.settings}
            </NavLink>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

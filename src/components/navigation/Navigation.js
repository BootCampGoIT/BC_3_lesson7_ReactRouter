import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import mainRoutes from "../../routes/mainRoutes";
import { list, listItem, link, activeLink } from "./Navigation.module.css";

const Navigation = () => {
  const location = useLocation();
  return (
    <ul className={list}>
      {mainRoutes.map(({ path, name, exact }) => (
        <li className={listItem} key={path}>
          <NavLink
            to={{
              pathname: path,
              state: { from: location.pathname },
            }}
            exact={exact}
            className={link}
            activeClassName={activeLink}>
            {name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Navigation;

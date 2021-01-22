import React from "react";
import coursesRoutes from "../../../routes/coursesRoutes";
import { NavLink, useRouteMatch } from "react-router-dom";
import { list, listItem, link, activeLink } from "./Courses.module.css";

const CoursesNavigation = () => {
  const match = useRouteMatch();
  return (
    <ul className={list}>
      {coursesRoutes.map(({ path, exact, name }) => (
        <li className={listItem} key={path}>
          <NavLink
            to={`${match.url}${path}`} //"/list"
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

export default CoursesNavigation;

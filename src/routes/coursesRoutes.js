import { lazy } from "react";

const coursesRoutes = [
  {
    path: "/list",
    name: "List",
    exact: true,
    component: lazy(() =>
      import(
        "../components/courses/coursesList/CoursesList" /* webpackChunkName: "CoursesLIst"*/
      )
    ),
  },
  {
    path: "/create",
    name: "Create",
    exact: true,
    component: lazy(() =>
      import(
        "../components/courses/coursesForm/CoursesForm" /* webpackChunkName: "CoursesForm"*/
      )
    ),
  },
];

export default coursesRoutes;

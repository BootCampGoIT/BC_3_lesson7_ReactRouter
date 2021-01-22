import { lazy } from "react";

const mainRoutes = [
  {
    path: "/",
    name: "Home",
    exact: true,
    component: lazy(() =>
      import("../pages/HomePage" /* webpackChunkName: "HomePage"*/)
    ),
  },
  {
    path: "/about",
    name: "About",
    exact: true,
    component: lazy(() =>
      import("../pages/AboutPage" /* webpackChunkName: "AboutPage"*/)
    ),
  },
  {
    path: "/courses",
    name: "Courses",
    exact: false,
    component: lazy(() =>
      import("../pages/CoursesPage" /* webpackChunkName: "CoursesPage"*/)
    ),
  },
  {
    path: "/signin",
    name: "SignIn",
    exact: true,
    component: lazy(() =>
      import("../pages/SingInPage" /* webpackChunkName: "SingInPage"*/)
    ),
  },
  {
    path: "/signup",
    name: "SignUp",
    exact: true,
    component: lazy(() =>
      import("../pages/SignUpPage" /* webpackChunkName: "SignUpPage"*/)
    ),
  },
];

export default mainRoutes;

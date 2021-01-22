import React, { useState, useEffect } from "react";
import CoursesContent from "./coursesContent/CoursesContent";
import CoursesNavigation from "./coursesNavigation/CoursesNavigation";
import { useHistory, useRouteMatch, useLocation } from "react-router-dom";

const Courses = () => {
  const [from, setFrom] = useState("");
  const history = useHistory();
  const match = useRouteMatch();
  const location = useLocation();

  useEffect(() => {
    location.state && setFrom(location.state.from);
  }, [location]);

  useEffect(() => {
    history.push(`${match.url}/list`);
  }, [history, match.url]);

  const onHandleGoBack = () => {
    history.push(from);
  };

  return (
    <>
    <p>{from}</p>
      <button type='button' onClick={onHandleGoBack}>
        GoBack
      </button>
      <div style={{border: "1px solid black", backgroundColor: "grey"}}>
        <CoursesNavigation />
        <CoursesContent onHandleGoBack={onHandleGoBack} />
      </div>
    </>
  );
};

export default Courses;

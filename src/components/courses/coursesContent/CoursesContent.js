import React, { Suspense } from "react";
import coursesRoutes from "../../../routes/coursesRoutes";
import { Switch, Route, useRouteMatch } from "react-router-dom";

const CoursesContent = () => {
  const match = useRouteMatch();
  return (
    <>
    
      <Suspense fallback={<h2>Loading ...</h2>}>
        <Switch>
          {coursesRoutes.map(({ path, exact, component }) => (
            <Route
              path={`${match.url}${path}`}
              exact={exact}
              key={path}
              component={component}
            />
          ))}
        </Switch>
      </Suspense>
    </>
  );
};

export default CoursesContent;

import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import DefaultPage from "../../pages/DefaultPage";
import mainRoutes from "../../routes/mainRoutes";

const Content = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        {mainRoutes.map(({ path, exact, component: MyComponent }) => (
          // {mainRoutes.map(({ path, exact, component }) => (
          //   <Route path={path} exact={exact} key={path} component={component} />
          <Route
            path={path}
            exact={exact}
            key={path}
            render={() => <MyComponent />}
          />
        ))}
        <Route component={DefaultPage} />
      </Switch>
    </Suspense>
  );
};

export default Content;

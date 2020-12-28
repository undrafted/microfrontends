import React, { lazy, Suspense, useState, useEffect } from "react";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";

import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

import Header from "./Header";
import ProgressBar from "./ProgressBar";

const MarketingLazy = lazy(() => import("./MarketingApp"));
const AuthLazy = lazy(() => import("./AuthApp"));
const DashboardLazy = lazy(() => import("./DashboardApp"));

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});

const history = createBrowserHistory();

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    if (isSignedIn) {
      history.push("/dashboard");
    }
  }, [isSignedIn]);

  return (
    <StylesProvider generateClassName={generateClassName}>
      <Router history={history}>
        <div>
          <Header
            isSignedIn={isSignedIn}
            onSignOut={() => setIsSignedIn(false)}
          />
          <Suspense fallback={<ProgressBar />}>
            <Switch>
              <Route path="/auth">
                <AuthLazy onSignIn={() => setIsSignedIn(true)} />
              </Route>
              <Route path="/dashboard">
                {!isSignedIn && <Redirect to="/" />}
                <DashboardLazy />
              </Route>
              <Route path="/" component={MarketingLazy} />
            </Switch>
          </Suspense>
        </div>
      </Router>
    </StylesProvider>
  );
};

export default App;

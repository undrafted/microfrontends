import React, { lazy, Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

import Header from "./Header";

const MarketingLazy = lazy(() => import("./MarketingApp"));
const AuthLazy = lazy(() => import("./AuthApp"));

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});

const App = () => (
  <StylesProvider generateClassName={generateClassName}>
    <BrowserRouter>
      <div>
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/auth" component={AuthLazy} />
            <Route path="/" component={MarketingLazy} />
          </Switch>
        </Suspense>
      </div>
    </BrowserRouter>
  </StylesProvider>
);

export default App;

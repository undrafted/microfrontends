import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

import Header from "./Header";
import MarketingApp from "./MarketingApp";
import AuthApp from "./AuthApp";

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});

const App = () => (
  <StylesProvider generateClassName={generateClassName}>
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/auth" component={AuthApp} />
          <Route path="/" component={MarketingApp} />
        </Switch>
        <MarketingApp />
      </div>
    </BrowserRouter>
  </StylesProvider>
);

export default App;

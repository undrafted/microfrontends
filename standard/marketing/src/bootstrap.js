import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { createMemoryHistory, createBrowserHistory } from "history";

const mount = (el, { onNavigate, defaultHistory } = {}) => {
  const history = defaultHistory || createMemoryHistory();

  if (onNavigate) {
    history.listen(onNavigate);
  }
  ReactDOM.render(<App history={history} />, el);

  return {
    onHostNavigate: ({ pathname: nextPathname }) => {
      if (history.location.pathname !== nextPathname) {
        history.push(nextPathname);
      }
    },
  };
};

// for development in isolation
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#marketing-dev-root");

  if (devRoot) {
    mount(devRoot, { defaultHistory: createBrowserHistory() });
  }
}

// for container's consumption
export { mount };

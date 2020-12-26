import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

const mount = (el) => {
  ReactDOM.render(<App />, el);
};

// for development in isolation
if (process.env.NODE_ENV === "development") {
  const root = document.querySelector("#marketing-dev-root");

  if (root) {
    mount(root);
  }
}

// for container's consumption
export { mount };

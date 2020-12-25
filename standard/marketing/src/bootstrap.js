import React from "react";
import ReactDOM from "react-dom";

const mount = (el) => {
  ReactDOM.render(<h1>Hi there from Marketing!</h1>, el);
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

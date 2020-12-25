import faker from "faker";

const mount = (el) => {
  let products = "";

  for (let i = 0; i < 3; i++) {
    products += `<div>${faker.commerce.productName()}</div>`;
  }

  el.innerHTML = products;
};

// mount if MFE is used in isolation/development (not in a host)
if (process.env.NODE_ENV === "development") {
  // assuming id #dev-products is only used in this project for isolated development
  const el = document.querySelector("#dev-products");

  if (el) {
    mount(el);
  }
}

export { mount };

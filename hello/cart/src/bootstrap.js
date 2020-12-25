import faker from "faker";

const mount = (el) => {
  const cartText = `<div>You have ${faker.random.number()} items in your cart!</div>`;

  el.innerHTML = cartText;
};

// mount if MFE is used in isolation/development (not in a host)
if (process.env.NODE_ENV === "development") {
  // assuming id #dev-cart is only used in this project for isolated development
  const el = document.querySelector("#dev-cart");

  if (el) {
    mount(el);
  }
}

export { mount };

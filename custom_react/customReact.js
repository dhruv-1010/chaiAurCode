function customRender(reactElement, container) {
  const domElement = document.createElement(reactElement.type);
  domElement.textContent = reactElement.children;
  //   domElement.setAttribute("href", reactElement.props.href);
  //   domElement.setAttribute("target", reactElement.props.target);
  for (const prop in reactElement.props) {
    if (prop === "children") continue;
    domElement.setAttribute(prop, reactElement.props[prop]);
  }
  container.appendChild(domElement);
}

const reactElement = {
  type: "a",
  props: {
    href: "https://www.google.com",
    target: "_blank",
  },
  children: "Click me to visit google",
};
// this is the node of a react element
// react creates a tree everytime it sees a new element or add it to previous element this is the
const mainContainer = document.getElementById("root");
customRender(reactElement, mainContainer);
// how does this customRender
// this is how custom react works behind the scenes

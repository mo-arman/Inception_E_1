import React from "react";
import ReactDOM from "react-dom/client";


// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello Namaste From React"
// );

// // nested react element
// const heading2 = React.createElement("div", { id: "parent" }, 
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "I'm a h1 tag"),
//     React.createElement("h2", {}, "I'm a h2 tag")
//     ]),
//     React.createElement("div", { id: "child2" }, [
//         React.createElement("h1", {}, "I'm a h1 tag"),
//         React.createElement("h2", {}, "I'm a h2 tag")
//         ]),

// )
// console.log(heading2); // object
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading2);



//React.createElement => object => HTMLElement(rendered to the DOM)

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello Namaste From React"
);

console.log(heading); // object

// JSX - HTML-like syntax
// JSX (Transpiled before it reaches the JS) - Parcel - Babel
const jsxHeading = (
  <h1 id="heading" className="heading">
    Arman React Using JSX
  </h1>
);

console.log(jsxHeading); // object

// React Component
// 1. Class based component => OLD way
class Title extends React.Component {
  render() {
    return (
      <h1 id="heading" className="heading">
        Arman React Using JSX
      </h1>
    );
  }
}
// 2. Function based component => NEW way
function Title() {
  return (
    <h1 id="heading" className="heading">
      Arman React Using JSX
    </h1>
  );
}
// 3. Arrow function based component => NEW way

const fn = () => true;

const fn2 = () => {
  return true;  
}

const HeadingComponent2 = () => {
  return(
    <div>
      <h1>Namaste React Functional Component</h1>
      <h2>Namaste React Functional Component</h2>
      <h3>Namaste React Functional Component</h3>
      <h4>Namaste React Functional Component</h4>
      <h5>Namaste React Functional Component</h5>
      <h6>Namaste React Functional Component</h6>
    </div>
  )
}
const HeadingComponent = () => {
  return (
    <div>
      {HeadingComponent2()}
      <h1>Namaste React Functional Component</h1>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);


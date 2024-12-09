import React from "react";
import ReactDOM from "react-dom/client";
// React.createElement => React Element (Js Object) => HTML element Render.

// Jsx is not HTML in JS
// JSX is just like HTML/XML syntax.
//Jsx code is transpiled before going to js engine - Parcel - Babel.
// Jsx =>Babel transpiles it to React.createElement => React Element (Js Object) => HTML element Render.

// React Element
const elem = <span>React Element </span>
const Title = () =>(
  <h1 className="Header" tabIndex={1}>
    {elem}
    Namaste React using jsx🚀
  </h1>
);
  

const number = 10000;
// elements uppar hai vo hai    element small case

// React Componens----> function that returns JSX code or React Element ----> Capitalized

//1. Class Based Component = OLD
//2. Functional Component = NEW
// console.log(jsxHeading);

// below is the example of component composition
const HeadingComponent = () => 
  (
  
  <div id="container">
    
    {Title()}// functioncall
    <Title />
    <Title></Title>
    <h2>{number}</h2>
      <h1 className="Heading">Namaste React using Function Component🚀</h1>
    </div>
  
);

// both are same.

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);

import React from "react";
import ReactDOM from "react-dom/client";
//react Element => React Element =>  object=>HtmlElement(render)

// create using core react

//JSX (transpiled before it reaches the js engine) => transpiling is done by parcel-Babel(package)=> takes the code and converts it into js engine
// JSX=>rect.createelement => reactElement-JS Object => HTMLElement(render)

//react element
// const heading = <h1 className="head">luffy is coding</h1>; // create using jsx

//React Component
//1 -> class based component - OLD way
//2 -> function based component-modern way

//React function component
// const HeadingComponent = () =>{
//   return <h1>luffy functional componenet</h1>

// }

const Title = () => (
  <h1 className="head" tabIndex="5">
    whats up react
  </h1>
);
const data = 1000;
//component composition
const HeadingComponent2 = () => (
  <div id="container">
    {Title()}
    <Title />
    <Title></Title>
    <h1 className="heading"> luffy functional componenet</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent2 />); // a way to render functional components

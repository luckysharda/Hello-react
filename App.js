{
  /* <div id="parent">
    <div id="child">
        <h1>I'm h1 tag</h1>
        <h2
    </div>
</div>

ReactElement(object) => HTML(Browser Understand)


 */
}

const heading = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag"),
  ])
);

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "hello from React"
// );
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);

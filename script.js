const ReactElement = React.createElement("h1", { id: "text-heading" }, "This is headinggggg");
console.log(ReactElement); // it will print object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(ReactElement);  // this render method takes the object and convert it into html elements
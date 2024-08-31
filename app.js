// const heading = React.createElement("h1", { id:'headingid' }, "Hello, from React");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
// console.log(heading)


// suppose the following structure
/* <div id="parent">
    <div id="div2">
        <h1>Thid is h1</h1>
        <h2>This is h2</h2>
    </div> */

const heading = React.createElement("div", { id:'parent' }, 
                React.createElement("div", { id:'div2' },
                [ React.createElement("h1", {}, "This is h1"), 
                  React.createElement("h2", {}, "This is h2")
                ])
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
console.log(heading)
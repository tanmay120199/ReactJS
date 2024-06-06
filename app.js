// const heading = React.createElement("h1", {id:"heading"}, "Hello from React!")

import React from "react";
import ReactDOM from "react-dom/client";

const parent=React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"child"},
        [
            React.createElement("h1",{},"I am a h1 tag"),
            React.createElement("h2",{},"I am a h2 tag"),
        ]
    )
)

//JSX -> Gets converted to React.CreateElement by Babel -> which is then converted to DOM using react

const jsxHeading=<h1 id="heading" className="head">Namaste React </h1>;

const TitleComponent=()=>(
    <h1 className="title">React Title</h1>
);

const number=1000;

const title=<h1>JSX Element Title</h1>;

//React Functional Component - returns jsx or react element
const HeadingComponent=()=>(
    <div id="container">
        <TitleComponent />
        <h1 className="heading">Namaste React</h1>
        {title}
        {number}
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
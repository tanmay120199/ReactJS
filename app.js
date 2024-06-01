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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
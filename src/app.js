// const heading = React.createElement("h1", {id:"heading"}, "Hello from React!")

import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

//Parent Component
const AppLayout=()=>(
    <div className="app">
        <Header/>
        <Body/>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
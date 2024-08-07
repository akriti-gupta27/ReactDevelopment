import React from "react";
import ReactDOM from "react-dom/client";

//const heading = React.createElement("h1", {id : "heading", xyz: "abc"}, "Hello World from React!");
const parent = React.createElement("div", {id : "parent"}, 
    [React.createElement("div", {id:"child"},
    [React.createElement("h1", {}, " I am H1 Tag 1"), 
    React.createElement("h2", {}, "I am h2 Tag")]),
    React.createElement("div", {id:"child2"},
    [React.createElement("h1", {}, " I am H1 Tag"), 
    React.createElement("h2", {}, "I am h2 Tag")])]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
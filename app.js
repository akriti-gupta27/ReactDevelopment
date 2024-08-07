import React from "react";
import ReactDOM from "react-dom/client";

//React Element

//const heading = React.createElement("h1" , {id:"heading"}, "Namaste React");

const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(heading);


//JSX heading

const jsxHeading =<h1 id="heading" className="head">Namaste using JSX</h1>;

root.render(jsxHeading);

//React Components

const Title = () => (
    <h1> Hi There</h1>
);

// const HeadingComponent = () =>{
//     return <h1> Hello </h1>
// };

const HeadingComponent = () => (
    <div id="container">
        <Title />
        {5*4}
        <h1>Hello</h1>
    </div>
);


root.render(<HeadingComponent/>);
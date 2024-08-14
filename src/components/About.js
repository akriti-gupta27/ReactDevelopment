import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component{
    constructor(props){
        super(props);
        console.log("parent constrcutor");
    }

    componentDidMount(){
        console.log("Parent did mount");
    }


    render(){
        return (
            <div>
                <h1>About</h1>
                <h2>This is Akriti's Food App</h2>
                {/* <User name ={"Akriti Gupta (FUnctionalComp)"}/> */}
                <UserClass name ={"Akriti Gupta(ClassComp)"}/>
            </div>
        );
    }
}

export default About;
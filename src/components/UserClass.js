import React from "react" ;

class UserClass extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            count :0
        }
    }

    componentDidMount(){
        console.log("child component did mount");
        
    }

    render(){
        return <div className="user-card">
            <h1>Count : {this.state.count}</h1>
            <button onClick={() =>{
                this.setState({
                    count : this.state.count +1
                })
            }}>Count Increase</button>
        <h2>Name :{this.props.name}</h2>
        <h3>Location : Bengaluru</h3>
        <h4>Contact :1234</h4>
        </div>
    }
}

export default UserClass;
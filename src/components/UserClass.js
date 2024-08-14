import React from "react" ;

class UserClass extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            userInfo:{
                name: "dumdum",
                location:"default",
                avatar_url:"http://dummy-photo.com"
            }
        }
    }

    async componentDidMount(){
        console.log("child component did mount");  
        const data = await fetch("https://api.github.com/users/akriti-gupta27");
        const json = await data.json();    
        
        this.setState({
            userInfo: json
        })
    }

    componentDidUpdate(){
        console.log("Inside component did update");
    }

    componentWillUnmount(){
        console.log("Inside unmount");
    }

    render(){
        return <div className="user-card">   
        <img src={this.state.userInfo.avatar_url}/>         
        <h2>Name :{this.state.userInfo.login}</h2>
        <h3>Url : {this.state.userInfo.url}</h3>
        <h4>Type :{this.state.userInfo.type}</h4>
        </div>
    }
}

export default UserClass;
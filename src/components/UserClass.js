import React from "react";

class UserClass extends React.Component{
    //Constructor for props
    constructor(props){
        super(props);

        this.state={
            userInfo:{
                name:"Dummy",
                location:"Default",
                avatar_url:"",
            },
        };
        console.log('child const');
    }

    async componentDidMount(){
        console.log('child did mount')
        const data=await fetch("https://api.github.com/users/tanmay120199");
        const json=await data.json();
        this.setState({
            userInfo:json,
        });
        console.log('json',json)
    }

    componentDidUpdate(){
        console.log("Component did update");
    }

    componentWillUnmount(){}

    render(){
        const {name, location, contact}=this.props;
        return (
            <div className="user-card">
                <img src={this.state.userInfo.avatar_url}></img>
                <h2>Name:{this.state.userInfo.login}</h2>
                <h3>Location: {this.state.userInfo.location}</h3>
                <h4>Contact: {contact}</h4>
            </div>
        );
    }
};
export default UserClass;
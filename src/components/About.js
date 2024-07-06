import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component{
    constructor(props){
        super(props);
        console.log('parent const');
    }

    componentDidMount(){
        console.log('parent did mount')
    }

    render(){
        console.log('parent render');
        return (
            <div>
            <h1>About</h1>
            <h2>Content for "About Us"</h2>
            <User name={"Tan (function)"} location={"Mars"} contact={"@tantheta"}/>
            {/* <UserClass name={"Tan (class)"} location={"Mars"} contact={"@tantheta"}/> */}
        </div>
        );
    };
};

// const About =()=>{
//     return (
//         <div>
//             <h1>About</h1>
//             <h2>Content for "About Us"</h2>
//             <User name={"Tan (function)"} location={"Mars"} contact={"@tantheta"}/>
//             <UserClass name={"Tan (class)"} location={"Mars"} contact={"@tantheta"}/>
//         </div>
//     );
// };

export default About;
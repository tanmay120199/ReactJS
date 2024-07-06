import { useState, useEffect } from "react";

const User=(props)=>{
    const {name, location, contact}=props;
    const [count]=useState(0);
    useEffect(()=>{
        return(()=>{
            console.log('effect after unmount')
        });
    })
    return (
        <div className="user-card">
            <h1>Count:{count}</h1>
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h4>Contact: {}contact</h4>
        </div>
    );
};

export default User;
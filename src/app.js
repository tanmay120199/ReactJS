// const heading = React.createElement("h1", {id:"heading"}, "Hello from React!")

import React, {lazy,Suspense, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
// import Grocery from "./components/Grocery";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import { useState, useEffect } from "react";
import UserContext from "./utils/UserContext";

const Grocery=lazy(()=>import("./components/Grocery"));

//Parent Component
const AppLayout=()=>{
    const [userInfo,setUserInfo]=useState();

    //authentication
    useEffect(()=>{
        //api call is made and user is received
        const data={
            name:"Tanmay",
        };
        setUserInfo(data.name);
    },[]);
    return (
        <UserContext.Provider value={{loggedInUser:userInfo, setUserInfo}}>
            <div className="app">
                <UserContext.Provider value={{loggedInUser:"Ambani"}}><Header/></UserContext.Provider>
            
            <Outlet/>
        </div>
        </UserContext.Provider>
    );
}

const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout />,
        children:[
            {
                path:"/",
                element:<Body />,
            },
            {
                path:'/about',
                element:<About />,
            },
            {
                path:'/contact',
                element:<Contact />,
            },
            {
                path:'/grocery',
                element:<Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>,
            },
            {
                path:'/restaurants/:resId',
                element:<RestaurantMenu />
            },
        ],
        errorElement:<Error />
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
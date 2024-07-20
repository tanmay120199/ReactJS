import { useEffect, useState } from "react";
// import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom";
import useRestaurant from "../utils/useRestaurant"
import {useDispatch} from "react-redux";
import {addItem} from "../utils/cartSlice";

const RestaurantMenu = () => {
    //Custom Hook
    const resInfo=useRestaurant();

    const params=useParams();
    console.log('params',params)

    const dispatch=useDispatch();

    const handleAddItem =(item)=>{
        dispatch(addItem(item));
    };

    return resInfo===null? (<Shimmer />) : (
        <div className="menu">
            <h1>{resInfo[0].info.name}</h1>
            <h2>Menu</h2>
            <ul>
                <li>Biryani</li>
                <li>Burgers</li>
                <li>Diet Coke</li>
            </ul>
            <button className="p-2 rounded-lg bg-black text-white shadow-lg" onClick={()=>handleAddItem("pizza")}>Add +</button>
        </div>
    );
};

export default RestaurantMenu;
import { useEffect, useState } from "react";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom";

const RestaurantMenu = () => {
    const [resInfo, setResInfo]=useState(resList);

    const params=useParams();
    console.log('params',params)

    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu=()=>{
        console.log('resInfo',resInfo)
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
        </div>
    );
};

export default RestaurantMenu;
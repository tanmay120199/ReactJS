import { useState, useEffect } from "react";
import resList from "../utils/mockData";

const useRestaurant=()=>{
    const [resInfo, setResInfo]=useState(resList);

    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu=()=>{
        console.log('resInfo',resInfo)
    };

    return resInfo;
};

export default useRestaurant;
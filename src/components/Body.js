import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import {useState} from "react";


const Body=()=>{
    const [restArray, setRestArray]=useState(resList);
    const handleClick=()=>{
        // console.log('clicked',restArray)
        const filteredRestArray=resList.filter(rest=>parseFloat(rest.info.rating.aggregate_rating)>=4.0);
        setRestArray(filteredRestArray);
        // console.log('after clicked',restArray)
    };
    return (
    <div className="body">
        <div className="filter">
            <button className="filter-btn" onClick={handleClick}>Top Rated Restaurants</button>
        </div>
        <div className="rest-container">
            {
                restArray.map((restaurant)=>(
                   <RestaurantCard key={restaurant.info.resId} resData={restaurant}/>
                ))
            }
        </div>
    </div>
)};


export default Body;
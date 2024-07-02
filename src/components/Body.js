import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import {useState, useEffect} from "react";
import Shimmer from "./Shimmer";

const Body=()=>{
    const [restArray, setRestArray]=useState(resList);
    const [searchRestArray, setSearchRestArray]=useState(resList);
    const [searchText, setSearchText]=useState("");
    
    // useEffect(()=>{
    //     fetchData();
    // },[]);

    if(restArray.length===0){
        return <Shimmer />;
    }

    const fetchData=async ()=>{
        const data=await fetch("https://www.zomato.com/webroutes/search/home");
        const json=await data.json();
        // //setRestArray(json.data)
        console.log('json',json);
    };
    

    const handleClick=()=>{
        // console.log('clicked',restArray)
        const filteredRestArray=resList.filter(rest=>parseFloat(rest.info.rating.aggregate_rating)>=4.0);
        setRestArray(filteredRestArray);
        // console.log('after clicked',restArray)
    };
    return (
    <div className="body">
        <div className="filter">
            <div className="search">
                <input 
                type="text" 
                className="search-box" 
                value={searchText}
                onChange={(e)=>{
                    setSearchText(e.target.value);
                }}
                />
                <button
                onClick={()=>{
                    const searchFilteredRestaurant=searchRestArray.filter((res)=>{
                        return res.info.name.toLowerCase().includes(searchText.toLowerCase());
                    });
                    console.log('searchFilteredRestaurant',searchFilteredRestaurant)
                    setRestArray(searchFilteredRestaurant);
                }}>Search</button>
            </div>
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
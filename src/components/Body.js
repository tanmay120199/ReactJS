import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
import resList from "../utils/mockData";
import {useState, useEffect, useContext} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body=()=>{
    const [restArray, setRestArray]=useState(resList);
    const [searchRestArray, setSearchRestArray]=useState(resList);
    const [searchText, setSearchText]=useState("");
    const PromotedResCard=withPromotedLabel(RestaurantCard);
    // useEffect(()=>{
    //     fetchData();
    // },[]);

    const {loggedInUser,setUserInfo}=useContext(UserContext);
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

    const onlineStatus=useOnlineStatus();
    if(onlineStatus===false) return <h1>Offline!!</h1>
    return (
    <div className="body">
        <div className="filter">
            <div className="search m-4 p-4">
                <input 
                type="text" 
                className="border border-solid border-black" 
                value={searchText}
                onChange={(e)=>{
                    setSearchText(e.target.value);
                }}
                />
                <button className="px-4 py-2 bg-green-100 m-4 rounded-lg"
                onClick={()=>{
                    const searchFilteredRestaurant=searchRestArray.filter((res)=>{
                        return res.info.name.toLowerCase().includes(searchText.toLowerCase());
                    });
                    console.log('searchFilteredRestaurant',searchFilteredRestaurant)
                    setRestArray(searchFilteredRestaurant);
                }}>Search</button>
                <button className="px-4 py-2 bg-gray-100" onClick={handleClick}>Top Rated Restaurants</button>
            </div>
            <div className="search m-4 p-4 flex items-center">
                <label>Username:</label>
                <input className="border border-black" value={loggedInUser} onChange={(e)=>setUserInfo(e.target.value)} />
            </div>
            
        </div>
        <div className="flex flex-wrap">
            {
                restArray.map((restaurant)=>(
                   <Link to={"/restaurants/" + restaurant.info.resId} key={restaurant.info.resId}>{restaurant.isPromoted?<PromotedResCard resData={restaurant}/>:<RestaurantCard  resData={restaurant}/>}</Link>
                ))
            }
        </div>
    </div>
)};


export default Body;
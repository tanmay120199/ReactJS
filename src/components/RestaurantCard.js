//JS object for inline css-not preferred
// const styleCard={
//     backgroundColor:"#f0f0f0"
// }

import { useContext } from "react";
import UserContext from "../utils/UserContext";

const RestaurantCard=(props)=>{
    const {resData}=props;
    const {loggedInUser}=useContext(UserContext);
    return (
    <div className="m-4 p-4 w-[250px] rounded-lg hover:bg-gray-400">
        <img className="rounded-lg" alt="food-image" src={resData.info.image.url} />
        <h3 className="font-bold py-4 text-lg">{resData.info.name}</h3>
        {/* <h5>{resData.info.cuisine[0]}</h5> */}
        <h5>{resData.info.rating.aggregate_rating}</h5>
        <h5>ETA: 38mins</h5>
        <h5>User:{loggedInUser}</h5>
    </div>
)};

//Higher Order Component(takes RestaurantCard as i/p and returns enhanced RestaurantCard)

export const withPromotedLabel=(RestaurantCard)=>{
    return (props)=>{
        return (
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
                <RestaurantCard {...props}/>
            </div>
        );
    };
};

export default RestaurantCard;
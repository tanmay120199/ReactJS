//JS object for inline css-not preferred
const styleCard={
    backgroundColor:"#f0f0f0"
}

const RestaurantCard=(props)=>{
    const {resData}=props;
    return (
    <div className="res-card" style={styleCard}>
        <img className="res-logo" alt="food-image" src={resData.info.image.url} />
        <h3>{resData.info.name}</h3>
        {/* <h5>{resData.info.cuisine[0]}</h5> */}
        <h5>{resData.info.rating.aggregate_rating}</h5>
        <h5>ETA: 38mins</h5>
    </div>
)};

export default RestaurantCard;
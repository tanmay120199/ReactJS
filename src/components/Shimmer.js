// this is used to show a fake UI till the time the actual UI loads
// we are making use of shimmer UI

const Shimmer=()=>{
    return (
        <div className="shimmer-container">
            <div className="shimmer-card"></div>
            <div className="shimmer-card"></div>
            <div className="shimmer-card"></div>
        </div>
    );
};

export default Shimmer;
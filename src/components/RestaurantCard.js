import { CDN_URL } from "../utils/constants";

const StyleCard = {
    backgroundColor: "#f0f0f0"
}

const RestaurantCard =(props) => {
    const { resData } = props;
    const {cloudinaryImageId, name, cuisines, avgRating, costForTwo } = resData?.data || resData?.info;
    return(
        <div className="m-4 p-4 w-[400px] rounded-lg bg-gray-100 hover:bg-gray-400">
            <img className="rounded-lg" alt="res-logo" src={CDN_URL + cloudinaryImageId}/>
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4>{cuisines.join(", ")} </h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{resData.info.sla.deliveryTime} minutes</h4>
        </div>
    )
};

//Higher order component
//input  - restaurant card => output will be RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return  (
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}

export default RestaurantCard;
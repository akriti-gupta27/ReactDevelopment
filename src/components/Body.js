import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {

    const [listofRestaurants, setListOfRestaurants] = useState(resList);

    return(
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    console.log("Button clicked");
                    const filteredListofRestaurants = listofRestaurants.filter((res) => res.data.avgRating >4);
                    setListOfRestaurants(filteredListofRestaurants);
                }}>
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {
                    listofRestaurants.map(restaurant => <RestaurantCard key={restaurant.data.id} resData={restaurant}/>)
                }
            </div>
        </div>
    )
};

export default Body;
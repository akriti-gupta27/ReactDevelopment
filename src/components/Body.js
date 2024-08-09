import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {

    const [listofRestaurants, setListOfRestaurants] = useState(resList);

    console.log(listofRestaurants);

    let listofRestaurantsJS = [{
        "info": {
            "id": "405798",
            "name": "Chinese Wok",
            "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
            "costForTwo": "₹250 for two",
            "cuisines": [
              "Chinese",
              "Asian",
              "Tibetan",
              "Desserts"
            ],
            "avgRating": 4.3,
            "sla": {
              "deliveryTime": 50
            }
        }
    },
    {
        "info": {
            "id": "405788",
            "name": "KFC",
            "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
            "costForTwo": "₹550 for two",
            "cuisines": [
              "Chinese",
              "Desserts"
            ],
            "avgRating": 3.3,
            "sla": {
              "deliveryTime": 30
            }
        }
    }];

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
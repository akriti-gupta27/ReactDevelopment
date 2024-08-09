import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";

const Body = () => {

    const [listofRestaurants, setListOfRestaurants] = useState(resList);

    useEffect(() => {
        fetchData();
    },[]);

    fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        console.log(json);
        console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        setListOfRestaurants(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    }

    return(
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    console.log("Button clicked");
                    const filteredListofRestaurants = listofRestaurants.filter((res) => res.info.avgRating >4);
                    setListOfRestaurants(filteredListofRestaurants);
                }}>
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {
                    listofRestaurants.map(restaurant => <RestaurantCard key={restaurant.id} resData={restaurant}/>)
                }
            </div>
        </div>
    )
};

export default Body;
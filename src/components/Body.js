import RestaurantCard from "./RestaurantCard";
// import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";

const Body = () => {

    const [listofRestaurants, setListOfRestaurants] = useState([]);

    const [filteredRestaurant, setFilteredRestaurant] = useState([]);

    const [searchText, setSearchText] = useState("");

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
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    // if(listofRestaurants.length === 0){
    //     return <Shimmer/>;
    // }

    return listofRestaurants.length === 0 ? <Shimmer/> :(
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type ="text" className="search-box" value ={searchText} onChange= {(e) =>{setSearchText(e.target.value)} }/>
                        <button onClick={() => {
                            //Filter the resturants card and update the UI based on the searched text from input box
                            console.log(searchText);

                            const filteredRestaurant = listofRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                            if(filteredRestaurant.length !== 0){
                                setFilteredRestaurant(filteredRestaurant);
                            }
                        }}>Search</button>
                </div>
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
                    filteredRestaurant.map(restaurant => <RestaurantCard key={restaurant.id} resData={restaurant}/>)
                }
            </div>
        </div>
    )
};

export default Body;
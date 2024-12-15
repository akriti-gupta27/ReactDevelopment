import RestaurantCard , {withPromotedLabel} from "./RestaurantCard";
// import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {

    const [listofRestaurants, setListOfRestaurants] = useState([]);

    const [filteredRestaurant, setFilteredRestaurant] = useState([]);

    const [searchText, setSearchText] = useState("");

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

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

    const onlineStatus = useOnlineStatus();
    if(onlineStatus === false){
        return <h1> Looks Like you are Offline! Please check your interet connection.</h1>
    }

    // if(listofRestaurants.length === 0){
    //     return <Shimmer/>;
    // }

    return listofRestaurants.length === 0 ? <Shimmer/> :(
        <div className="body">
            <div className="filter flex">
                <div className="search m-4 p-4">
                    <input type ="text" className="border border-solid border-black" value ={searchText} onChange= {(e) =>{setSearchText(e.target.value)} }/>
                        <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={() => {
                            //Filter the resturants card and update the UI based on the searched text from input box
                            console.log(searchText);

                            const filteredRestaurant = listofRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                            if(filteredRestaurant.length !== 0){
                                setFilteredRestaurant(filteredRestaurant);
                            }
                        }}>Search</button>
                </div>
                <div className="search m-4 p-4 flex items-center">
                    <button className="px-4 py-2 bg-gray-200 rounded-lg" onClick={() => {
                        console.log("Button clicked");
                        const filteredListofRestaurants = listofRestaurants.filter((res) => res.info.avgRating >4);
                        setListOfRestaurants(filteredListofRestaurants);
                    }}>
                        Top Rated Restaurants
                    </button>
                </div>
                
            </div>
            <div className="res-container flex flex-wrap">
                {
                    filteredRestaurant.map(restaurant => (
                    <Link 
                    key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}
                    >
                        {/**IF the restaurnat is promoted then add a promoted label to it */
                        restaurant.info.withPromotedLabel ? <RestaurantCardPromoted resData={restaurant}/> : <RestaurantCard resData={restaurant}/>
                        }
                        
                    </Link>))
                }
            </div>
        </div>
    )
};

export default Body;
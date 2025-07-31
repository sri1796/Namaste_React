import { Link } from "react-router-dom";
import RestCard from "./RestCard";
import Shimmer from "./Shimmer";
import { RestaurantURL } from "../utils/constant";
import { useEffect, useState } from "react";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(RestaurantURL);
        const data = await response.json();
        setRestaurants(
          data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );
        setFilteredRestaurants(
          data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );
      } catch (error) {
        console.log(error.message);
      }
      // setRestaurants(data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
    fetchData();
  }, []);

  function searchHandler() {
    const filteredRestaurants = restaurants.filter((val) =>
      val?.info?.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurants(filteredRestaurants);
    setSearchText("");
  }

  {
    return restaurants.length === 0 ? (
      <Shimmer />
    ) : (
      <div className="body">
        <div className="search-container">
          <div>
            <input
              type="text"
              className="search-input"
              placeholder="Search for restaurants"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button className="search-btn" onClick={searchHandler}>
              Search
            </button>
          </div>
          <button
            className="filter-btn"
            onClick={() => {
              const filteredRestaurants = restaurants.filter(
                (restaurant) => restaurant?.info?.avgRating > 4.0
              );
              setFilteredRestaurants(filteredRestaurants);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
        <div className="restaurant-card-container">
          {filteredRestaurants.map((restaurant) => (
            <Link
              key={restaurant?.info?.id}
              to={"/restaurants/" + restaurant?.info?.id}
            >
              <RestCard resData={restaurant} />
            </Link>
          ))}
        </div>
      </div>
    );
  }
};

export default Body;

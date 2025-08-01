import { Link } from "react-router-dom";
import RestCard,{PromotedRestCard} from "./RestCard";
import Shimmer from "./Shimmer";
import { RestaurantURL } from "../utils/constant";
import { useEffect, useState } from "react";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const RestCardPromoted = PromotedRestCard(RestCard);

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
      <div className="m-2 p-2">
        <div className="flex justify-center items-center m-2 p-2 gap-7">
          <div className="flex border-amber-50">
            <input
              type="text"
              className="border-1 m-2 px-2 py-0.5"
              placeholder="Search for restaurants"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button className="bg-green-200 rounded-lg px-4 py-2" onClick={searchHandler}>
              Search
            </button>
          </div>
          <button
            className="bg-blue-300 rounded-lg px-4 py-2"
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
        <div className="flex flex-wrap p-10">
          {filteredRestaurants.map((restaurant,index) => (
            <Link
              key={restaurant?.info?.id}
              to={"/restaurants/" + restaurant?.info?.id}
            >
              {index % 2 === 0 ? <RestCardPromoted resData={restaurant}/> : <RestCard resData={restaurant} />}
            </Link>
          ))}
        </div>
      </div>
    );
  }
};

export default Body;

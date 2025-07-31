import { useEffect, useState } from "react";
import { RestaurantURL } from "./constant";

const useFetchRestaurantsData = ()=> {
    const [restaurants, setRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

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

  return restaurants;
}

export default useFetchRestaurantsData;
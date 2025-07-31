import { useEffect, useState } from "react";
import { RestaurantsMenuURL } from "../utils/constant";

const useFetchRestaurants =(resId)=> {
    const [resInfo, setResInfo] = useState(null);
    useEffect(() => {
    async function fetchRestaurants() {
      try {
        const response = await fetch(RestaurantsMenuURL+resId);
        const data = await response.json();
        setResInfo(data);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchRestaurants();
  }, []);
    return resInfo;
}

export default useFetchRestaurants;
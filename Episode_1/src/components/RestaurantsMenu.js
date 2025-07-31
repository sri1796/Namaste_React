import Shimmer from "./Shimmer";
import useFetchRestaurants from "../utils/useFetchRestaurants";

import { useParams } from "react-router-dom";

const RestaurantsMenu = () => {
  const {resId} = useParams();
  const resInfo = useFetchRestaurants(resId);

  if (!resInfo) {
    return <Shimmer />;
  }

  const { name, costForTwoMessage, cuisines } =resInfo?.data?.cards[2]?.card?.card?.info;
  const restaurants = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards || [];
  return (
    <div>
      <h1>{name}</h1>
      <h2>{costForTwoMessage}</h2>
      <h4>{cuisines.join(",")}</h4>
      <ul>
        {restaurants.map((item) => (<li key={item?.card?.info?.id}>{item?.card?.info?.name} - {item?.card?.info?.finalPrice / 100 || item?.card?.info?.price / 100}</li> ))}
      </ul>
    </div>
  );
};

export default RestaurantsMenu;

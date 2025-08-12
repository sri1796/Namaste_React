import Shimmer from "./Shimmer";
import useFetchRestaurants from "../utils/useFetchRestaurants";
import { useState } from "react";
import { useParams } from "react-router-dom";
import RestaurantItemCard from "./RestaurantItemCard";

const RestaurantsMenu = () => {
  const { resId } = useParams();
  const resInfo = useFetchRestaurants(resId);
  const [openCategoryId, setOpenCategoryId] = useState(null);

  if (!resInfo) {
    return <Shimmer />;
  }

  const { name, costForTwoMessage, cuisines } =
    resInfo?.cards[2]?.card?.card?.info;
  const restaurants =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  const restaurantsList = restaurants.filter(
    (ele) =>
      ele.card.card["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  console.log(restaurantsList);

  return (
    <div className="text-center">
      <div className="text-center font-bold">
        <h1 className="text-lg text-red-600">{name}</h1>
        <h2>cost For Two {costForTwoMessage}</h2>
        <h4>{cuisines.join(",")}</h4>
      </div>
      <ul className="w-6/12 m-auto">
        {restaurantsList.map((ele) => {
          const categoryId = ele?.card?.card?.categoryId;
          return (
          <RestaurantItemCard
            key={categoryId}
            data={ele?.card?.card}
            onShow={() =>
              setOpenCategoryId(
                openCategoryId === categoryId ? null : categoryId
              )
            }
            showContent={openCategoryId === categoryId}
          />
        
          )
        }
        )}
      </ul>
    </div>
  );
};

export default RestaurantsMenu;

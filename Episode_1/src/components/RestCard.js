import {url}  from "../utils/constant";
const RestCard = (props) => {
  const { resData } = props;
  const {name, avgRating, cuisines, sla, costForTwo} = resData?.info;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={ url + '/' + resData?.info?.cloudinaryImageId}
        alt="Restaurant"
      />
      <h2>{name}</h2>
      <p>{avgRating}</p>
      <p>{cuisines.join(",")}</p>
      <p>{sla.deliveryTime + 'mins' }</p>
      <p>{costForTwo}</p>
    </div>
  );
};

export default RestCard;
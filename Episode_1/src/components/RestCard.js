import {url}  from "../utils/constant";
const RestCard = (props) => {
  const { resData } = props;
  const {name, avgRating, cuisines, sla, costForTwo} = resData?.info;
  return (
    <div className="m-3 p-3 w-64 h-120 bg-gray-100 hover:bg-gray-200 shadow-black align-middle overflow-hidden rounded-xl">
      <img
        className="w-56 rounded-lg"
        src={ url + resData?.info?.cloudinaryImageId}
        alt="Restaurant"
      />
      <h2 className="text-red-500 font-bold">{name}</h2>
      <p>{avgRating}</p>
      <p className="object-contain">{cuisines.join(",")}</p>
      <p>{sla.deliveryTime + 'mins' }</p>
      <p>{costForTwo}</p>
    </div>
  );
};


export const PromotedRestCard = (RestCard)=>{
  return (props)=>{
    return(
      <>
      <label className="absolute bg-black text-white rounded-lg p-2 m-2">Promoted</label>
      <RestCard {...props}/>
      </>
    )
  }
}

export default RestCard;
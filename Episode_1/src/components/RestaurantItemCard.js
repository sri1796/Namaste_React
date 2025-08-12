import { url } from "../utils/constant";

export default function RestaurantItemCard({ data, showContent,  onShow}) {

//   function handleAccordian() {
//     setShowContent(!showContent);
//   }
  return (
    <div className="bg-gray-300 m-5 p-2 rounded-lg hover:bg-gray-400 shadow-black">
      <div
        className="text-lg font-bold flex justify-between"
        onClick={onShow}
      >
        <span>
          {data.title} ({data.itemCards.length})
        </span>
        {showContent? <span>🔼</span> : <span>🔽</span> }
      </div>
      {showContent &&
        data.itemCards.map((item) => (
          <div
            className="p-3 m-2 bg-gray-100 flex justify-between rounded-lg"
            key={item.card.info.id}
          >
            <div className="text-left w-9/12">
              <p className="text-left text-lg font-bold">
                {item.card.info.name}
              </p>
              <p>
                ₹{" "}
                {item.card.info.defaultPrice / 100 ||
                  item.card.info.price / 100}
              </p>
              <p>
                ⭐{item.card.info.ratings.aggregatedRating.rating} (
                {item.card.info.ratings.aggregatedRating.ratingCountV2})
              </p>
              <p className="text-xs">{item.card.info.description}</p>
            </div>
            <div className="relative w-3/12 p-2">
              <button className="absolute bg-black text-white rounded-lg p-2 top-4 left-4">Add +</button>    
              <img
                className="w-56 rounded-lg m-1 object-contain"
                src={url + item.card.info.imageId}
              />
            </div>
          </div>
        ))}
    </div>
  );
}

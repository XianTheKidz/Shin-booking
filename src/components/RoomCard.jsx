import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const RoomCard = ({ room, index }) => {
  return (
    <Link
      to={`/rooms/${room._id}`}
      onClick={() => scrollTo(0, 0)}
      className="group relative w-full overflow-hidden rounded-xl bg-white dark:bg-slate-900 shadow-lg transition hover:shadow-xl border border-gray-100 dark:border-slate-800"
    >
      <div className="overflow-hidden">
        <img
          src={room.images[0]}
          alt={room.roomType}
          className="h-60 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {index % 2 === 0 && (
        <p className="absolute left-3 top-3 rounded-full bg-white dark:bg-slate-900 px-3 py-1 text-xs font-medium text-gray-800 dark:text-white">
          Best Seller
        </p>
      )}

      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <p className="font-playfair text-xl font-semibold leading-snug text-gray-800 dark:text-white">
            {room.roomType}
          </p>

          <div className="flex shrink-0 items-center gap-1 text-sm text-gray-700 dark:text-gray-200">
            <img
              src={assets.starIconFilled}
              alt="star"
              className="room-rating-star h-4 w-4 object-contain"
            />
            <span>{room.rating || 4.8}</span>
          </div>
        </div>

        <div className="mt-3 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-300">
          <img
            src={assets.locationIcon}
            alt="location"
            className="h-5 w-5 dark:invert"
          />
          <span>{room.hotel.address}</span>
        </div>

        <div className="mt-5 flex items-center justify-between">
          <p className="text-lg font-semibold text-gray-800 dark:text-white">
            MMK {room.pricePerNight.toLocaleString()}
            <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
              /night
            </span>
          </p>

          <button className="rounded-lg border border-gray-300 dark:border-slate-600 px-4 py-2 text-sm font-medium text-gray-800 dark:text-white transition-all duration-300 hover:bg-gray-100 dark:hover:bg-slate-700 hover:border-cyan-500">
            Book Now
          </button>
        </div>
      </div>
    </Link>
  );
};

export default RoomCard;
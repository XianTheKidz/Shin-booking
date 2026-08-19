import { roomsDummyData } from "../assets/assets";
import RoomCard from "./RoomCard";
import Title from "./Title";
import { useNavigate } from "react-router-dom";

const FeaturedRooms = () => {
  const navigate = useNavigate();

  return (
      <section className="bg-white dark:bg-[#020618] py-20 px-6 md:px-16 lg:px-24 transition-colors">
      <Title
      title="Featured Rooms"
      subtitle="Discover elegant beachfront suites designed for relaxation, comfort, and unforgettable ocean views."
      animated
      />

      <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
        {roomsDummyData.slice(0, 3).map((room, index) => (
          <RoomCard key={room._id} room={room} index={index} />
        ))}
      </div>

      <div className="mt-16 flex justify-center">
        <button
          onClick={() => {
            navigate("/rooms");
            scrollTo(0, 0);
          }}
          className="
            inline-flex items-center gap-2
            rounded-full border
            border-slate-300 dark:border-slate-700
            px-6 py-3
            font-medium
            text-slate-900 dark:text-white
            hover:border-cyan-500
            hover:text-cyan-500
            transition-all duration-300
          "
        >
          View All Rooms
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </button>
      </div>
    </section>
  );
};

export default FeaturedRooms;
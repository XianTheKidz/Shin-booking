import {useState} from 'react'
import { facilityIcons, roomsDummyData } from "../assets/assets"
import { useNavigate } from "react-router-dom"
import StarRating from "../components/StarRating";
import { assets } from "../assets/assets";
import Footer from "../components/Footer";

const CheckBox = ({
  label,
  selected = false,
  onChange = () => {},
}) => {
  return (
    <label className="mt-2 flex cursor-pointer items-center gap-3 text-sm text-gray-700 dark:text-gray-300">
      <input
        type="checkbox"
        checked={selected}
        onChange={(e) => onChange(e.target.checked, label)}
        className="accent-cyan-600"
      />
      <span className="select-none">{label}</span>
    </label>
  );
};

const AllRooms = () => {
const navigate = useNavigate();
const [openFilters, setOpenFilters] = useState(false);
const [selectedAmenities, setSelectedAmenities] = useState([]);
const [selectedBudget, setSelectedBudget] = useState([]);


  const amenities = [
  "Free WiFi",
  "Free Breakfast",
  "Room Service",
  "Beach View",
  "Pool Access",
  "Bathtub",
  "Jacuzzi",
  "Private Pool",
];

  const priceRanges = [
    "0 to 500,000",
    "500,000 to 1,000,000",
    "1,000,000 to 2,000,000",
    "2,000,000+",
  ];

const [selectedRoomTypes, setSelectedRoomTypes] = useState([]);

const roomTypes = [
  "Double Rooms",
  "Villas",
  "Suites",
  "Maisonettes",
];

const filteredRooms = roomsDummyData
  .filter((room) => {
    if (selectedRoomTypes.length === 0) return true;

    return selectedRoomTypes.includes(room.category);
  })
  .filter((room) => {
    if (selectedAmenities.length === 0) return true;

    return selectedAmenities.every((amenity) =>
      room.amenities.includes(amenity)
    );
  })
  .filter((room) => {
    if (selectedBudget.length === 0) return true;

    const price = room.pricePerNight;

    return selectedBudget.some((range) => {
      switch (range) {
        case "0 to 500,000":
          return price <= 500000;

        case "500,000 to 1,000,000":
          return price > 500000 && price <= 1000000;

        case "1,000,000 to 2,000,000":
          return price > 1000000 && price <= 2000000;

        case "2,000,000+":
          return price > 2000000;

        default:
          return true;
      }
    });
  });


  return (
  <>
    <div className="flex flex-col-reverse items-start justify-between px-4 pt-28 md:px-16 md:pt-36 lg:flex-row lg:px-24">
      <div>
        <div className="flex flex-col items-start text-left">
          <h1 className="font-playfair text-5xl animated-gradient-text">
            Find Your Perfect Stay
          </h1>

          <p className="mt-2 max-w-175 text-sm text-gray-500 dark:text-gray-300 md:text-base">
            Browse our handpicked collection of oceanfront rooms and premium suites for your next beach escape.
          </p>
        </div>

        {filteredRooms.map((room) => (
          <div
            key={room._id}
            className="flex flex-col gap-6 border-b border-gray-300 py-10 last:border-0 last:pb-30 dark:border-slate-700 md:flex-row"
          >
            <img
              onClick={() => {
                navigate(`/rooms/${room._id}`);
                scrollTo(0, 0);
              }}
              src={room.images[0]}
              alt="hotel"
              title="View Room Details"
              className="max-h-65 cursor-pointer rounded-xl object-cover shadow-lg transition hover:scale-[1.02] md:w-1/2"
            />

            <div className="flex flex-col gap-2 md:w-1/2">
            <p
                onClick={() => {
                    navigate(`/rooms/${room._id}`);
                    scrollTo(0, 0);
                }}
                className="text-gray-900 dark:text-white text-3xl font-playfair cursor-pointer"
                >
                {room.roomType}
            </p>

              <div className="flex items-center gap-3">
                <StarRating rating={room.rating} />

                <span className="rounded-full bg-cyan-100 px-3 py-1 text-xs font-semibold text-cyan-700 dark:bg-cyan-900/40 dark:text-cyan-300">
                  {room.rating.toFixed(1)}
                </span>

                <span className="text-sm text-gray-500 dark:text-gray-400">
                  • {room.reviews} {room.reviews === 1 ? "review" : "reviews"}
                </span>
              </div>

              <div className="mt-2 flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                <img src={assets.locationIcon} alt="location" />
                <span>{room.hotel.address}</span>
              </div>

              <div className="mt-3 mb-6 flex flex-wrap items-center gap-4">
                {room.amenities.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 rounded-lg bg-slate-100 px-3 py-2 dark:bg-slate-800"
                  >
                    <img
                      src={facilityIcons[item]}
                      alt={item}
                      className="h-5 w-5 dark:invert"
                    />
                    <p className="text-xs text-gray-700 dark:text-gray-300">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <p className="text-xl font-semibold text-cyan-700 dark:text-cyan-400">
                MMK {room.pricePerNight.toLocaleString()} / night
              </p>
            </div>
          </div>
        ))}
      </div>
        {/* Filters */}
        <div className="w-80 rounded-2xl border border-gray-200 bg-white text-gray-600 shadow-sm dark:border-slate-700 dark:bg-slate-900 dark:text-gray-300 max-lg:mb-8 lg:mt-16">

        <div
            className={`flex items-center justify-between px-5 py-4 border-b border-gray-200 dark:border-slate-700 ${
            openFilters ? "border-b" : ""
            }`}
        >
            <p className="text-base font-semibold text-gray-900 dark:text-white">
            Filters
            </p>

            <div className="text-xs font-medium cursor-pointer text-cyan-600">
            <span
                onClick={() => setOpenFilters(!openFilters)}
                className="lg:hidden"
            >
                {openFilters ? "HIDE" : "SHOW"}
            </span>

            <span
            className="hidden cursor-pointer lg:block"
            onClick={() => {
                setSelectedRoomTypes([]);
                setSelectedAmenities([]);
                setSelectedBudget([]);
            }}
            >
            Clear
            </span>
            </div>
        </div>

        <div
            className={`overflow-hidden transition-all duration-500 ${
                openFilters ? "h-auto" : "h-0 lg:h-auto"
            }`}
        >
            {/* Amenities */}
            <div className="px-5 pt-5">
                <p className="pb-2 font-medium text-gray-900 dark:text-white">
                Amenities
                </p>

                {amenities.map((amenity) => (
                <CheckBox
                    key={amenity}
                    label={amenity}
                    selected={selectedAmenities.includes(amenity)}
                    onChange={(checked) => {
                    if (checked) {
                        setSelectedAmenities([...selectedAmenities, amenity]);
                    } else {
                        setSelectedAmenities(
                        selectedAmenities.filter((item) => item !== amenity)
                        );
                    }
                    }}
                />
                ))}
            </div>

            {/* Budget */}
            <div className="px-5 pt-5">
            <p className="pb-2 font-medium text-gray-900 dark:text-white">
                Budget
            </p>

            {priceRanges.map((range) => (
                <CheckBox
                key={range}
                label={`MMK ${range}`}
                selected={selectedBudget.includes(range)}
                onChange={(checked) => {
                    if (checked) {
                    setSelectedBudget([...selectedBudget, range]);
                    } else {
                    setSelectedBudget(
                        selectedBudget.filter((item) => item !== range)
                    );
                    }
                }}
                />
            ))}
            </div>

            {/* Room Type */}
            <div className="px-5 pt-5">
              <p className="pb-2 font-medium text-gray-900 dark:text-white">
                Room Type
              </p>

              {roomTypes.map((type) => (
                <CheckBox
                  key={type}
                  label={type}
                  selected={selectedRoomTypes.includes(type)}
                  onChange={(checked) => {
                    if (checked) {
                      setSelectedRoomTypes([...selectedRoomTypes, type]);
                    } else {
                      setSelectedRoomTypes(
                        selectedRoomTypes.filter((item) => item !== type)
                      );
                    }
                  }}
                />
              ))}
            </div>

        </div>
        </div>
    </div>

    <Footer />
  </>
  );
};

export default AllRooms;
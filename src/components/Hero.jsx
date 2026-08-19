import hotelVideo from "../assets/hotel.mp4";
import { assets, roomTypes } from "../assets/assets";

const Hero = () => {
  return (
    <section className="relative h-screen overflow-hidden bg-white dark:bg-slate-950">
      {/* Background Video */}
      <video
        src={hotelVideo}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex h-full flex-col justify-center px-5 pt-24 text-white md:px-16 lg:px-24 xl:px-32">

        {/* Badge */}
        <p className="inline-block w-fit rounded-full bg-cyan-500/30 px-4 py-1 text-xs backdrop-blur-md md:text-sm">
          Vergina Beach Hotel
        </p>

        {/* Heading */}
        <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
          Find Your Perfect
          <br />
          Stay With Shin Booking
        </h1>
          Ocean Breeze
        <p className="mt-4 max-w-xl text-sm text-gray-200 sm:text-base md:text-lg">
          Relax in elegant suites with breathtaking ocean views, premium amenities, and exceptional hospitality at Vergina Beach Resort.
        </p>

        {/* Search Form */}
        <form className="mt-8 flex w-full max-w-4xl flex-col gap-4 rounded-2xl bg-white/95 p-5 text-gray-700 shadow-2xl backdrop-blur-md md:flex-row md:items-end md:gap-5 md:p-6">

          {/* Room Type */}
          <div>
            <div className="flex items-center gap-2">
              <img
                src={assets.homeIcon}
                alt="room"
                className="h-4"
              />
              <label htmlFor="roomType">Accommodation</label>
            </div>

            <select
              id="roomType"
              defaultValue=""
              className="mt-2 w-full rounded-md border border-gray-300 px-3 py-2 outline-none md:w-40"
            >
              <option value="" disabled>
                Select Accommodation
              </option>

              {roomTypes.map((roomType) => (
                <option key={roomType} value={roomType}>
                  {roomType}
                </option>
              ))}
            </select>
          </div>

          {/* Check In */}
          <div>
            <div className="flex items-center gap-2">
              <img
                src={assets.calenderIcon}
                alt="calendar"
                className="h-4"
              />
              <label htmlFor="checkIn">Check In</label>
            </div>

            <input
              id="checkIn"
              type="date"
              className="mt-2 w-full rounded-md border border-gray-300 px-3 py-2 outline-none md:w-40"
            />
          </div>

          {/* Check Out */}
          <div>
            <div className="flex items-center gap-2">
              <img
                src={assets.calenderIcon}
                alt="calendar"
                className="h-4"
              />
              <label htmlFor="checkOut">Check Out</label>
            </div>

            <input
              id="checkOut"
              type="date"
              className="mt-2 w-full rounded-md border border-gray-300 px-3 py-2 outline-none md:w-40"
            />
          </div>

          {/* Guests */}
          <div>
            <div className="flex items-center gap-2">
              <img
                src={assets.guestsIcon}
                alt="guests"
                className="h-4"
              />
              <label htmlFor="guests">Guests</label>
            </div>

            <input
              id="guests"
              type="number"
              min="1"
              max="10"
              defaultValue="1"
              className="mt-2 w-full rounded-md border border-gray-300 px-3 py-2 outline-none md:w-20"
            />
          </div>

          {/* Search Button */}
          <button
            type="submit"
            className="mt-2 flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-black px-6 font-medium text-white transition hover:bg-gray-800 md:mt-0 md:w-auto"
          >
            <img
              src={assets.searchIcon}
              alt="search"
              className="h-5"
            />
            Search
          </button>

        </form>

      </div>
    </section>
  );
};

export default Hero;
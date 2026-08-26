import hotelVideo from "../assets/hotel.mp4";
import { assets, roomTypes } from "../assets/assets";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-white dark:bg-slate-950">

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
      <div className="absolute inset-0 bg-black/40" />

      {/* Hero Content */}
      <div
        className="
          relative z-10
          flex min-h-screen flex-col
          justify-start
          px-5
          pb-10
          pt-28
          text-white

          sm:px-8
          sm:pt-32

          md:justify-center
          md:px-16
          md:pt-20

          lg:px-24
          xl:px-32
        "
      >

        {/* Badge */}
        <p
          className="
            inline-block w-fit
            rounded-full
            bg-cyan-500/30
            px-4 py-1
            text-xs
            backdrop-blur-md
            sm:text-sm
          "
        >
          Vergina Beach Hotel
        </p>

        {/* Heading */}
        <h1
          className="
            mt-4
            max-w-3xl
            text-4xl
            font-bold
            leading-tight

            sm:text-5xl

            md:mt-5
            md:text-6xl
          "
        >
          Find Your Perfect
          <br />
          Stay With Shin Booking
        </h1>

        {/* Location */}
        <p
          className="
            mt-2
            text-base
            font-medium
            text-white

            sm:text-lg

            md:mt-3
            md:text-xl
          "
        >
          Ocean Breeze
        </p>

        {/* Description */}
        <p
          className="
            mt-3
            max-w-xl
            text-sm
            leading-relaxed
            text-gray-200

            sm:text-base

            md:mt-4
            md:text-lg
          "
        >
          Relax in elegant suites with breathtaking ocean views,
          premium amenities, and exceptional hospitality at
          Vergina Beach Resort.
        </p>

        {/* Search Form */}
        <form
          className="
            mt-7
            flex
            w-full
            max-w-4xl
            flex-col
            gap-4
            rounded-3xl
            bg-white/95
            p-5
            text-gray-700
            shadow-2xl
            backdrop-blur-md

            sm:p-6

            md:mt-8
            md:flex-row
            md:items-end
            md:gap-5
            md:rounded-2xl
          "
        >

          {/* Room Type */}
          <div className="w-full md:w-auto">
            <div className="flex items-center gap-2">
              <img
                src={assets.homeIcon}
                alt="room"
                className="h-4"
              />

              <label
                htmlFor="roomType"
                className="text-sm sm:text-base"
              >
                Accommodation
              </label>
            </div>

            <select
              id="roomType"
              defaultValue=""
              className="
                mt-2
                h-14
                w-full
                rounded-xl
                border
                border-gray-300
                bg-white
                px-4
                outline-none

                md:h-11
                md:w-40
              "
            >
              <option value="" disabled>
                Select Accommodation
              </option>

              {roomTypes.map((roomType) => (
                <option
                  key={roomType}
                  value={roomType}
                >
                  {roomType}
                </option>
              ))}
            </select>
          </div>

          {/* Check In */}
          <div className="w-full md:w-auto">
            <div className="flex items-center gap-2">
              <img
                src={assets.calenderIcon}
                alt="calendar"
                className="h-4"
              />

              <label
                htmlFor="checkIn"
                className="text-sm sm:text-base"
              >
                Check In
              </label>
            </div>

            <input
              id="checkIn"
              type="date"
              className="
                mt-2
                h-14
                w-full
                rounded-xl
                border
                border-gray-300
                bg-white
                px-4
                outline-none

                md:h-11
                md:w-40
              "
            />
          </div>

          {/* Check Out */}
          <div className="w-full md:w-auto">
            <div className="flex items-center gap-2">
              <img
                src={assets.calenderIcon}
                alt="calendar"
                className="h-4"
              />

              <label
                htmlFor="checkOut"
                className="text-sm sm:text-base"
              >
                Check Out
              </label>
            </div>

            <input
              id="checkOut"
              type="date"
              className="
                mt-2
                h-14
                w-full
                rounded-xl
                border
                border-gray-300
                bg-white
                px-4
                outline-none

                md:h-11
                md:w-40
              "
            />
          </div>

          {/* Guests */}
          <div className="w-full md:w-auto">
            <div className="flex items-center gap-2">
              <img
                src={assets.guestsIcon}
                alt="guests"
                className="h-4"
              />

              <label
                htmlFor="guests"
                className="text-sm sm:text-base"
              >
                Guests
              </label>
            </div>

            <input
              id="guests"
              type="number"
              min="1"
              max="10"
              defaultValue="1"
              className="
                mt-2
                h-14
                w-full
                rounded-xl
                border
                border-gray-300
                bg-white
                px-4
                outline-none

                md:h-11
                md:w-20
              "
            />
          </div>

          {/* Search Button */}
          <button
            type="submit"
            className="
              flex
              h-14
              w-full
              items-center
              justify-center
              gap-2
              rounded-xl
              bg-black
              px-6
              font-medium
              text-white
              transition
              hover:bg-gray-800

              md:h-11
              md:w-auto
            "
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
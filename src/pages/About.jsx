import { assets } from "../assets/assets";
import Title from "../components/Title";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="bg-white text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white">

      {/* ================= HERO ================= */}
      <section className="relative flex min-h-[70vh] items-center overflow-hidden">

        <video
          src={assets.hotelVideo3}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24 md:px-16 lg:px-24">
          <p className="mb-4 inline-block rounded-full bg-cyan-500/20 px-4 py-1 text-sm text-cyan-200 backdrop-blur-md">
            About Shin Booking
          </p>

          <h1 className="max-w-3xl font-playfair text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
            Your Seaside Stay,
            <br />
            Made Simple
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-gray-200 md:text-lg">
            Shin Booking brings comfortable seaside stays, beautiful
            surroundings, and a simple booking experience together in one
            place. Discover your room, explore the facilities, and plan your
            stay with ease.
          </p>
        </div>
      </section>


      {/* ================= OUR STORY ================= */}
      <section className="px-6 py-20 md:px-16 lg:px-24 xl:px-32">

        <Title
          title="Our Story"
          subtitle="A simple idea behind a better seaside booking experience."
          animated
        />

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-2">

          {/* Image */}
          <div className="overflow-hidden rounded-3xl">
            <img
              src={assets.regImage}
              alt="Shin Booking seaside stay"
              className="h-100 w-full object-cover transition duration-500 hover:scale-105 md:h-125"
            />
          </div>

          {/* Story */}
          <div>
            <h2 className="font-playfair text-3xl font-semibold md:text-4xl">
              Why Shin Booking Exists?
            </h2>

            <div className="mt-6 space-y-5 text-base leading-8 text-slate-600 dark:text-slate-300">
              <p>
                Shin Booking was created to provide a simple and convenient way
                for travellers to discover and reserve a comfortable seaside
                stay. Traditional hotel booking methods often require guests
                to search through different platforms, compare information,
                and contact properties individually.
              </p>

              <p>
                Our goal is to bring the essential information together in one
                place. Guests can explore available rooms, compare amenities,
                view facilities, learn more about the destination, and make
                their reservation through a straightforward digital experience.
              </p>

              <p>
                Shin Booking focuses on making the booking journey clear and
                enjoyable. From discovering the right room to exploring the
                surrounding area, every part of the platform is designed to
                help guests plan a relaxing seaside getaway with less effort.
              </p>
            </div>
          </div>

        </div>
      </section>


      {/* ================= OUR LOCATION ================= */}
      <section className="bg-slate-50 px-6 py-20 dark:bg-slate-900/50 md:px-16 lg:px-24 xl:px-32">

        <Title
          title="Our Location"
          subtitle="A peaceful seaside destination in one of Crete's most beautiful coastal areas."
          animated
        />

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-2">

        {/* Location Information */}
        <div className="lg:order-1">

          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-600 dark:text-cyan-400">
            Agia Marina, Chania, Crete
          </p>

          <h2 className="mt-4 font-playfair text-3xl font-semibold md:text-4xl">
            Stay Close to the Sea
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-600 dark:text-slate-300">
            Located in Agia Marina, Chania, Crete, Shin Booking offers guests
            a relaxing coastal setting surrounded by the Mediterranean
            atmosphere of western Crete.
          </p>

          <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-300">
            The area is known for its beautiful coastline, clear blue water,
            sandy beaches, local restaurants, and relaxed seaside atmosphere.
            It provides an ideal base for guests who want to enjoy the beach
            while exploring the wider Chania area.
          </p>

          <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-800">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Location
            </p>

            <p className="mt-2 text-lg font-semibold">
              Agia Marina, Chania, Crete
            </p>
          </div>

        </div>

        {/* Location Video */}
        <div className="overflow-hidden rounded-3xl shadow-xl lg:order-2">
          <video
            src={assets.hotelVideo2}
            autoPlay
            muted
            loop
            playsInline
            className="h-100 w-full object-cover md:h-125"
          />
        </div>

      </div>
      </section>


      {/* ================= CONTACT ================= */}
      <section className="px-6 py-20 md:px-16 lg:px-24 xl:px-32">

        <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl">

          <div className="relative overflow-hidden rounded-3xl">

            {/* Background Video */}
            <video
              src={assets.newsletterVideo}
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 h-full w-full scale-110 object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center px-8 py-20">

              <Title
                title="Stay Inspired"
                subtitle="Receive exclusive travel inspiration, seasonal updates, and luxury getaway recommendations delivered to your inbox."
                animated
              />

              <div className="mt-10 flex w-full flex-col items-center justify-center gap-5 md:flex-row">

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-white placeholder:text-gray-300 backdrop-blur-md outline-none transition focus:border-cyan-400 md:w-80"
                />

                <button
                  type="button"
                  className="group flex items-center gap-2 rounded-xl bg-linear-to-r from-[#166F9B] to-[#33A6B4] px-8 py-3 font-semibold text-white transition duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/30"
                >
                  Subscribe

                  <img
                    src={assets.arrowIcon}
                    alt="arrow"
                    className="invert transition group-hover:translate-x-1"
                  />
                </button>

              </div>

              <p className="mt-8 max-w-lg text-center text-sm text-gray-300">
                Join our community and receive exclusive offers, travel
                updates, and luxury getaway inspiration directly in your inbox.
              </p>

            </div>

          </div>

        </div>
      </section>
    <Footer />
    </div>
  );
};

export default About;
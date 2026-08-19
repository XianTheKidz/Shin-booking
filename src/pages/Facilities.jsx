import { assets } from "../assets/assets";
import Footer from "../components/Footer";

const facilities = [
  {
    title: "Pool & Private Pools",
    image: assets.poolImage,
    icon: assets.poolIcon,
    description:
      "Relax beside our breathtaking infinity pool overlooking the crystal clear Mediterranean Sea, or unwind in the privacy of your own exclusive pool. Whether you are enjoying a peaceful morning swim, soaking up the warm sunshine, or sipping handcrafted cocktails by the water, every moment is designed to provide complete relaxation and unforgettable memories.",
    features: [
      "Infinity Pool",
      "Private Pools",
      "Sunbeds",
      "Pool Bar",
    ],
  },
  {
    title: "Spa & Wellness",
    image: assets.spaImage,
    icon: assets.spaIcon,
    description:
      "Escape into a peaceful sanctuary where luxury meets wellness. Indulge in soothing massage therapies, rejuvenating spa treatments, a relaxing sauna, and tranquil wellness spaces designed to restore both body and mind after a day of exploring Crete.",
    features: [
      "Massage Therapy",
      "Sauna",
      "Steam Room",
      "Beauty Treatments",
    ],
  },
  {
    title: "Beach Bar Restaurant",
    image: assets.restaurantImage,
    icon: assets.coconutIcon,
    description:
      "Enjoy authentic Mediterranean cuisine, fresh seafood, handcrafted cocktails, and refreshing beverages at our Beach Bar & Restaurant. Whether you're starting the day with breakfast, enjoying a leisurely seaside lunch, or watching the sunset with signature cocktails, every dining experience is complemented by breathtaking ocean views and warm hospitality.",
    features: [
    "Breakfast Buffet",
    "Beach Bar",
    "Mediterranean Cuisine",
    "Fresh Seafood",
  ],
  },
  {
    title: "Activities",
    image: assets.activitiesImage,
    icon: assets.activitiesIcon,
    description:
      "Create unforgettable memories through a variety of exciting activities. Explore the coastline by kayak, enjoy peaceful morning yoga sessions, cycle through picturesque villages, or take relaxing sunset walks along the golden beach, all just steps from your accommodation.",
    features: [
      "Yoga Classes",
      "Kayaking",
      "Cycling",
      "Beach Walks",
    ],
  },
  {
    title: "Gym & Fitness",
    image: assets.gymImage,
    icon: assets.gymIcon,
    description:
      "Maintain your fitness routine in our modern gym equipped with premium cardio machines, strength equipment, and functional training areas. Whether you prefer an energetic morning workout or a relaxing evening session, our facilities are available to support your wellness throughout your stay.",
    features: [
      "Cardio Zone",
      "Free Weights",
      "Strength Equipment",
      "Open Daily",
    ],
  },
];

const Facilities = () => {
  return (
    <div className="bg-white dark:bg-slate-950 transition-colors">

      {/* Hero */}
      <section className="px-6 py-24 text-center md:px-16 lg:px-24">
        <p className="text-cyan-600 font-semibold uppercase tracking-[0.3em]">
          Resort Facilities
        </p>

        <h1 className="mt-4 font-playfair text-5xl md:text-6xl leading-[1.2] animated-gradient-text">
          Everything You Need For A Perfect Stay
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600 dark:text-slate-400">
          Discover premium facilities designed to make every moment of your stay
          relaxing, comfortable, and unforgettable.
        </p>
      </section>

      {/* Facilities */}
      <section className="pb-10">

        {facilities.map((facility, index) => (
          <div
            key={facility.title}
            className="grid lg:grid-cols-2"
          >
            {/* Image */}
            <div
              className={`${
                index % 2 !== 0 ? "lg:order-2" : ""
              }`}
            >
              <img
                src={facility.image}
                alt={facility.title}
                className="h-125 w-full object-cover"
              />
            </div>

            {/* Content */}
            <div
              className="flex flex-col justify-center px-8 py-14 md:px-16"
            >
              <div className="flex items-center gap-4">

                <img
                  src={facility.icon}
                  alt=""
                  className="h-10 w-10 dark:invert"
                />

                <h2 className="font-playfair text-4xl text-slate-900 dark:text-white">
                  {facility.title}
                </h2>

              </div>

              <p className="mt-6 leading-8 text-slate-600 dark:text-slate-400">
                {facility.description}
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">

                {facility.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3 rounded-xl bg-slate-100 px-4 py-3 dark:bg-slate-900"
                  >
                    <img
                      src={assets.checkIcon}
                      alt=""
                      className="h-5 w-5 dark:invert"
                    />

                    <span className="text-slate-700 dark:text-slate-300">
                      {feature}
                    </span>
                  </div>
                ))}

              </div>
            </div>
          </div>
        ))}

      </section>
      <Footer />
    </div>
    
  );
};

export default Facilities;
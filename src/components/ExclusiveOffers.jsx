import { useState } from "react";
import { X } from "lucide-react";
import Title from "./Title";
import { assets, exclusiveOffers } from "../assets/assets";
import { Link } from "react-router-dom";

const ExclusiveOffers = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);

  return (
    <section className="bg-slate-50 px-6 py-12 transition-colors duration-300 dark:bg-slate-900/50 md:px-16 lg:px-24 xl:px-32">
      {/* Header */}
      <div className="flex flex-col pb-20 transition-colors md:flex-row md:items-end md:justify-between">
        <Title
          align="left"
          title="Signature Escapes"
          subtitle="Discover handcrafted resort packages designed for romantic escapes, extended stays, and relaxing weekends by the sea."
        />

        <Link
          to="/facilities"
          className="group mt-8 flex cursor-pointer items-center gap-2 whitespace-nowrap font-medium text-gray-800 transition hover:text-cyan-600 dark:text-white dark:hover:text-cyan-400 md:mt-0"
        >
          View Facilities

          <img
            src={assets.arrowIcon}
            alt="arrow"
            className="transition group-hover:translate-x-1 dark:invert dark:brightness-0 dark:contrast-200"
          />
        </Link>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
        {exclusiveOffers.map((item) => (
          <div
            key={item._id}
            className="group relative h-105 overflow-hidden rounded-2xl shadow-lg"
          >
            {/* Background Video */}
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
            >
              <source src={item.video} type="video/mp4" />
            </video>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/45" />

            {/* Content */}
            <div className="relative z-10 flex h-full flex-col justify-between p-6 text-white">
              <div>
                <span className="inline-block rounded-full bg-white px-4 py-1 text-xs font-semibold text-gray-900">
                  Save {item.priceOff}%
                </span>

                <h3 className="mt-6 font-playfair text-3xl">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/90">
                  {item.description}
                </p>

                <p className="mt-5 text-sm text-white/70">
                  Offer ends {item.expiryDate}
                </p>
              </div>

              <button
                onClick={() => setSelectedPackage(item)}
                className="group flex items-center gap-2 font-medium"
              >
                Discover Package

                <img
                  src={assets.arrowIcon}
                  alt=""
                  className="invert transition group-hover:translate-x-1"
                />
              </button>
            </div>
          </div>
        ))}
      </div>

{/* ================= Modal ================= */}
{selectedPackage && (
  <div
    className="
      fixed inset-0 z-50
      flex items-center justify-center
      bg-black/70
      p-0
      backdrop-blur-sm

      sm:p-5
    "
  >
    <div
      className="
        relative
        flex
        h-full
        w-full
        flex-col
        overflow-y-auto
        bg-white
        shadow-2xl

        dark:bg-slate-900

        sm:h-[90vh]
        sm:max-h-212.5
        sm:rounded-3xl

        lg:flex-row
        lg:overflow-hidden
      "
    >

      {/* Close Button */}
      <button
        onClick={() => setSelectedPackage(null)}
        aria-label="Close package"
        className="
          fixed
          right-4
          top-4
          z-60
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-full
          border
          border-gray-200
          bg-white
          text-gray-700
          shadow-lg
          transition
          hover:bg-gray-100

          dark:border-slate-600
          dark:bg-slate-800
          dark:text-white
          dark:hover:bg-slate-700

          sm:absolute
          sm:right-5
          sm:top-5
        "
      >
        <X size={24} strokeWidth={2} />
      </button>

      {/* Left Content */}
      <div
        className="
          flex
          w-full
          shrink-0
          flex-col
          p-6
          pt-20

          sm:p-8
          sm:pt-8

          lg:w-[42%]
          lg:overflow-y-auto
          lg:p-10
          lg:pt-10
        "
      >

        {/* Discount */}
        <span
          className="
            inline-flex
            w-fit
            rounded-full
            bg-gray-100
            px-4
            py-1
            text-sm
            font-medium
            text-gray-700

            dark:bg-slate-800
            dark:text-gray-200
          "
        >
          Save {selectedPackage.priceOff}%
        </span>

        {/* Title */}
        <h2
          className="
            mt-4
            font-playfair
            text-3xl
            font-semibold
            text-gray-900

            sm:text-4xl

            dark:text-white
          "
        >
          {selectedPackage.title}
        </h2>

        {/* Description */}
        <p
          className="
            mt-5
            text-base
            leading-7
            text-gray-600

            sm:text-lg
            sm:leading-8

            dark:text-gray-300
          "
        >
          {selectedPackage.description}
        </p>

        {/* Includes */}
        <h3
          className="
            mt-7
            text-xl
            font-semibold
            text-gray-900

            dark:text-white
          "
        >
          Package Includes
        </h3>

        <div className="mt-5 space-y-5 pb-6">
          {selectedPackage.includes.map((include) => (
            <div
              key={include.title}
              className="flex items-center gap-4"
            >
              <img
                src={include.icon}
                alt={include.title}
                className="
                  h-7
                  w-7
                  shrink-0

                  dark:invert
                  dark:brightness-200
                "
              />

              <span
                className="
                  text-base
                  text-gray-700

                  sm:text-lg

                  dark:text-gray-200
                "
              >
                {include.title}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Right Video */}
      <div
        className="
          relative
          h-80
          w-full
          shrink-0
          bg-black

          sm:h-96

          lg:h-full
          lg:w-[58%]
        "
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
        >
          <source
            src={selectedPackage.video}
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  </div>
)}
    </section>
  );
};

export default ExclusiveOffers;
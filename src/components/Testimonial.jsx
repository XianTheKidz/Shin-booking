import Title from "./Title";
import { testimonials } from "../assets/assets";
import StarRating from "./StarRating";

const Testimonial = () => {
  return (
      <div className="flex flex-col items-center bg-white px-6 pt-20 pb-16 transition-colors dark:bg-[#020618] md:px-16 lg:px-24">
      <Title
        title="Stories From Our Guests"
        subtitle="Relaxing escapes, stunning ocean views, and unforgettable hospitality. Here's what inspired travelers have to say."
      />

      <div className="mt-16 flex flex-wrap items-center justify-center gap-6">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white dark:bg-slate-900 rounded-2xl p-7 shadow-lg border border-gray-100 dark:border-slate-800 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 max-w-sm"
          >
            <div className="flex items-center gap-3">
              <img
                className="h-12 w-12 rounded-full"
                src={testimonial.image}
                alt={testimonial.name}
              />

              <div>
                <p className="font-playfair text-xl text-slate-900 dark:text-white">
                  {testimonial.name}
                </p>

                <p className="text-slate-500 dark:text-slate-400">
                  {testimonial.address}
                </p>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-1">
              <StarRating rating={testimonial.rating} />
            </div>

            <p className="mt-5 text-[15px] leading-7 text-slate-600 dark:text-slate-300">
              {testimonial.review}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
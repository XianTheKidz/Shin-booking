import { assets } from "../assets/assets";

const StarRating = ({ rating = 5 }) => {
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, index) => {
        const starValue = index + 1;

        const isFull = rating >= starValue;
        const isHalf =
          rating >= starValue - 0.5 && rating < starValue;

        return (
          <div
            key={index}
            className="
              flex h-7 w-7 items-center justify-center
              rounded-full
              bg-cyan-50
              dark:bg-slate-800
            "
          >
            {/* Empty star */}
            {!isFull && !isHalf && (
              <img
                src={assets.starIconOutlined}
                alt="empty star"
                className="
                  h-4 w-4 object-contain
                  brightness-0 saturate-100
                  filter-[invert(76%)_sepia(91%)_saturate(800%)_hue-rotate(358deg)_brightness(96%)]
                  dark:filter-[invert(71%)_sepia(92%)_saturate(700%)_hue-rotate(145deg)_brightness(95%)]
                "
              />
            )}

            {/* Full star */}
            {isFull && (
              <img
                src={assets.starIconFilled}
                alt="filled star"
                className="
                  h-4 w-4 object-contain
                  brightness-0 saturate-100
                  filter-[invert(76%)_sepia(91%)_saturate(800%)_hue-rotate(358deg)_brightness(96%)]
                  dark:filter-[invert(71%)_sepia(92%)_saturate(700%)_hue-rotate(145deg)_brightness(95%)]
                "
              />
            )}

            {/* Half star */}
            {isHalf && (
              <img
                src={assets.starIconHalf}
                alt="half star"
                className="
                  h-4 w-4 object-contain
                  brightness-0 saturate-100
                  filter-[invert(76%)_sepia(91%)_saturate(800%)_hue-rotate(358deg)_brightness(96%)]
                  dark:filter-[invert(71%)_sepia(92%)_saturate(700%)_hue-rotate(145deg)_brightness(95%)]
                "
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default StarRating;
const Title = ({ title, subtitle, align, font, animated }) => {
  return (
    <div
      className={`flex flex-col justify-center items-center text-center ${
        align === "left" ? "md:items-start md:text-left" : ""
      }`}
    >
      <h1
        className={`text-4xl md:text-[40px] ${
          font || "font-playfair"
        } ${
          animated
          ? "animated-gradient-text"
          : "text-gray-900 dark:text-white"
        }`}
      >
        {title}
      </h1>

      <p className="text-sm md:text-base text-gray-500 dark:text-gray-300 mt-2 max-w-2xl">
        {subtitle}
      </p>
    </div>
  );
};

export default Title;
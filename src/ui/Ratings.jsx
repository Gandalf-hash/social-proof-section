import React from "react";

function Ratings() {
  const items = [
    {
      text: "Rated 5 Stars in Reviews",
      icon: "/images/icon-star.svg",
    },
    {
      text: "Rated 5 Stars in Report Guru",
      icon: "/images/icon-star.svg",
    },
    {
      text: "Rated 5 Stars in BestTech",
      icon: "/images/icon-star.svg",
    },
  ];

  return (
    <div className="w-full">
      <div className="flex flex-col gap-4  max-w-xl">
        {items.map((item, index) => (
          <div
            key={index}
            className={`flex flex-row w-full justify-center max-w-xl lg:gap-2 pr-6 border-none items-center rounded-xl bg-cream py-4 ${
              index === 1 ? "lg:ml-16" : index === 2 ? "lg:ml-32" : ""
            }`}
          >
            {[...Array(5)].map((_, i) => (
              <img key={i} src={item.icon} alt="" />
            ))}
            <span className="lg:text-xl text-sm ml-4 lg:ml-6 font-bold text-primary-color">
              {item.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Ratings;

import React from "react";
import { items } from "../data";

function UserRatings() {
  return (
    <div className="flex w-full flex-col gap-4 max-w-xl">
      {items.map((item, index) => (
        <div
          key={index}
          className={`flex w-full lg:flex-row xl:justify-center justify-start max-w-xl gap-2 xl:pr-6 border-none items-center rounded-xl bg-cream py-4 ${
            index === 1 ? "lg:ml-16" : index === 2 ? "lg:ml-32" : ""
          } ${index >= 0 ? "flex-col" : "flex-row"}`}
        >
          <div className="flex flex-row gap-2">
            {[...Array(5)].map((_, i) => (
              <img key={i} src={item.icon} alt="" />
            ))}
          </div>
          <span className="lg:text-xl text-sm lg:ml-6 font-bold text-primary-color">
            {item.text}
          </span>
        </div>
      ))}
    </div>
  );
}

export default UserRatings;

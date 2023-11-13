import React from "react";
import { userReviews } from "../data";

function UserReviews() {
  return (
    <div className="md:flex-row grow flex flex-col gap-8 max-w-full w-full items-center justify-center">
      {userReviews.map((review, index) => (
        <div
          key={index}
          className={`w-full lg:h-[280px] text-start flex flex-col rounded-xl max-w-md  bg-primary-color text-white px-10 py-10 ${
            index === 1 ? "lg:mt-6" : index === 2 ? "lg:mt-14" : ""
          }`}
        >
          <div className="flex flex-row mb-8 items-center justify-start">
            <img
              className="rounded-[50%] w-14 h-14"
              src={review.userImage}
              alt={`${review.userName}' Profile Pic`}
            />
            <div className="flex flex-col ml-6">
              <span className="font-bold text-xl">{review.userName}</span>
              <span className="text-description text-[18px] font-bold">
                {review.description}
              </span>
            </div>
          </div>
          <p>&ldquo;{review.review}&rdquo;</p>
        </div>
      ))}
    </div>
  );
}

export default UserReviews;

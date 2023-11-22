import React from "react";
import { userReviews } from "../data";

function UserReviews() {
  return (
    <div className="md:flex-row grow flex flex-col gap-8 items-center justify-center">
      {userReviews.map((review, index) => (
        <div
          key={index}
          className={`w-full text-start md:max-h-60 xl:h-[200px] flex flex-col rounded-xl max-w-3xl p-4  bg-primary-color text-white ${
            index === 1 ? "md:mt-6" : index === 2 ? "md:mt-14" : ""
          }`}
        >
          <div className="flex flex-row mb-4 items-center justify-start">
            <img
              className="rounded-[50%] w-14 h-14"
              src={review.userImage}
              alt={`${review.userName}' Profile Pic`}
            />
            <div className="flex flex-col ml-6">
              <span className="font-bold text-xl">{review.userName}</span>
              <span className="text-description font-bold">
                {review.description}
              </span>
            </div>
          </div>
          <p className="text-sm lg:text-base">&ldquo;{review.review}&rdquo;</p>
        </div>
      ))}
    </div>
  );
}

export default UserReviews;

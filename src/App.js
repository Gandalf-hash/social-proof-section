import UserRatings from "./ui/user-ratings";
import UserReviews from "./ui/user-reviews";

function App() {
  return (
    <div className="flex md:h-screen md:items-center text-center md:text-start p-6 flex-col w-full max-w-full xl:pt-28">
      <div className="flex md:flex-row w-full xl:max-w-7xl flex-col justify-center lg:justify-between">
        <div className="w-full flex flex-col gap-10  items-center mb-14 md:max-w-xs lg:max-w-md">
          <h1 className="font-bold text-primary-color lg:text-6xl mt-10 md:mt-0 md:max-w-md max-w-xs w-full text-4xl">
            10,000+ of our users love our products.
          </h1>
          <p className="text-xl tracking-tighter text-primary-color">
            We only provide great products combined with excellent customer
            service. See what our satisfied customers are saying about our
            services.
          </p>
        </div>
        <div className="xl:mr-40 xl:mb-20 flex justify-start place-items-start lg:mt-12">
          <UserRatings />
        </div>
      </div>
      <div className="mt-10 xl:mt-0 xl:max-w-7xl">
        <UserReviews></UserReviews>
      </div>
    </div>
  );
}

export default App;

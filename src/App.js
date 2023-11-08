import Ratings from "./ui/Ratings";

function App() {
  return (
    <div className="flex text-center md:text-start flex-col w-full max-w-full p-6 xl:px-20 xl:py-28">
      <div className="flex md:flex-row flex-col justify-between">
        <div className="w-full flex flex-col gap-10 max-w-sm lg:max-w-md">
          <h1 className="font-bold text-primary-color lg:text-6xl text-4xl">
            10,000+ of our users love our products.
          </h1>
          <p className="md:text-xl tracking-tighter  text-primary-color">
            We only provide great products combined with excellent customer
            service. See what our satisfied customers are saying about our
            services.
          </p>
        </div>
        <div className="xl:mr-40 xl:mb-20 flex justify-start  items-start lg:mt-12">
          <Ratings />
        </div>
      </div>
    </div>
  );
}

export default App;

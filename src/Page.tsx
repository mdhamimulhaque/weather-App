import { useContext } from "react";
import Header from "./components/Header/Header";
import WeatherBoard from "./components/Weather/WeatherBoard";
import { WeatherContext } from "./context";

const Page = () => {
  const { loading } = useContext(WeatherContext);

  return (
    <>
      {loading.state ? (
        <div className="flex bg-gray-200 rounded-md w-96 p-8 mt-14 mx-auto">
          <p className="text-center text-3xl text-black">{loading.message}</p>
        </div>
      ) : (
        <div className="grid place-items-center h-screen bg-no-repeat bg-cover">
          <Header />
          <main>
            <section>
              <WeatherBoard />
            </section>
          </main>
        </div>
      )}
    </>
  );
};

export default Page;

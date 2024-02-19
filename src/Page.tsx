import Header from "./components/Header/Header";
import WeatherBoard from "./components/Weather/WeatherBoard";

const Page = () => {
  return (
    <>
      <Header />
      <main>
        <section>
          <WeatherBoard />
        </section>
      </main>
    </>
  );
};

export default Page;

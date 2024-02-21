import Page from "./Page";
import { useWeather } from "./hooks";

const App = () => {
  const { weatherData } = useWeather();
  console.log(weatherData);
  return (
    <div>
      <Page />
    </div>
  );
};

export default App;

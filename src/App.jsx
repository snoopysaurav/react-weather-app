import { useState } from "react";
import SearchBar from "./components/searchBar";
import { WeatherContext } from "./utils/weatherContext";
import useApi from "./utils/useApi";
import CurrentForecast from "./components/currentForecast";
const API_KEY = "34480b98aa332da53123a0ac63a4ea9d";
export default function WeatherApp() {
  const [city, setCity] = useState("biratnagar");
  const data = useApi(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
  );
  return (
    <>
      <WeatherContext.Provider value={data}>
        <SearchBar />
        <CurrentForecast />
      </WeatherContext.Provider>
    </>
  );
}

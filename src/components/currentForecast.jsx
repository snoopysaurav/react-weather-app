import { useContext } from "react";
import { WeatherContext } from "../utils/weatherContext";

export default function CurrentForecast() {
  const weatherData = useContext(WeatherContext);
  console.log("Weather Data: ", weatherData);
  return (
    <>
      <div className="flex justify-center items-center flex-col">
        <span>{weatherData.main.temp}</span>
      </div>
    </>
  );
}

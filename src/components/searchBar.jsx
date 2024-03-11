import { useContext } from "react";
import { WeatherContext } from "../utils/weatherContext";

export default function SearchBar() {
  const weatherData = useContext(WeatherContext);
  console.log(weatherData);
  function onFormSubmit(e) {
    e.preventDefault();
  }
  return (
    <>
      <div className="bg-slate-100 font-medium p-4 flex justify-center items-center">
        <form onSubmit={onFormSubmit}>
          <input
            type="text"
            className="p-4 w-96 font-normal text-lg placeholder:font-normal rounded-md rounded-tr-none rounded-br-none shadow-sm focus:outline-none outline-none border-none text-slate-500"
            placeholder="Enter a Location"
            required
          />
          <input
            type="submit"
            value="Search"
            className="font:normal p-4 bg-slate-300 shadow-sm text-lg hover:cursor-pointer rounded-sm font-normal hover:bg-slate-200 transition-colors text-slate-700"
          />
        </form>
        {weatherData.weather[0].description}
      </div>
    </>
  );
}

import { FaDroplet } from "react-icons/fa6";
import { FaWind } from "react-icons/fa";
import { LuSun } from "react-icons/lu";
import { FaMoon } from "react-icons/fa";
import { Weather } from "../App";

type DetailProp = {
  weather: Weather;
  tempUnit: boolean;
}

const Detail = ({ weather, tempUnit }: DetailProp) => {
  const tempSymbol = tempUnit ? 'C°' : 'F°';

  return (
    <>
      <div className="sm:flex sm:gap-5">
        <div className="bg-zinc-950 bg-opacity-60 text-white flex flex-col items-center justify-center rounded-lg py-7 mb-5 relative z-1 sm:w-6/12">
          <p className="text-5xl mb-2.5">{tempUnit ? weather.tempC : weather.tempF}{tempSymbol}</p>
          <p className="text-xl mb-7">{weather.condition}</p>
          <div className="flex justify-center gap-4 w-full text-center">
            <p className="text-base">High / Low</p>
            <p className="text-base">{tempUnit ? weather.highC : weather.highF}° / {tempUnit ? weather.lowC : weather.lowF}°</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2.5 mb-5 relative z-1 sm:w-6/12">
          <div className="bg-zinc-950 bg-opacity-60 text-white rounded-lg py-5 grid grid-rows-2 grid-flow-col">
            <div className="row-span-2 flex justify-center items-center"><FaDroplet /></div>
            <p>{weather.humidity}%</p>
            <p className="text-sm">Humidity</p>
          </div>
          <div className="bg-zinc-950 bg-opacity-60 text-white rounded-lg py-5 grid grid-rows-2 grid-flow-col">
          <div className="row-span-2 flex justify-center items-center"><FaWind /></div>
            <p>{weather.wind}km/h</p>
            <p className="text-sm">Wind</p>
          </div>
          <div className="bg-zinc-950 bg-opacity-60 text-white rounded-lg py-5 grid grid-rows-2 grid-flow-col">
          <div className="row-span-2 flex justify-center items-center"><LuSun /></div>
            <p>{weather.uv}</p>
            <p className="text-sm">UV Index</p>
          </div>
          <div className="bg-zinc-950 bg-opacity-60 text-white rounded-lg py-5 grid grid-rows-2 grid-flow-col">
          <div className="row-span-2 flex justify-center items-center min-w-10"><FaMoon /></div>
            <p>{weather.moon}</p>
            <p className="text-sm">Moon Phase</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Detail
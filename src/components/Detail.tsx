import { FaDroplet } from "react-icons/fa6";
import { FaWind } from "react-icons/fa";
import { LuSun } from "react-icons/lu";
import { FaMoon } from "react-icons/fa";
import { Weather } from "../App";

interface DetailProp {
  weather: Weather | undefined;
}

const Detail: React.FC<DetailProp> = ({ weather }) => {

  return (
    <>
      <div className="sm:flex sm:gap-10">
        <div className="bg-zinc-950 bg-opacity-60 text-white text-center rounded-lg py-7 mb-5 relative z-1 sm:w-6/12">
          <div className="text-5xl mb-2.5">{weather?.temp}°C</div>
          <div className="text-xl mb-7">{weather?.condition}</div>
          <div className="text-base">High / Low   {weather?.high}°/ {weather?.low}°</div>
        </div>
        <div className="grid grid-cols-2 gap-2.5 mb-5 relative z-1 sm:sm:w-6/12">
          <div className="bg-zinc-950 bg-opacity-60 text-white rounded-lg py-5 grid grid-rows-2 grid-flow-col">
            <div className="row-span-2 flex justify-center items-center"><FaDroplet /></div>
            <p>{weather?.humidity}%</p>
            <p className="text-sm">Humidity</p>
          </div>
          <div className="bg-zinc-950 bg-opacity-60 text-white rounded-lg py-5 grid grid-rows-2 grid-flow-col">
          <div className="row-span-2 flex justify-center items-center"><FaWind /></div>
            <p>{weather?.wind}km/h</p>
            <p className="text-sm">Wind</p>
          </div>
          <div className="bg-zinc-950 bg-opacity-60 text-white rounded-lg py-5 grid grid-rows-2 grid-flow-col">
          <div className="row-span-2 flex justify-center items-center"><LuSun /></div>
            <p>{weather?.uv}</p>
            <p className="text-sm">UV Index</p>
          </div>
          <div className="bg-zinc-950 bg-opacity-60 text-white rounded-lg py-5 grid grid-rows-2 grid-flow-col">
          <div className="row-span-2 flex justify-center items-center"><FaMoon /></div>
            <p>{weather?.moon}</p>
            <p className="text-sm">Moon Phase</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Detail
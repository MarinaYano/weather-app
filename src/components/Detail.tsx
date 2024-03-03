import { FaDroplet } from "react-icons/fa6";
import { FaWind } from "react-icons/fa";
import { LuSun } from "react-icons/lu";
import { FaMoon } from "react-icons/fa";

const Detail = () => {
  return (
    <>
      <div className="sm:flex sm:gap-10">
        <div className="bg-zinc-950 bg-opacity-60 text-white text-center rounded-lg py-7 mb-5 relative z-1 sm:w-6/12">
          <div className="text-5xl mb-2.5">4C°</div>
          <div className="text-xl mb-7">Mostly Cloudy</div>
          <div className="text-base">High / Low   4.2 / 1.2</div>
        </div>
        <div className="grid grid-cols-2 gap-2.5 mb-5 relative z-1 sm:sm:w-6/12">
          <div className="bg-zinc-950 bg-opacity-60 text-white rounded-lg py-5 grid grid-rows-2 grid-flow-col">
            <div className="row-span-2 flex justify-center items-center"><FaDroplet /></div>
            <p>100%</p>
            <p className="text-sm">Humidity</p>
          </div>
          <div className="bg-zinc-950 bg-opacity-60 text-white rounded-lg py-5 grid grid-rows-2 grid-flow-col">
          <div className="row-span-2 flex justify-center items-center"><FaWind /></div>
            <p>6.8km/h</p>
            <p className="text-sm">Wind</p>
          </div>
          <div className="bg-zinc-950 bg-opacity-60 text-white rounded-lg py-5 grid grid-rows-2 grid-flow-col">
          <div className="row-span-2 flex justify-center items-center"><LuSun /></div>
            <p>1</p>
            <p className="text-sm">UV Index</p>
          </div>
          <div className="bg-zinc-950 bg-opacity-60 text-white rounded-lg py-5 grid grid-rows-2 grid-flow-col">
          <div className="row-span-2 flex justify-center items-center"><FaMoon /></div>
            <p>Waning Gibbous</p>
            <p className="text-sm">Moon Phase</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Detail
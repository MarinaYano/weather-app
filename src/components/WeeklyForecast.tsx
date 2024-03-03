import { FaCloud } from "react-icons/fa";

const WeeklyForecast = () => {
  return (
    <div className="relative z-1 mb-5">
      <h3 className="text-lg font-medium text-white mb-2.5">Weekly Forecast</h3>
      <div className="flex gap-5 overflow-scroll">
        <div className="bg-zinc-950 bg-opacity-60 text-white rounded-lg flex flex-col items-center justify-between min-w-32 py-3 h-48">
          <p>Fri</p>
          <div className="text-center">
            <p className="text-xl">4°</p>
            <p className="text-sm">1°</p>
          </div>
          <FaCloud />
          <p className="text-sm">20%</p>
        </div>
        <div className="bg-zinc-950 bg-opacity-60 text-white rounded-lg flex flex-col items-center justify-between min-w-32 py-3 h-48">
          <p>Fri</p>
          <div className="text-center">
            <p className="font-semibold text-xl">4C°</p>
            <p className="text-sm">1C°</p>
          </div>
          <FaCloud />
          <p className="text-sm">20%</p>
        </div>
        <div className="bg-zinc-950 bg-opacity-60 text-white rounded-lg flex flex-col items-center justify-between min-w-32 py-3 h-48">
          <p>Fri</p>
          <div className="text-center">
            <p className="font-semibold text-xl">4C°</p>
            <p className="text-sm">1C°</p>
          </div>
          <FaCloud />
          <p className="text-sm">20%</p>
        </div>
        <div className="bg-zinc-950 bg-opacity-60 text-white rounded-lg flex flex-col items-center justify-between min-w-32 py-3 h-48">
          <p>Fri</p>
          <div className="text-center">
            <p className="font-semibold text-xl">4C°</p>
            <p className="text-sm">1C°</p>
          </div>
          <FaCloud />
          <p className="text-sm">20%</p>
        </div>
        <div className="bg-zinc-950 bg-opacity-60 text-white rounded-lg flex flex-col items-center justify-between min-w-32 py-3 h-48">
          <p>Fri</p>
          <div className="text-center">
            <p className="font-semibold text-xl">4C°</p>
            <p className="text-sm">1C°</p>
          </div>
          <FaCloud />
          <p className="text-sm">20%</p>
        </div>
        
      </div>
    </div>
  )
}

export default WeeklyForecast
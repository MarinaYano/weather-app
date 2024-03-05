import { Hour } from "../App";
// import { Line } from "react-chartjs-2";
// import 'chart.js/auto';

type HourlyForecastProp = {
  hourData: Hour[];
}

const HourlyForecast: React.FC<HourlyForecastProp> = ({ hourData }) => {

  return (
    <div className="relative z-1 mb-5">
      <h3 className="text-lg font-medium text-white mb-2.5">Hourly Forecast</h3>
      <div className="flex gap-5 overflow-scroll">
        {hourData.map((hour: any, index: any) => {
          const formattedTime = new Date(hour.time).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', hour12: true })
          return (
            <div key={index} className="bg-zinc-950 bg-opacity-60 text-white text-center rounded-lg flex flex-col items-center justify-between min-w-32 py-3 h-48">
              <p className="text-xl">{formattedTime}</p>
              <p className="text-lg">{hour.temp_c}°</p>
              <img src={hour.icon} alt="icon" />
              <p>{hour.chanceOfRain}%</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default HourlyForecast
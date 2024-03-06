import { Hour } from "../App";
interface HourlyForecastProp {
  hourData: Hour[];
  tempUnit: boolean;
}

const HourlyForecast: React.FC<HourlyForecastProp> = ({ hourData, tempUnit }) => {

  return (
    <div className="relative z-1 mb-5">
      <h3 className="text-lg font-medium text-white mb-2.5">Hourly Forecast</h3>
      <div className="flex gap-5 overflow-scroll">
        {hourData.map((hour: any, index: any) => {
          const formattedTime = new Date(hour.time).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', hour12: true })
          return (
            <div key={index} className="bg-zinc-950 bg-opacity-60 text-white text-center rounded-lg flex flex-col items-center justify-between min-w-32 py-3 h-48">
              <p className="text-xl">{formattedTime}</p>
              <p className="text-lg">{tempUnit ? hour.tempC : hour.tempF}°</p>
              <img src={hour.icon} alt="icon" />
              <p>{hour.chanceOfRain}%</p>
            </div>
          )
        })}
      </div>
      <div className="mt-5">
      </div>
    </div>
  )
}

export default HourlyForecast
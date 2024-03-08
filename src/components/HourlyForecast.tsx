import { Hour, Weather } from "../App";
import HourlyForecastCard from "./HourlyForecastCard";

type HourlyForecastProp = {
  hourData: Hour[];
  tempUnit: boolean;
  weather: Weather;
}

const HourlyForecast = ({ hourData, tempUnit, weather }: HourlyForecastProp) => {
  return (
    <div className="relative z-1 mb-5">
      <h3 className="text-lg font-medium text-white mb-2.5">Hourly Forecast</h3>
      <div className="flex gap-5 overflow-scroll">
        {hourData.map((hour: any, index: any) => (
          <HourlyForecastCard tempUnit={tempUnit} weather={weather} key={index} hour={hour} />
        )
        )}
      </div>
      <div className="mt-5">
      </div>
    </div>
  )
}

export default HourlyForecast
import { Hour, Weather } from "../App"

type HourlyForecastCardProp = {
  hour: Hour;
  weather: Weather;
  tempUnit: boolean;
}

const HourlyForecastCard = ({ hour, tempUnit, weather }: HourlyForecastCardProp) => {

  const currentHour = new Date(weather.localTime)
  const currentTime = new Date(currentHour.setMinutes(0)).toLocaleTimeString([], {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });
  const formattedTime = new Date(hour.time).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', hour12: true })

  return (
    <>
      <div className={`${
        formattedTime === currentTime
          ? 'bg-zinc-200 bg-opacity-50'
          : 'bg-zinc-950 text-white'
      } bg-opacity-60 text-center rounded-lg flex flex-col items-center justify-between min-w-32 py-3 h-48`}>
        <p className="">{formattedTime}</p>
        <p className="text-lg">{tempUnit ? hour.tempC : hour.tempF}°</p>
        <img src={hour.icon} alt="icon" />
        <p>{hour.chanceOfRain}%</p>
      </div>
    </>
  )
}

export default HourlyForecastCard
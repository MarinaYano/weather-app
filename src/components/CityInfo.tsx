import { Weather } from '../App'

interface CityInfoProp {
  weather: Weather;
}

const CityInfo: React.FC<CityInfoProp> = ({ weather }) => {
  const formattedTime = new Date(weather.localTime).toLocaleDateString([], { month: 'long', day: 'numeric', hour: 'numeric', minute: '2-digit', hour12: true })

  return (
    <div className="w-full text-center my-5 relative z-1">
      <h1 className="text-xl text-white sm:text-4xl sm:mb-2">{weather?.cityName}</h1>
      <p className="text-sm text-white sm:text-base">{formattedTime}</p>
    </div>
  )
}

export default CityInfo
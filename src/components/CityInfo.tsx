import { Weather } from '../App'

interface CityInfoProp {
  weather: Weather | undefined;
}

const CityInfo: React.FC<CityInfoProp> = ({ weather }) => {
  return (
    <div className="w-full text-center my-5 relative z-1">
      <h1 className="text-xl text-white sm:text-4xl sm:mb-2">{weather?.cityName}</h1>
      <p className="text-sm text-white sm:text-base">{weather?.localTime}</p>
    </div>
  )
}

export default CityInfo
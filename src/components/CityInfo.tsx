import { Weather } from '../App'

type CityInfoProp = {
  weather: Weather;
}

const CityInfo = ({ weather }: CityInfoProp) => {
  const formattedTime = new Date(weather.localTime).toLocaleDateString([], { month: 'long', day: 'numeric', hour: 'numeric', minute: '2-digit', hour12: true })

  return (
    <div className="w-full text-center my-5 relative z-1">
      <div className='rounded-lg bg-zinc-950 bg-opacity-60 py-3 w-80 my-0 mx-auto'>
        <h1 className="text-xl text-white sm:text-4xl sm:mb-2">{weather?.cityName}</h1>
        <p className="text-sm text-white sm:text-base">{formattedTime}</p>
      </div>
    </div>
  )
}

export default CityInfo
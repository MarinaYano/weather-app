import { FaDroplet } from "react-icons/fa6";
import { FaWind } from "react-icons/fa";
import { LuSun } from "react-icons/lu";
import { FaMoon } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";

type Weather = {
  temp: number;
  condition: string;
  high: number;
  low: number;
  humidity: number;
  wind: number;
  uv: number;
  moon: string;
}

const Detail = () => {
  const [weather, setWeather] = useState<Weather>()
  
  useEffect(() => {
    fetchWeatherInfo('Vancouver')
  }, [])

  const fetchWeatherInfo = (query: string) => {
    const WEATHER_API_KEY = import.meta.env.REACT_APP_WEATHER_API_KEY
  
    axios.get(`https://api.weatherapi.com/v1/forecast.json?key=658fea5a068e4df9ac624224232811&q=${query}&days=3`)
      .then(res => {
        console.log(res.data)
        setWeather({
          temp: res.data.current.temp_c,
          condition: res.data.current.condition.text,
          high: res.data.forecast.forecastday[0].day.maxtemp_c,
          low: res.data.forecast.forecastday[0].day.mintemp_c,
          humidity: res.data.current.humidity,
          wind: res.data.current.wind_kph,
          uv: res.data.current.uv,
          moon: res.data.forecast.forecastday[0].astro.moon_phase,
        })
      })
      .catch((error) => {
        console.log("ERROR: ", error.message)
      })
  }

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
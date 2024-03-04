import './App.css'
import Background from './components/Background'
import Detail from './components/Detail'
import Search from './components/Search'
import HourlyForecast from './components/HourlyForecast'
import { useEffect, useState } from "react";
import axios from "axios";
import CityInfo from './components/CityInfo'

export type Weather = {
  temp: number;
  condition: string;
  high: number;
  low: number;
  humidity: number;
  wind: number;
  uv: number;
  moon: string;
  cityName: string;
  localTime: string;
}

function App() {
  const [weather, setWeather] = useState<Weather>()

  const fetchWeatherInfo = (input: string) => {
    const WEATHER_API_KEY = import.meta.env.VITE_APP_WEATHER_API_KEY
  
    axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${WEATHER_API_KEY}&q=${input}&days=3`)
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
          cityName: res.data.location.name,
          localTime: res.data.location.localtime
        })
      })
      .catch((error) => {
        console.log("ERROR: ", error.message)
      })
  }

  useEffect(() => {
    fetchWeatherInfo("Vancouver")
  }, [])

  return (
    <div className='w-10/12 sm:max-w-screen-lg my-0 mx-auto h-screen overflow-scroll'>
      <Background weather={weather} />
      <Search onSearch={fetchWeatherInfo} />
      <CityInfo weather={weather} />
      <Detail weather={weather} />
      <HourlyForecast />
    </div>
  )
}

export default App
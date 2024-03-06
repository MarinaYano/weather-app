import './App.css'
import Background from './components/Background'
import Search from './components/Search'
import CityInfo from './components/CityInfo'
import Detail from './components/Detail'
import HourlyForecast from './components/HourlyForecast'
import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from './components/Spinner'
import Error from './components/Error'

export interface Weather {
  tempC: number;
  tempF: number;
  condition: string;
  highC: number;
  lowC: number;
  highF: number;
  lowF: number;
  humidity: number;
  wind: number;
  uv: number;
  moon: string;
  cityName: string;
  localTime: string;
}

export interface Hour {
  chanceOfRain: number;
  icon: string;
  tempC: number;
  tempF: number;
  time: string;
};

function App() {
  const [weather, setWeather] = useState<Weather>({
    tempC: 0,
    tempF: 0,
    condition: '',
    highC: 0,
    lowC: 0,
    highF: 0,
    lowF: 0,
    humidity: 0,
    wind: 0,
    uv: 0,
    moon: '',
    cityName: '',
    localTime: '',
  })
  const [hourData, setHourData] = useState<Hour[]>([{
    chanceOfRain: 0,
    icon: '',
    tempC: 0,
    tempF: 0,
    time: '',
  }])
  const [tempUnit, setTempUnit] =useState<boolean>(true)
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null)

  const fetchWeatherInfo = (input: string) => {
    setLoading(true)
    setError(null)
    const WEATHER_API_KEY = import.meta.env.VITE_APP_WEATHER_API_KEY
  
    axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${WEATHER_API_KEY}&q=${input}&days=3`)
      .then(res => {
        setWeather({
          tempC: res.data.current.temp_c,
          tempF: res.data.current.temp_f,
          condition: res.data.current.condition.text,
          highC: res.data.forecast.forecastday[0].day.maxtemp_c,
          lowC: res.data.forecast.forecastday[0].day.mintemp_c,
          highF: res.data.forecast.forecastday[0].day.maxtemp_f,
          lowF: res.data.forecast.forecastday[0].day.mintemp_f,
          humidity: res.data.current.humidity,
          wind: res.data.current.wind_kph,
          uv: res.data.current.uv,
          moon: res.data.forecast.forecastday[0].astro.moon_phase,
          cityName: res.data.location.name,
          localTime: res.data.location.localtime,
        })

        const hourlyForecasts = res.data.forecast.forecastday[0].hour;
        setHourData(hourlyForecasts.map((hour: any) => ({
          chanceOfRain: hour.chance_of_rain,
          icon: hour.condition.icon,
          tempC: hour.temp_c,
          tempF: hour.temp_f,
          time: hour.time,
        })));
        setLoading(false)
      })
      .catch((error) => {
        console.log("ERROR: ", error.message)
        setError("An error occurred while fetching weather data.")
      })
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    fetchWeatherInfo("Vancouver")
  }, [])

  const handleTempUnit = () => {
    setTempUnit(!tempUnit)
  }
  const tempSymbol = tempUnit ? 'F°' : 'C°';

  return (
    <div className='w-10/12 sm:max-w-screen-lg my-0 mx-auto h-screen overflow-scroll'>
      {loading ? (
        <>
          <Search onSearch={fetchWeatherInfo} />
          <Spinner />
        </>
        ) : error ? (
          <div className='w-full flex flex-col items-center'>
            <Background weather={weather} />
            <Search onSearch={fetchWeatherInfo} />
            <Error />
          </div>
        ) : (<>
        <Background weather={weather} />
        <Search onSearch={fetchWeatherInfo} />
          <div className='relative z-1 text-white flex justify-center w-full mt-5'>
            <button onClick={handleTempUnit} className='bg-zinc-950 bg-opacity-60 py-1 px-2 rounded-lg' >{tempSymbol}</button>
          </div>
        <CityInfo weather={weather} />
        <Detail weather={weather} tempUnit={tempUnit} />
        <HourlyForecast hourData={hourData} tempUnit={tempUnit} /></>)
      }
    </div>
  )
}

export default App
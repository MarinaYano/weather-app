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
  temp_c: number;
  temp_f: number;
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

export interface Hour {
  chanceOfRain: number;
  icon: string;
  temp_c: number;
  temp_f: number;
  time: string;
};

function App() {
  const [weather, setWeather] = useState<Weather>({
    temp_c: 0,
    temp_f: 0,
    condition: '',
    high: 0,
    low: 0,
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
    temp_c: 0,
    temp_f: 0,
    time: '',
  }])
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null)

  const fetchWeatherInfo = (input: string) => {
    setLoading(true)
    setError(null)
    const WEATHER_API_KEY = import.meta.env.VITE_APP_WEATHER_API_KEY
  
    axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${WEATHER_API_KEY}&q=${input}&days=3`)
      .then(res => {
        setWeather({
          temp_c: res.data.current.temp_c,
          temp_f: res.data.current.temp_f,
          condition: res.data.current.condition.text,
          high: res.data.forecast.forecastday[0].day.maxtemp_c,
          low: res.data.forecast.forecastday[0].day.mintemp_c,
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
          temp_c: hour.temp_c,
          temp_f: hour.temp_f,
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
        <CityInfo weather={weather} />
        <Detail weather={weather} />
        <HourlyForecast hourData={hourData} /></>)
      }
      
    </div>
  )
}

export default App
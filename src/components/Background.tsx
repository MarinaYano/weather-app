import { useEffect, useState } from "react";
import { Weather } from "../App";
import axios from "axios";
import Spinner from "./Spinner";

interface BgProp {
  weather: Weather;
}

const Background: React.FC<BgProp> = ({ weather}) => {
  const [loading, setLoading] = useState<boolean>(false)
  const [bgImage, setBgImage] =useState<string>('')

  useEffect(() => {
    fetchBgImage()
  }, [])

  const fetchBgImage = () => {
    setLoading(true)

    const BG_IMAGE_API_KEY = import.meta.env.VITE_APP_BG_IMAGE_API_KEY
    const headers = {
      Authorization: `Client-ID ${BG_IMAGE_API_KEY}`,
    };

    axios.get(`https://api.unsplash.com/search/photos`,{
      headers, params: {
        query: `${weather.cityName},${weather.condition}`,
        orientation: 'landscape',
      } 
    })
      .then(res => {
        const randomNum = Math.floor(Math.random() * 10)
        setBgImage(res.data.results[randomNum].urls.regular)
        setLoading(false)
      })
      .catch((error) => {console.log("ERROR: ", error.message)})
      .finally(() => {setLoading(false)})
  }

  return (
    <div className="h-full w-full bg-cover absolute top-0 left-0 z-99">
      {loading ? (
        <Spinner />
      ) : (
        <div style={{backgroundImage: `url(${bgImage})`}} className=" h-full w-full bg-cover"></div>
      )}
    </div>
  )
}

export default Background
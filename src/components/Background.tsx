import { Weather } from "../App";

interface BgProp {
  weather: Weather | undefined;
}

const Background: React.FC<BgProp> = ({ weather }) => {
  return (
    <div style={{backgroundImage: `url(https://source.unsplash.com/1600x900/?${weather?.cityName})`}} className=" h-full w-full bg-cover absolute top-0 left-0 z-99">
    </div>
  )
}

export default Background

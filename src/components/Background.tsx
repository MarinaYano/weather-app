// import { useEffect, useState } from "react"

const Background = () => {
  // const [video, setVideo] = useState<string>('')
  // useEffect(() => {
  //   fetchVideo('sunny')
  // }, [])

  // const fetchVideo = async (query: string) => {
  //   const videoApiKey = "ojuQefv1lHLel7nJWsAyAFD8j51ivMi2Bpl0NFl1GJPLc9SdpwYn3NFc"
  //   const res = await fetch(`https://api.pexels.com/videos/search?query=${query}`, {
  //     headers: {
  //       Authorization: `${videoApiKey}`,
  //     },
  //     credentials: "same-origin",
  //   })

  //   if (!res.ok) {
  //     throw new Error(`Failed to fetch video: ${res.status} - ${res.statusText}`);
  //   }

  //   const data = await res.json()
  //   setVideo(data.videos[0].url)
  // }
  return (
    // <video 
    //   autoPlay muted loop src={video} 
    //   className="w-full h-full object-cover fixed top-0 left-0 z-01"
    // />
    <div className="bg-[url('/bg.png')] h-full w-full bg-cover absolute top-0 left-0 z-99">
    </div>
  )
}

export default Background
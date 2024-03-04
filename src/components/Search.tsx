import { SetStateAction, useState } from "react";
import { FiSearch } from "react-icons/fi";

interface SearchProp {
  onSearch: (city: string) => void
}

const Search: React.FC<SearchProp> = ({ onSearch }) => {
  const [city, setCity] = useState<string>("")

  const handleChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setCity(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSearch(city)
    setCity("")
  }

  return (
    <>
      <div className="mt-10 relative z-1">
        <div className="w-full flex justify-center">
          <form 
            className="rounded-lg bg-zinc-950 bg-opacity-60 py-1 px-4 flex justify-between w-80"
            onSubmit={handleSubmit}
            >
            <input 
              type="text" 
              placeholder="Enter a city name" 
              className="bg-transparent w-full"
              value={city}
              onChange={handleChange}
            />
            <button type="submit" className="text-zinc-400	"><FiSearch /></button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Search
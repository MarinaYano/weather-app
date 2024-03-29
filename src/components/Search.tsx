import { ChangeEvent, FormEvent, useState } from "react";
import { FiSearch } from "react-icons/fi";

type SearchProp = {
  onSearch: (city: string) => void
}

const Search = ({ onSearch }: SearchProp) => {
  const [city, setCity] = useState<string>("")

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value)
  }

  const handleSubmit = (e: FormEvent) => {
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
              className="bg-transparent w-full outline-none text-white"
              value={city}
              onChange={handleInputChange}
            />
            <button type="submit" className="text-white	"><FiSearch /></button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Search
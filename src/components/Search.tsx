import { FiSearch } from "react-icons/fi";

const Search = () => {
  return (
    <div className="mt-10 relative z-1">
      <div className="w-full flex justify-center">
        <form className="border-solid border-2 rounded-lg border-zinc-400 py-1 px-4 flex justify-between w-80">
          <input type="text" placeholder="Enter a city name" className="bg-transparent w-full" />
          <button className="text-zinc-400	"><FiSearch /></button>
        </form>
      </div>
      <div className="w-full text-center my-5">
        <h1 className="text-xl text-white sm:text-4xl sm:mb-2">Vancouver</h1>
        <p className="text-sm text-white sm:text-base">2024-03-02 6:19 PM</p>
      </div>
    </div>
  )
}

export default Search
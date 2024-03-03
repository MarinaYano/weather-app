import './App.css'
import Background from './components/Background'
import Detail from './components/Detail'
import Search from './components/Search'
import WeeklyForecast from './components/WeeklyForecast'

function App() {

  return (
    <div className='w-10/12 sm:max-w-screen-lg my-0 mx-auto h-screen overflow-scroll'>
      <Background />
      <Search />
      <Detail />
      <WeeklyForecast />
    </div>
  )
}

export default App

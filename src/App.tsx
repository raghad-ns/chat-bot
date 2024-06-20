
import './App.css'
import { SideBar } from './components'

function App() {

  return (
    <>
      <div className='grid grid-cols-5 max-h-full hide-scrollbar'>
        <SideBar />
        <div className='col-span-4'>

        </div>
      </div>
    </>
  )
}

export default App

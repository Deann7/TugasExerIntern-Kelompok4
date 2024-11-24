import './App.css'
import './components/Tengah'
import Tengah from './components/Tengah'
import Footer from './components/footer'

function App() {
  return (
    <>
      <div className='bg-emerald-600 w-full h-full flex flex-col absolute'>
        <div className='grid justify-items-center py-20'>
          <Tengah/>
          <Footer/>
        </div>
      </div>
    </>
  )
}

export default App

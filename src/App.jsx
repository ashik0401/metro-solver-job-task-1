import './App.css'
import { useEffect, useState } from 'react'
import StoriesSection from './component/StoriesSection '
import Footer from './component/Footer'
import Navbar from './component/Navbar'
import Banner from './component/Banner'

function App() {
  const [position, setPosition] = useState('center')

  useEffect(() => {
    const positions = [
      'center',
      'top',
      'bottom',
      'left',
      'right',
      'top left',
      'top right',
      'bottom left',
      'bottom right'
    ]
    const randomPos = positions[Math.floor(Math.random() * positions.length)]
    setPosition(randomPos)
  }, [])

  return (
    <div
      className='min-h-screen w-full'
      style={{
        background: `radial-gradient(circle at ${position}, #2F0743 0%, rgba(47,7,67,0.6) 40%, rgba(18,5,44,0.8) 70%, rgba(0,0,0,0.9) 100%)`
      }}
    >
      <Navbar />
      <Banner/>
      <div className='md:w-10/12 mx-auto '>
        <StoriesSection />
      </div>
      <Footer />
    </div>
  )
}

export default App

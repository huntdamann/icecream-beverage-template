import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import StrawberryShakeSection from './components/Strawberryshake'
import Thanks from './components/Thanks'
import { Floating } from "./components/floating";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   


     

       <Hero />
      <StrawberryShakeSection />
      <Thanks />
    

    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import Cart from './Pages/Cart'
import Course from './Pages/Course'

function App() {

  const [cartData, setCartData] = useState([])

  const reciveData = (item) =>{
    setCartData([...cartData, item]);
  }

  return (
    <div className='my-7'>
      <h1 className="text-3xl font-bold text-center title my-7">
        Course Registration
      </h1>
      <div className=' w-full flex flex-col md:flex-row px-14'>
        <Course datapass={reciveData}/>
        <Cart data={cartData}/>
      </div>
    </div>
  )
}

export default App
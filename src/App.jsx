import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
const baseURL ='https://cars-crud.herokuapp.com'
function App() {
  const [cars, setCars] = useState()
  const getAllCars = () =>{
    const URL=`${baseURL}/cars/`
    axios.get(URL).then( res => setCars(res.data)).catch(e => console.log(e))
  }
const createNewCar = () =>{

  const data ={
    brand:'TESLA',
    model:'z2516',
    color:'red',
    year:2563,
    price:15000
  }
  const URL=`${baseURL}/cars/`
  axios.post(URL,data).then(res=> console.log(res.data)).catch(e => console.log(e))

}

  useEffect(() => {
     getAllCars()
  }, [])
  
console.log(cars)
  return (
    <div className="App">
      <h1>crud AXIOS</h1>
       <button onClick={createNewCar}>new car</button>
      
     
    </div>
  )
}

export default App

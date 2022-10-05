import axios from 'axios'
import { keys } from 'mathjax-full/js/util/Options'
import { useEffect, useState } from 'react'
import './App.css'
import Cars from './components/Cars'
const baseURL ='https://cars-crud.herokuapp.com'
function App() {
  const [cars, setCars] = useState()
  const getAllCars = () =>{
    const URL=`${baseURL}/cars/`
    axios.get(URL).then( res => setCars(res.data)).catch(e => console.log(e))
  }
const  createNewCar = () =>{
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
const  idCar = (id) =>{
  const URL=`${baseURL}/cars/${id}`
  axios.get(URL).then(res=> console.log(res.data)).catch(e => console.log(e))
}
const  updateCar = (id) =>{
  const data ={
    brand:'TESLA1',
    model:'z25161',
    color:'red1',
    year:256336,
    price:150006
  }
  const URL=`${baseURL}/cars/${id}`
  axios.put(URL,data).then(res=> console.log(res.data)).catch(e => console.log(e))
}
const  deleteCar = (id) =>{
  const URL=`${baseURL}/cars/${id}`
  axios.delete(URL).then(res=> console.log(res.data)).catch(e => console.log(e))

}

  useEffect(() => {
     getAllCars()
  }, [])
  
console.log(cars)
  return (
    <div className="App">
      <h1>crud AXIOS</h1>
       {
          cars?.map(car =>(
            <div key={car.id}>
              <Cars  props={car}/>
            </div>
           ))
        }
       <button onClick={createNewCar}>new car</button>
     
    </div>
  )
}

export default App

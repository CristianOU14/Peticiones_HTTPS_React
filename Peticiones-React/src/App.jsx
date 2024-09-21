import { useState } from 'react'
import './App.css'
import Cajita from './screens/Cajita'

function App() {
  //Almaceno la info de la api
  const [data, setData] = useState([])
  const fecthData = ()=>
  {
    const base = "https://api-colombia.com/api/v1/"
    const enpoint = "Department"
    const url = `${base}${enpoint}`
    fetch(url)
    .then(data => data.json())
    .then(data => setData(data))
    .then(error => console.log(error))
  }
  return (
    <>
     <h1>Peticiones HTTPS</h1>
     <button onClick={()=>fecthData()}>Lamar API</button>
     <div>
        <ul>
          {
            data.map(item=>
              {
                return <Cajita key ={item.id} dataApi ={item}/>
              })
          }
        </ul>
     </div>
    </>
  )
}

export default App

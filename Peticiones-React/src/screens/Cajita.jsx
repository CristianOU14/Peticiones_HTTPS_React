import "./Cajita.css"
import {PropTypes} from 'prop-types'
import { useState } from "react"
function Cajita ()
{
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
    return(
    <>
    <h1>Peticiones HTTPS</h1>
        <button onClick={()=>fecthData()}>Lamar API</button>
        <div>
            <ul>
            {
                data.map(item=>
                {
                    return <li key ={item.id} >{item.name}</li>
                })
            }
            </ul>
        </div>
        {/* <li>{props.dataApi.name}</li> */}
    </>
    )
}
// Cajita.propTypes = 
// {
//     dataApi : PropTypes.object.isRequired
// }
export default Cajita
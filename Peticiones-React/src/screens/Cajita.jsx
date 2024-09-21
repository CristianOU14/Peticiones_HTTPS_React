import "./Cajita.css"
import {PropTypes} from 'prop-types'
function Cajita (props)
{
    return(
    <>
        <li>{props.dataApi.name}</li>
    </>
    )
}
Cajita.propTypes = 
{
    dataApi : PropTypes.object.isRequired
}
export default Cajita
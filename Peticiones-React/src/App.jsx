import './App.css'
import Cajita from './screens/Cajita'
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Main from './screens/Main/Main'
import Usuario from './screens/usuario/Usuario'

function App() {
  //Almaceno la info de la api
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/usuario' element={<Usuario/>}/>
          <Route path='/cajita' element={<Cajita/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App

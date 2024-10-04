import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Main(){
    const navigate = useNavigate();
    const [usuario,setUsuario] = useState('123');
    const goToProfile = ()=>{
        if (usuario === '123')
            navigate('/usuario')
        else
            navigate('/cajita')
    }
    return(
        <div>
            <h1>Estoy en la vista de Main</h1>
            <button onClick={goToProfile}>
            Dirigir Al Usuario
            </button>
        </div>
    )
}
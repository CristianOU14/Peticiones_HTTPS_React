import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Main(){
    const navigate = useNavigate();
    const [usuario] = useState('123');
    const goToProfile = ()=>{
        if (usuario === '1234')
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
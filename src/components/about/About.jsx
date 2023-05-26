import { useNavigate } from "react-router-dom"


export default function About (){
    const navigate =useNavigate()
    const handleClick = function (){
        navigate("/home")
    }
    return(
        <div>
            <h1>Bienvenidos a la pagina de Leonardo Fleire</h1>
            <p>Aplicacion de prueba como proyecto integrador de mi curso FullStackDeveloper en Henry</p>
            <button onClick={handleClick}>Regresar</button>
        </div>
    )
}
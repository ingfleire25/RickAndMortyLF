import styled from "./Form.module.css"
import {useState} from "react"
import Validation from "./validation"

export default function Form ({Login}) {
    const [userData, setUserData] = useState({email:"", password:""})
    const [errors, setErrors] = useState({email:"", password:""})

    const handleChange = (event) =>{
        // const name = event.target.name
        // const value = event.target.value
        const {value, name} = event.target
        setErrors(Validation({...userData, [name]:value}))
        setUserData({...userData, [name]:value})
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        if(Object.values(errors).lenght === 0)Login(userData)
        
    }

    return(
        
       <div style={{display:"flex", justifyContent: "center", alignItems:"center"}}>
        <form className={styled.container}>
        <div className={styled.input}>
                <label>Email</label>
                <input name="email" onChange={handleChange}  type="text"placeholder="example@mail.com"/>
                <p style={{color: "blue"}}>{errors.email}</p>
            </div>
            <div className={styled.input}>
                <label>Password</label>
                <input name="password" onChange={handleChange} type="password"/>
                <p style={{color: "blue"}}>{errors.password}</p>
            </div>
            <button onClick={handleSubmit} clasName={styled.button}>Ingresar</button>

        </form>
            
       </div>
    )
}
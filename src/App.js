import './App.css';
import Cards from './components/cards/Cards';
import Nav from "./components/nav/Nav";
import {useState, useEffect}  from "react";
import axios from "axios";
import {Routes, Route, useLocation, useNavigate} from "react-router-dom"
import About from './components/about/About';
import Detail from './components/detail/Detail';
import  Form  from './components/form/Form';
const URL = `https://rickandmortyapi.com/api/character/`
const EMAIL = "f@mail.com"
const PASSWORD = "123456"

function App() {
   const [acces, setAcces] = useState(false)
 
const [characters, setCharacters] = useState([]);

const {pathName} = useLocation()

const navigate = useNavigate()

useEffect(()=>{
   !acces && navigate('/');
},[acces]);

const onSearch = (id) =>{
   axios(`${URL}/${id}`).then(({ data }) => {
      if (data.name) {
         setCharacters([...characters, data]);
      } else {
         window.alert('¡No hay personajes con este ID!');
      }
   }).catch((error) => {window.alert("Este id no exite, ingrese un id del 1 al 826")})
   
   
}

const onClose = (id) => {
  const filtrados = characters.filter((chars) => chars.id !== id)
  setCharacters(filtrados)
}

const Login = (userData) => {
   if(userData.email === EMAIL && userData.password === PASSWORD){
      setAcces(true)
      navigate("./home")
   }
}

   return (

      <div className='App'>
         {pathName !== "/" && <Nav onSearch= {onSearch}/>}

         
            <Routes>
            <Route path="/" element={<Form Login={Login}/>} />
            <Route path='/about' element={ <About />}/>
            <Route path='/home' element={ <Cards characters={characters} onClose={onClose}/>}/>
            <Route path='/detail/:id' element={ <Detail />}/>
            </Routes>
      </div>
   );
}

export default App;

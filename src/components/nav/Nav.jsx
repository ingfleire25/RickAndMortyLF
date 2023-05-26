import SearchBar from "../searchbar/SearchBar";
import styled from "./Nav.module.css";
import {Link} from "react-router-dom"

const Nav = ({onSearch}) => {
    return (
        <div className={styled.container}>
            <Link to="/About">About</Link>
            <Link to="/home">Home</Link>
             <h1>Navbar</h1>
             <SearchBar onSearch={onSearch} />
        </div>
    )
}

export default Nav;

// class Navbar extends React.Component {
// constructor()
// render(){


    
//     return(
//         <div>

//         </div>
        
//         )
        
//     }
// }
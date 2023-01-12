import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav>
            <ul>
                <li className="Nav"><Link to={'/articles'}>Home</Link></li>
                <li className="Nav"><Link>Coding</Link></li> 
                <li className="Nav"><Link>Cooking</Link></li> 
                <li className="Nav"><Link>Football</Link> </li>
            </ul>
        </nav>  
   )   
}

export default Nav; 
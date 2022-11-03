import { Link } from "react-router-dom"
import { BsCodeSquare } from 'react-icons/bS'
import './Navbar.css'

const Navbar = () => {
    return (
        <div>
            <nav id='navbar'>
                <h2> <Link to="/"><BsCodeSquare />Dream Drones</Link></h2>
                <h2><Link to="products">Produts</Link></h2>
                <h2><Link to="About">Sobre nós</Link></h2>
            </nav>
        </div>)
}

export default Navbar;
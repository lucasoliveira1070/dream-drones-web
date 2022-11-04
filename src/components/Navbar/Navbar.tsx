import { Link } from "react-router-dom"
import { BsCodeSquare,BsInfoCircle } from 'react-icons/bS'
import {MdOutlineHomeRepairService} from 'react-icons/md'
import './Navbar.css'

const Navbar = () => {
    return (
        <div>
            <nav id='navbar'>
                <h2><Link className="link" to="/"><BsCodeSquare />Dream Drones</Link></h2>
                <h2><Link className="link" to="services"><MdOutlineHomeRepairService/>Serviços</Link></h2>
                <h2><Link className="link" to="About"><BsInfoCircle/>Sobre nós</Link></h2>
            </nav>
        </div>)
}

export default Navbar;
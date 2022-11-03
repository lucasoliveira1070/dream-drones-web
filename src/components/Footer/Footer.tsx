import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bS";
import './Footer.css'

const Footer = () => {
return(
    <footer className="footer">
        <ul className="socialList">
            <li>
                <BsFacebook/>
            </li>
            <li>
                <BsInstagram/>
            </li>
            <li>
                <BsLinkedin/>
            </li>
        </ul>
        <p className="copyright"><span>Dream Drones &copy; 2022</span></p>
    </footer>
)
}

export default Footer;
import '../styles/Footer.css';
import { FaMapLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";





export default function Footer() {
    return(
        <footer>
            <h4>
                <a href="mailto:emmanuellerenov@gmail.com?subject=Demande de reservation">
                    emmanuellerenov@gmail.com
                </a>
           
                <a href="tel:+225 0708128559"> 
                    <FaPhone className='info_icons' />
                     Notre service client
                </a>

                <a href="https://www.instagram.com/emmanuelle_renov?igsh=MXd1eTQybXp6bjZ0dw%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
                    <FaInstagram  className='info_icons' />
                    Instagram
                </a>

                <a href="https://www.tiktok.com/@emmanuelle.renov?_t=ZM-8zTS4svgvZe&_r=1" target="_blank" rel="noopener noreferrer">
                    <FaTiktok  className='info_icons' />
                    Tiktok
                </a>

                <a href="https://www.facebook.com/share/1DUKY3B5pE/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
                    <FaFacebook  className='info_icons' />
                    Facebook
                </a>
            
                <a href='https://maps.app.goo.gl/JYWiCZNGRoA3Atpu5'>
                    <FaMapLocationDot  className='info_icons' />
                    Notre localisation
                </a>
            </h4>
        </footer>
    )
}
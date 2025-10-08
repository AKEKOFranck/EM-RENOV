import '../styles/Header.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import { TiThMenu } from "react-icons/ti";
import { TbArrowsCross } from "react-icons/tb";



import { MdHome } from "react-icons/md";
import { FaTools } from "react-icons/fa";
import { FaRegQuestionCircle } from "react-icons/fa";
import { RiCustomerService2Line } from "react-icons/ri";



export default function Header() {
    const [isopen, setIsopen] = useState(false);
    const toggleMenu = () => {
        setIsopen(!isopen)
    };

    return(
        <header className='head_main'>

             <button 
        className={`nav_bt ${isopen ? 'open' : ''}`} 
        onClick={toggleMenu}
      >
        {isopen ? 
        <TbArrowsCross className='nav_ico_bt' /> :
          <TiThMenu className='nav_ico_bt' />
        }
      </button>

      <nav className={`nav_box ${isopen ? 'nav-open' : 'nav-closed'}`}>
        <Link to='' className='nav_link' onClick={() => setIsopen(false)}>
          <MdHome className='nav_ico' />
          <p className='nav_text'>Accueil</p>
        </Link>
        <Link to='/Work' className='nav_link' onClick={() => setIsopen(false)}>
          <FaTools className='nav_ico' />
          <p className='nav_text'>Nos Travaux</p>
        </Link>
         <Link to='/About' className='nav_link' onClick={() => setIsopen(false)}>
          <FaRegQuestionCircle  className='nav_ico' />
          <p className='nav_text'>En savoir plus</p>
        </Link>
        <Link to="/Info" className='nav_link' onClick={() => setIsopen(false)}>
          <RiCustomerService2Line className='nav_ico' />
          <p className='nav_text'>Informations</p>
        </Link>
      </nav>
           
            

            
            <h1 className='nav_title'>
                <Link to= ''>
                EM-RENOV
                </Link>
            </h1>

            <Link to="mailto:ivoireSecu@gmail.com?subject=Demande de reservation" className='nav_link' id='nav_booking'>
                 Réserver
            </Link>

            
        </header>
    )
}
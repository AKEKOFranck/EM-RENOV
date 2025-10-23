import '../styles/Home.css';
import { Link } from 'react-router-dom';

export default function Home() {
    return(
        <section className='home_main'>
            <h3 className='home_text'>
                L'art de la rénovation, l'exigence du détail
            </h3>
            
            <Link to="/Work" className='home_bt_link'>
                <button type='button' className='home_bt'>
                    Explorer nos oeuvres
                </button>
            </Link>
        </section>
    )
}
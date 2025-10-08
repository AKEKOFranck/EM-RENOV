import '../styles/Home.css';
import { Link } from 'react-router-dom';


export default function Home() {
   
    return(
        
        <section className='home_main'>
          
            <h3 className='home_text'>
                   L'art de la rénovation, l'exigence du détail
            </h3>
            <button type='button' className='home_bt'>
                    <a href='/Work' style={{textDecoration: 'none'}}>
                      Explorer nos oeuvres
                    </a>
            </button>
        </section>
    )
}
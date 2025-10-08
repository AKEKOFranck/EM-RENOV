import '../styles/ProjectStyles/Project4.css'
import { Link } from 'react-router-dom';
import VO from '../assets/MaisonGolf/posteAutres.png';

import O1 from '../assets/Autres/O1-1.jpg';
import O2 from '../assets/Autres/O1-2.jpg';
import O3 from '../assets/Autres/O2-1.jpg';
import O4 from '../assets/Autres/O2-2.jpg';
import O5 from '../assets/Autres/O3-1.jpg';
import O6 from '../assets/Autres/O3-2.jpg';
import O7 from '../assets/Autres/O4-1.jpg';
import O8 from '../assets/Autres/O4-2.jpg';
import O9 from '../assets/MaisonGolf/VILL1-1.jpg';
import O10 from '../assets/MaisonGolf/VILL1-2.jpg';



export default function Project4() {

    const proj1Data = [
        {id:4, img:O1, title: "Rénovation et aménagement séjour d’une villa"},
        {id:5, img:O2},
    ];

    const proj2Data = [
        {id:4, img:O3, title: " rénovation d’un magasin 8 Eme tranche"},
        {id:5, img:O4},
    ];

    const proj3Data = [
        {id:4, img:O5, title: "Décoration plafond et peinture d’un restaurant à la 7eme tranche"},
        {id:5, img:O6},
    ];

    const proj4Data = [
        {id:4, img:O7, title: "Projet construction magasin Angré"},
        {id:5, img:O8},
    ];

    const proj5Data = [
        {id:4, img:O9, title: "rénovation vielle villa Riviera golf"},
        {id:5, img:O10},
    ];

    
    const BigPorject1 = [
        proj1Data, proj2Data, proj3Data
    ]

    
    const BigPorject2 = [
        proj4Data, proj5Data
    ]
    return(
        <section className='proj4_main'>
                <div className='po4_container' id='po4_title'>
                </div>
                    <div className='po4_container' id='affiche'>
                        <img src={VO} className='¨poste4_img' alt='poste'></img>
                    </div>
                    {BigPorject1.map((data, idx) => (
                        <div className='po4_container' key={idx}>
                            {data.map((item) =>(
                                <div className='po4_box' key={item.id}>
                                   <img src={item.img} className='po4_img' alt='poste'></img>
                                </div>
                            ))}
                        </div>
                    ))}
                    {BigPorject2.map((data, idx) => (
                        <div className='po4_container' key={idx}>
                            {data.map((item) =>(
                                <div className='po4_box' key={item.id}>
                                   <img src={item.img} className='po4_img' alt='poste'></img>
                                </div>
                            ))}
                        </div>
                    ))}
            <div className='po4_container' id='po4_last'>
            </div>
        
        </section>
    )
}
import '../styles/ProjectStyles/Project3.css'
import { Link } from 'react-router-dom';
import VO from '../assets/VillaBasse/poste3.png';

import b1 from '../assets/VillaBasse/PE1-1.jpg';
import b2 from '../assets/VillaBasse/PE1-2.jpg';
import b3 from '../assets/VillaBasse/PE2-1.jpg';
import b4 from '../assets/VillaBasse/PE2-2.jpg';




export default function Project3() {

    const proj1Data = [
        {id:1, img:b1},
        {id:2, img:b2},
    ];

    const proj2Data = [
        {id:1, img:b3},
        {id:2, img:b4},
    ];

    
    const BigPorject = [
        proj1Data, proj2Data
    ]
    return(
        <section className='proj3_main'>
            <div className='po3_container' id='po3_title'>
            </div>
                <div className='po3_container' id='affiche'>
                     <img src={VO} className='¨poste3_img' alt='poste'></img>
                </div>
                    {BigPorject.map((data, idx) => (
                        <div className='po3_container' key={idx}>
                            {data.map((item) =>(
                                <div className='po3_box' key={item.id}>
                                   <img src={item.img} className='po3_img' alt='poste'></img>
                                </div>
                            ))}
                        </div>
                    ))}
            <div className='po3_container' id='po3_last'>  
            </div>
        
        </section>
    )
}
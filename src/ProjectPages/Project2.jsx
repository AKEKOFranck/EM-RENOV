import '../styles/ProjectStyles/Project2.css'
import { Link } from 'react-router-dom';
import VO from '../assets/Bureau/poste2.png';
import B1 from '../assets/Bureau/B1-1.jpg';
import B2 from '../assets/Bureau/B1-2.jpg';
import B3 from '../assets/Bureau/B2-1.jpg';
import B4 from '../assets/Bureau/B2-2.jpg';
import B5 from '../assets/Bureau/B3-1.jpg';
import B6 from '../assets/Bureau/B3-2.jpg';


export default function Project2() {

    const proj1Data = [
        {id:1, img:B1},
        {id:2, img:B2},
    ];

    const proj2Data = [
        {id:1, img:B3},
        {id:2, img:B4},
    ];

    const proj3Data = [
        {id:1, img:B5},
        {id:2, img:B6},
    ];

    
    const BigPorject = [
        proj1Data, proj2Data, proj3Data
    ]
    return(
        <section className='proj2_main'>
            <div className='po2_container' id='po2_title'>
            </div>
                    <div className='po2_container' id='affiche'>
                        <img src={VO} className='¨poste2_img' alt='poste'></img>
                    </div>
                    {BigPorject.map((data, idx) => (
                        <div className='po2_container' key={idx}>
                            {data.map((item) =>(
                                <div className='po2_box' key={item.id}>
                                   <img src={item.img} className='po2_img' alt='poste'></img>
                                </div>
                            ))}
                        </div>
                    ))}
            <div className='po2_container' id='po2_last'>        
            </div>
        </section>
    )
}
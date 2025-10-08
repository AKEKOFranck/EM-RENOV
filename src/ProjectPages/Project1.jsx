import '../styles/ProjectStyles/Project1.css'
import { Link } from 'react-router-dom';
import VO from '../assets/Maison2Plateau/poste1.png';
import V1 from '../assets/Maison2Plateau/VILLA1-1.jpg';
import V2 from '../assets/Maison2Plateau/VILLA1-2.jpg';
import V3 from '../assets/Maison2Plateau/VILLA2-1.jpg';
import V4 from '../assets/Maison2Plateau/VILLA2-2.jpg';
import V5 from '../assets/Maison2Plateau/VILLA3-1.jpg';
import V6 from '../assets/Maison2Plateau/VILLA3-2.jpg';


export default function Project1() {

    const proj1Data = [
        {id:1, img:V1},
        {id:2, img:V2},
    ];

    const proj2Data = [
        {id:1, img:V3},
        {id:2, img:V4},
    ];

    const proj3Data = [
        {id:1, img:V5},
        {id:2, img:V6},
    ];

    const BigPorject = [
        proj1Data, proj2Data, proj3Data
    ]
    return(
        <section className='proj1_main'>
             <div className='po1_container' id='po1_title'>
            </div>
            <div className='po1_container' id='affiche'>
                <img src={VO} className='¨poste1_img' alt='poste'></img>
            </div>
            {BigPorject.map((data, idx) => (
                <div className='po1_container' key={idx}>
                    {data.map((item) =>(
                        <div className='po1_box' key={item.id}>
                           <img src={item.img} className='po1_img' alt='poste'></img>
                        </div>
                    ))}
                </div>
            ))}
            <div className='po1_container' id='po1_last'>
               
            </div>

        </section>
    )
}
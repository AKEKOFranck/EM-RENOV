import '../styles/Work.css';
import pic1 from '../assets/Maison2Plateau/VILLA1-2.jpg';
import pic2 from '../assets/Bureau/B1-2.jpg';
import pic3 from '../assets/VillaBasse/PE1-2.jpg';
import pic4 from '../assets/Autres/O1-2.jpg';
import pic5 from '../assets/Autres/O2-2.jpg';
import pic6 from '../assets/Autres/O3-2.jpg';
import pic7 from '../assets/Autres/O4-2.jpg';
import pic8 from '../assets/MaisonGolf/VILL1-2.jpg';

import { Link } from 'react-router-dom';

export default function Work() {

    const infoData1 = [
        {id:1, image:pic1,  details:'/Project1'},
        {id:2, image:pic2,  details: '/Project2'},
    ];

     const infoData2 = [
        {id:3, image:pic3,  details:'/Project3'},
        {id:4, image:pic4,  details:'/Project4'},
    ];

    const bigData1 = [ infoData1, infoData2];

     const infoData3 = [
        {id:5, image:pic5,  details: '/Project4'},
        {id:6, image:pic6,  details: '/Project4'},
    ];

     const infoData4 = [
        {id:7, image:pic7,  details: '/Project4'},
        {id:8, image:pic8,  details: '/Project4'},
    ];

    const bigData2 = [infoData3, infoData4];


   return(
      <section className='work_main'>
        <div className='work_container' id='work1'>
            {bigData1.map((dataArray, idx) => (
            <div className='work_cont' key={`cont1-${idx}`}>
                {dataArray.map((item) => (
                    <Link to={item.details} className='work_box' key={item.id}>
                        <img src={item.image} alt='projet' className='work_img' />
                    </Link>
                ))}
            </div>
           ))}
        </div>
        
        <div className='work_container' id='work2'>
           {bigData2.map((dataArray, idx) => (
            <div className='work_cont' key={`cont2-${idx}`}>
                {dataArray.map((item) => (
                    <Link to={item.details} className='work_box' key={item.id}>
                        <img src={item.image} alt='projet' className='work_img' />
                    </Link>
                ))}
            </div>
           ))}
        </div>
      </section>
   )
}
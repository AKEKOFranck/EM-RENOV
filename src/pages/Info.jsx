import '../styles/Info.css';

export default function Info() {

    const textData = [
        "Pour nous rencontrer",
         "appelez le :",
        "+225 07 08 12 85 59",
        "ou envoyez un email à ",
        "emmanuellerenov@gmail.com",
        "suivi du motif de votre réservation."
    ]
    return(
        <section className='info_main'>
            <div className='info_box'>
                 <ul className='info_list'>
                {textData.map((items, idx) =>(
                    <li className='info_list2' key={idx}>{items}</li>
                ))}
            </ul>
            </div>
        </section>
    )
}
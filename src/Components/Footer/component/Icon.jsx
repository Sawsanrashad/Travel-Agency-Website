import './Icon.scss';
import { FiPhoneCall } from "react-icons/fi";

export default function Icon({ icon, title, text }) {
    return (
        <>
            <div className=' flex gap-3 md:justify-center items-center mb-3 md:mb-0' id='iconsSection'>
                <div className='icon flex md:justify-center items-center'>
                    <span>{icon}</span>
                </div>
                <div>
                    <h5>{title}</h5>
                    <p>{text}</p>
                </div>
            </div>
        </>
    )
}

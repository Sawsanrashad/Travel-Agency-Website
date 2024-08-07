import './TeamImage.scss';
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { SlSocialTwitter } from "react-icons/sl";
import { TfiInstagram } from "react-icons/tfi";
export default function TeamImage({ image, name, specialize, description }) {
    return (
        <div id='teamImage'>
            <div className='relative tab'>
                <img src={image} alt="" className='w-full' />
                <div className='text absolute flex flex-col justify-center items-center p-3'>
                    <h4 className='dark:!text-[#121c2a]'>{name}</h4>
                    <h6 className='dark:!text-[#121c2a]'>{specialize}</h6>
                    <div className='textDiv hidden'>
                        <h6 className='dark:!text-[#121c2a]'>{description}</h6>
                        <div className='flex gap-3 justify-center items-center'>
                            <span className='dark:!text-[#121c2a]' style={{ color: "white" }}><FaLinkedinIn /> </span>
                            <span className='dark:!text-[#121c2a]' style={{ color: "white" }}><FaFacebookF /></span>
                            <span className='dark:!text-[#121c2a]' style={{ color: "white" }}><SlSocialTwitter /></span>
                            <span className='dark:!text-[#121c2a]' style={{ color: "white" }}><TfiInstagram /></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

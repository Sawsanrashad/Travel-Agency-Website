import './Footer.scss';
import { FiPhoneCall } from "react-icons/fi";
import Icon from './component/Icon';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaPlaneDeparture } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaPinterestP } from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom';
import { FaInstagram } from "react-icons/fa";
import { FormattedMessage } from 'react-intl';
export default function Footer() {
    return (
        <div id='footer' className=' dark:!bg-[#0c112b] '>
            <div className='custom_container flex flex-col justify-center items-center gap-5'>
                <div className='call md:grid md:grid-cols-3 justify-between items-center md:gap-2 w-full'>
                    <div className='flex flex-col md:flex-row md:items-center gap-5'>
                        <Icon title={<FormattedMessage id='footerCallUs' />} icon={<FiPhoneCall className='text-white ' size={40} />} text={"+1 123-456-0606"} />
                        <div className='separator'></div>
                    </div>
                    <div className='flex flex-col md:flex-row md:items-center gap-5'>
                        <Icon title={<FormattedMessage id='footerWriteToUs' />} icon={<FiPhoneCall className='text-white ' size={40} />} text={"info@bonvoyage.com"} />
                        <div className='separator'></div>
                    </div>
                    <div className='flex flex-col md:flex-row md:items-center gap-5'>
                        <Icon title={<FormattedMessage id='footerAddress' />} icon={<FiPhoneCall className='text-white ' size={40} />} text={"24 King St, SC 29401 USAx"} />
                    </div>
                </div>
                <div className='md:grid md:grid-cols-3 justify-between items-center'>
                    <div className='flex flex-col mb-8 gap-3'>
                        <div className=' logo flex gap-2 justify-start '>
                            <p>{<FormattedMessage id='bonVoyage' />}</p>
                            <span className='planeIcon'>
                                <FaPlaneDeparture size={25} />
                            </span>
                        </div>
                        <p className=''>{<FormattedMessage id='bonVoyageDescription' />}
                        </p>
                        <div className='flex gap-3'>
                            <div className='footerIconDiv flex justify-center items-center'>
                                <span className='footerIcons'>
                                    <FaFacebookF size={23} />
                                </span>
                            </div>
                            <div className='footerIconDiv flex justify-center items-center'>
                                <span className='footerIcons'>
                                    <TiSocialLinkedin size={23} />
                                </span>
                            </div>
                            <div className='footerIconDiv flex justify-center items-center'>
                                <span className='footerIcons'>
                                    <FaPinterestP size={23} />
                                </span>
                            </div>
                            <div className='footerIconDiv flex justify-center items-center'>
                                <span className='footerIcons'>
                                    <FaInstagram size={23} />
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col mb-8'>
                        <h4 className='md:text-center'>{<FormattedMessage id='quickLinks' />}</h4>
                        <div className='w-fit mx-8 md:m-auto'>
                            <ul className='flex flex-col gap-2 list-disc'>
                                <li>
                                    <NavLink to={"/"}><FormattedMessage id='home' /></NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/about"}><FormattedMessage id='about' /></NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/tours"}><FormattedMessage id='tours' /></NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/blog"}><FormattedMessage id='blog' /></NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/contact"}><FormattedMessage id='contact' /></NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <h4>{<FormattedMessage id='subscribe' />}</h4>
                        <p className='my-3'>{<FormattedMessage id='subscribeDescription' />}</p>
                        <div className='bg-white p-2'>
                            <div className='relative'>
                                <input type="email" className='p-3 w-full' placeholder='Email' />
                                <button className='absolute'>{<FormattedMessage id='sendButton' />}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

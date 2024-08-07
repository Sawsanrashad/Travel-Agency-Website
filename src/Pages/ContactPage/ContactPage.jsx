import Header from '../../Components/Header/Header';
import Navbar from '../../Components/Navbar/Navbar';
import ContactForm from './Components/ContactForm';
import Map from './Components/Map';
import Testominals from '../../Components/Testominals/Testominals'
import IconSlider from '../../Components/IconSlider/IconSlider'
import Footer from '../../Components/Footer/Footer'
import './ContactPage.scss';
import { FormattedMessage } from 'react-intl';

export default function ContactPage() {
    return (
        <div id='contact' className='col-12'>
            <Header title={<FormattedMessage id='getInTouch' />} heading={<FormattedMessage id='contactUs' />} bgImg={`url('./assets/bg.jpg')`} />
            <ContactForm />
            <Map />
            <Testominals />
            <IconSlider />
        </div>
    )
}

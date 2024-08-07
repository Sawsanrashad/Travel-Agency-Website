import './ToursPage.scss';
import Header from '../../Components/Header/Header';
import Navbar from '../../Components/Navbar/Navbar';
import TourDetails from '../../Components/TourDetails/TourDetails';
import Testominals from '../../Components/Testominals/Testominals';
import IconSlider from '../../Components/IconSlider/IconSlider';
import Footer from '../../Components/Footer/Footer';
import { FormattedMessage } from 'react-intl';

export default function ToursPage() {
    return (
        <div>
            <Header title={<FormattedMessage id='chooseYourTour' />} heading={<FormattedMessage id='mostPopularTours' />} bgImg={`url('./assets/2.jpg')`} />
            <TourDetails />
            <Testominals />
            <IconSlider />
        </div>
    )
}

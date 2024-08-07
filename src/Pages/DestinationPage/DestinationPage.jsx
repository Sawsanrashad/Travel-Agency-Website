import './DestinationPage.scss';
import Header from '../../Components/Header/Header';
import Navbar from '../../Components/Navbar/Navbar';
import PopularDestination from '../../Components/PopularDestination/PopularDestination';
import Testominals from '../../Components/Testominals/Testominals';
import IconSlider from '../../Components/IconSlider/IconSlider';
import Footer from '../../Components/Footer/Footer';

export default function DestinationPage() {
    return (
        <div>
            <Header title={"CHOOSE YOUR DESTINATION"} heading={"POPULAR "} span={"DESTINATION"} bgImg={`url('./assets/bg.jpg')`} />
            <PopularDestination />
            <Testominals />
            <IconSlider />
        </div>
    )
}

import Header from '../../Components/Header/Header';
import DiscoverSection from '../../Components/DiscoverSection/DiscoverSection'
import './AboutPage.scss';
import Team from '../../Components/Team/Team';
import Testominals from '../../Components/Testominals/Testominals';
import IconSlider from '../../Components/IconSlider/IconSlider';
import { FormattedMessage } from 'react-intl';

export default function AboutPage() {
    return (
        <div>
            <Header title={<FormattedMessage id='bestTravelAgency' />} heading={<FormattedMessage id='aboutHeading' />} span={<FormattedMessage id='aboutHeadingSpan' />} bgImg={`url('./assets/bg.jpg')`} />
            <DiscoverSection description1={<FormattedMessage id='description1' />}
                description2={<FormattedMessage id='description2' />}
                description4={<FormattedMessage id='description4' />} />
            <Team />
            <Testominals />
            <IconSlider />
        </div>
    )
}

import BlogTravel from '../../Components/BlogTravel/BlogTravel';
import Header from '../../Components/Header/Header';
import './Blog.scss';
import { FormattedMessage } from 'react-intl';

export default function Blog() {
    return (
        <div>
            <Header title={<FormattedMessage id='readTravelBolg' />} heading={<><span className=''><FormattedMessage id='travel' /></span> <FormattedMessage id='experience' /></>} bgImg={`url('./assets/bg.jpg')`} />
            <BlogTravel />
        </div>
    )
}

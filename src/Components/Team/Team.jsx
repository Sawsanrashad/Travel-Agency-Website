import './Team.scss';
import guide1 from '../../assets/images/guide1.jpg';
import guide2 from '../../assets/images/guide2jpg.jpg';
import guide3 from '../../assets/images/guide3.jpg';

import TeamImage from './component/TeamImage';
import { FormattedMessage } from 'react-intl';
export default function Team() {
    return (
        <div id='team' className='dark:!bg-[#0e1b31]'>
            <div className="custom_container flex flex-col gap-4">
                <div>
                    <p>{<FormattedMessage id='travelExperts' />}</p>
                    <h3>{<><FormattedMessage id='meetOur' /> <span><FormattedMessage id='guides' /></span></>}</h3>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-between items-center teamdiv'>
                    <TeamImage image={guide1} name={"Leonie Norman"} specialize={<FormattedMessage id='switzerlandGuide' />} description={<FormattedMessage id='switzerlandDescription' />} />
                    <TeamImage image={guide2} name={"Andreas Brown"} specialize={<FormattedMessage id='maldivesGuide' />} description={<FormattedMessage id='maldivesDescription' />} />
                    <TeamImage image={guide3} name={"Angelina White"} specialize={<FormattedMessage id='greeceGuide' />} description={<FormattedMessage id='greeceDescription' />} />
                </div>
            </div>
        </div>
    )
}

import Image from './Component/Image';
import Text from './Component/Text';
import './DiscoverSection.scss';

export default function DiscoverSection({ test, hint, description1, description2, description3, description4 }) {
    return (
        <div id='discover' className='dark:!bg-[#0c112b]  relative overflow-hidden'>
            <div className='size-[300px] hidden dark:block absolute -top-[80px] -left-[50px] animate'></div>
            <div className='size-[300px] hidden dark:block absolute -bottom-[10px] -right-[50px] animate'></div>
            <div className='custom_container w-full justify-between items-stretch gap-10 md:grid md:grid-cols-12'>
                <div className='md:col-span-6'>
                    <Text title={test} hint={hint} description1={description1} description2={description2} description3={description3} description4={description4} />
                </div>
                <div className='md:col-span-4'>
                    <Image />
                </div>
            </div>
        </div>
    )
}

import './WhyTravel.scss';
import Card from './component/Card';

export default function WhyTravel() {
    return (
        <div id='why'>
            <div className='custom_container col-12 flex flex-col justify-center items-center gap-5'>
                <h2>WHY TRAVEL WITH BON VOYAGE?</h2>
                <div className='row col-12 g-3'>
                    <div className='col-12 col-lg-3'>
                        <Card />
                    </div>
                    <div className='col-12 col-lg-3'>
                        <Card />
                    </div>
                    <div className='col-12 col-lg-3'>
                        <Card />
                    </div>
                    <div className='col-12 col-lg-3'>
                        <Card />
                    </div>
                </div>
            </div>
        </div>
    )
}

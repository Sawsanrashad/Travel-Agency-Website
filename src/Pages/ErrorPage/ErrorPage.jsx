import './ErrorPage.scss';
import plane from '../../assets/images/airplane2.gif'
import compass from '../../assets/images/compass.png'
import { useNavigate } from 'react-router-dom';

export const ErrorPage = () => {
    let navigate = useNavigate();
    const navigateToHome = () => {
        navigate('/');
    }

    const navigateToContact = () => {
        navigate('/contact');
    }
    return (
        <div id='error' className=''>
            <div className='custom_container h-full flex flex-col justify-center items-center gap-3'>
                <div className=' flex justify-center items-center'>
                    <h1>4</h1>
                    <img src={plane} alt="" width={130} />
                    <h1>4</h1>
                </div>
                <p>Ooops It seems You Got Lost!</p>
                <span>You Mistyped or the page You are Looking for no longer exists.</span>
                <div className='flex gap-5'>
                    <button className='bg-red-700 p-3 text-white rounded-md hover:bg-cyan-700' onClick={navigateToHome}>Back To Home</button>
                    <button className='bg-green-600 p-4 text-white rounded-md hover:bg-cyan-700' onClick={navigateToContact}>Contact Us</button>

                </div>
            </div>
        </div>
    )
}

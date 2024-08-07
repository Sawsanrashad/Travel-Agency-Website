import './Image.scss';
import img from '../../../assets/images/girl.jpeg';
import logo from '../../../assets/images/airplane.png';
import 'animate.css';

export default function Image() {
  return (
    <div className='h-full' id='imageSection'>
      <div className='flex justify-center items-center relative'>
        <div className='dot absolute left-[-10%] top-[-10%]'></div>
        <img src={img} alt="" className='w-full h-full girl' />
        <div className='rec w-full h-full absolute left-[10%] top-[10%] dark:!bg-cyan-800'></div>
      </div>
    </div>
  )
}

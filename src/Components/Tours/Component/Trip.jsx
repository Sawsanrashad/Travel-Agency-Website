import './Trip.scss';

export default function Trip({ image, title, className }) {
    return (
        <div id='trip' className={`mb-5${className ? className : ""}`}>
            <div className='tab overflow-hidden relative h-full'>
                <img src={image} alt={`image of ${title}`} className='w-full h-full' />
                <div className='overlay w-full h-full absolute top-0'></div>
                <div className='tripTitle absolute text-center'>
                    <span>{title}</span>
                </div>
            </div>
        </div>
    )
}

import './Header.scss';
export default function Header({ title, heading, span, bgImg }) {
    console.log(bgImg)
    return (
        <div id='Header' className='relative overflow-hidden' style={{ backgroundImage: bgImg }}>
            <div className='overlay absolute w-full h-full top-0'></div>
            <div className='custom_container  flex flex-col justify-center h-full'>
                <p className='dark:!text-white'>{title}</p>
                <h1 className='dark:!text-white'>
                    {heading} <span>{span}</span>
                </h1>
            </div>

        </div>
    )
}

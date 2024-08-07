import './Header.scss';
export default function Header({ title, heading, span, bgImg }) {
    return (
        <div id='Header' className='relative rounded-md overflow-hidden' style={{ backgroundImage: bgImg }}>
            <div className='overlay absolute w-full h-full top-0'></div>
            <div className='custom_container  flex flex-col justify-center h-full'>
                <p className='dark:!text-[#121c2a]'>{title}</p>
                <h1 className='dark:!text-[#121c2a]'>
                    {heading} <span>{span}</span>
                </h1>
            </div>

        </div>
    )
}

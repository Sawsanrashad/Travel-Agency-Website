import React from 'react'

export default function Map() {
    return (
        <div id='map' className='dark:!bg-[#0c112b]'>
            <div className='custom_container'>
                <div className='w-full py-5 '>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d77607.86689853348!2d31.20232386967739!3d30.046237739827546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21beeb%3A0x79dfb296e8423bba!2sCairo%2C%20Cairo%20Governorate!5e0!3m2!1sen!2seg!4v1718233305631!5m2!1sen!2seg" className='w-full rounded-2xl overflow-hidden' height="550" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    )
}

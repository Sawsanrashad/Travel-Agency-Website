import React from 'react';
import './BlogContent.scss';
import HeroSlider from '../../../Components/Slider/HeroSlider';
export const BlogContent = ({ blog }) => {
    return (
        <div id='blogContent' className='dark:bg-[#0c112b] '>
            <HeroSlider bgImg={blog.image} />
            <div className='custom_container py-10 flex flex-col gap-7'>
                <h1 className='md:text-4xl font-semibold text-blue-950 dark:!text-white'>{blog.title}</h1>
                <ul className='flex flex-col gap-8'>
                    {blog.description.map((description, index) => (
                        <li className='list-disc font-medium dark:!text-white ' key={index}>
                            {description} <br />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};


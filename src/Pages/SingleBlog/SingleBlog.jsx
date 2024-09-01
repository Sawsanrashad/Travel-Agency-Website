import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FormattedMessage } from 'react-intl';
import { useParams } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import { BlogContent } from './BlogContent/BlogContent';
import Testominals from '../../Components/Testominals/Testominals';
import IconSlider from '../../Components/IconSlider/IconSlider';
import { useRecoilState } from 'recoil';
import { $lang } from '../../Store';
import { Loading } from '../../Components/Loading/Loading';

export const SingleBlog = () => {
    const [langState] = useRecoilState($lang);
    let { id } = useParams();
    const [blog, setBlog] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true)
        axios.get(`http://localhost:3000/blogs/${id}`)
            .then((response) => {
                setBlog(response.data);
            })
            .catch((error) => {
                console.error("There was an error fetching the data!", error);
            }).finally(() => {
                setIsLoading(false);
            });
    }, [id]);

    let content;
    if (isLoading) {
        content = <Loading />
    } else if (!blog) {
        content =
            <div className=' flex justify-center items-center'>
                <h3 className='text-center dark:text-white h-full'> {<FormattedMessage id='noToursToShow' />}</h3 >
            </div>
    } else {
        content =
            <>
                <BlogContent blog={blog[`${langState}`]} />
            </>
    }

    return (
        <div>
            {content}
            <Testominals />
            <IconSlider />
        </div>
    )
}

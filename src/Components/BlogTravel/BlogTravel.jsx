import './BlogTravel.scss';
import s1 from '../../assets/images/s1.jpg';
import s2 from '../../assets/images/s2.jpg';
import s3 from '../../assets/images/s3.jpg';
import s4 from '../../assets/images/3.jpg';
import s5 from '../../assets/images/s4.jpg';
import s6 from '../../assets/images/s5.jpg';
import TravelSlide from '../Travel/component/TravelSlide';
import { FormattedMessage } from 'react-intl';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { $lang } from '../../Store';
export default function BlogTravel() {
    const [langState] = useRecoilState($lang);
    const [blogs, setBlogs] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        setIsLoading(true)
        axios.get(`http://localhost:3000/blogs`)
            .then((response) => {
                setBlogs(response.data);
            })
            .catch((error) => {
                console.error("There was an error fetching the data!", error);
            }).finally(() => {
                setIsLoading(false);
            });
    }, []);
    console.log(setBlogs)

    let content;
    if (isLoading) {
        content =
            <div className='flex items-center justify-center'>
                <div class="spinner-border text-primary" role="status">
                    <span className="visually-hidden dark:text-white">Loading...</span>
                </div>
            </div>
    } else if (!blogs) {
        content = <h3 className='text-center h-full dark:text-white '> {<FormattedMessage id='noToursToShow' />}</h3 >
    } else {
        content =
            <div className='custom_container col-12 h-full'>
                <div className='md:grid md:grid-cols-3 h-full gap-5'>
                    {
                        blogs.map((blog, index) => {
                            return (
                                <div className='py-5 mb-5 flex justify-center items-center h-full '>
                                    <Link to={`/blog/${blog?.id}`}>
                                        <TravelSlide blog={blog[`${langState}`]} />
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>

            </div>
    }
    return (
        <div id='blogTravel' className='col-12 dark:!bg-[#0e1b31]'>
            {content}
        </div>
    )
}

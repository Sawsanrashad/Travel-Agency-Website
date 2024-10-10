import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import './Modal.css';

export const Modal = ({ show, children, size, setAddForm, setEditForm, setAddBlog, setEditBlog, setEditInfo }) => {
    const [contentHeight, setContentHeight] = useState(300);
    const contentRef = useRef();

    function closeModal() {
        if (setAddBlog) setAddBlog(false);
        if (setAddForm) setAddForm(false);
        if (setEditForm) setEditForm(false);
        if (setEditBlog) setEditBlog(false);
        if (setEditInfo) setEditInfo(false);
    }

    useLayoutEffect(() => {
        if (contentRef.current) {
            setContentHeight(contentRef.current.scrollHeight);
        }
    }, [contentRef.current?.scrollHeight, show]);

    return (
        <div
            className={`fixed inset-0 w-full h-full bg-[#00000073] z-20 flex items-center overflow-auto justify-center modal__overlay ${show ? 'flex' : 'hidden'}`}
            onClick={closeModal}
        >
            <div
                className={`absolute ${contentHeight < 650 ? 'centerModal' : 'top-0'} py-20 flex items-center justify-center ${size === 'md' ? 'min-w-[50%]' : size === 'lg' ? 'min-w-[75%]' : ''}`}
                onClick={(event) => event.stopPropagation()}
            >
                <div ref={contentRef} className='bg-white dark:bg-[#0e1b31] p-11 relative rounded-lg w-full'>
                    <span onClick={closeModal} className='opacity-60 hover:opacity-100 transition-all duration-500 absolute top-[10px] right-[10px] cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 30 30">
                            <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"></path>
                        </svg>
                    </span>
                    {children}
                </div>
            </div>
        </div>
    );
};

import React from 'react'
import { ClipLoader } from 'react-spinners'

export const Loading = () => {
    return (
        <div className='flex items-center justify-center'>
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden"><span className="spinner"><ClipLoader /></span></span>
            </div>
        </div>
    )
}

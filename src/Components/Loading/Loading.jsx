import React from 'react'

export const Loading = () => {
    return (
        <div className='flex items-center justify-center'>
            <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}

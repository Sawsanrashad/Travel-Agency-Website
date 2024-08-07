import React from 'react'
import './Error.css'
export const Error = ({ children, className }) => {
    return (
        <span className={` errorMsg my-2 px-2 text-red-700 ${className ? className : ""}`}>{children}</span>
    )
}

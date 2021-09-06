import React from 'react'

function TextError (props) {
    return (
        <div className='text-error'>
            <i className="fs-5 ms-2 fas fa-exclamation-circle"></i>
            <span>{props.children}</span>
        </div>
    )
}

export default TextError
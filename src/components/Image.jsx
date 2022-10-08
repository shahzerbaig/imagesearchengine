import React from 'react'
export const Image = (props) => {
    let source = props.url;
    return (
        <img 
            className='image'
            src={source}
            alt='food'/>
    )
}

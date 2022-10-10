import React from 'react'
import '../styles/stats.css'
export const Stats = (props) => {
    return (
        <div className='statistics'> 
            <div id='subheading'>Random</div>
            <p id='totalImageText'>{props.data.length} Images has been found</p>
        </div>
    )
}

import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/stats.css';

//Stats component is used to display total number of data Items in the state
export const Stats = (props) => {
    const data = useSelector((state)=> state);
    return (
        <div className='statistics'> 
            {data.data?<>
                <div id='subheading'>Random</div>
                <p id='totalImageText'>{data.data.length} Images has been found</p></>:
                <p></p>}
        </div>
    )
}

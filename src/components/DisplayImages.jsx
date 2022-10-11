import React from 'react';
import {Image} from '../components/Image';
import { useSelector } from 'react-redux';
import '../styles/displayImages.css'

//Display Image Area is used when the data is present in the state.
export const DisplayImages = () => {
    const data = useSelector((state)=> state);

    return (
        <div className='displayImages'>
            {data?data.data.map(item=><Image key={item.id} url={item.urls.thumb}/>):<p></p>}
        </div>
    )
};






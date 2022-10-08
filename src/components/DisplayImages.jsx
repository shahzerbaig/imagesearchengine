import React from 'react';
import '../styles/displayImages.css'
import {Image} from '../components/Image'
import apple from '../assets/apple.jpeg';
import apple1 from '../assets/apple1.jpeg';
import apple2 from '../assets/apple2.png';
import apple3 from '../assets/apple3.jpeg';
export const DisplayImages = () => {
    return (
        <div className='displayImages'>
            <Image url={apple}/>
            <Image url={apple1}/>
            <Image url={apple2}/>
            <Image url={apple3}/>
            <Image url={apple}/>
            <Image url={apple1}/>
            <Image url={apple2}/>
            <Image url={apple3}/>
            <Image url={apple}/>
            <Image url={apple1}/>
            <Image url={apple2}/>
            <Image url={apple3}/>
            <Image url={apple}/>
            <Image url={apple1}/>
            <Image url={apple2}/>
            <Image url={apple3}/>
        </div>
    )
}

import React, { useState } from 'react';
import {Image} from '../components/Image'
import '../styles/displayImages.css'
import apple from '../assets/apple.jpeg';
import apple1 from '../assets/apple1.jpeg';



export const DisplayImages = (props) => {
    if(props.data.length !== 0){
        //props.setData({id:'sha',image:apple})
       // props.setData({id:'shaa',imageUrl:apple1})
        
    }
    return (
        <div className='displayImages'>
            {props.data.length !==0?
                props.data.map(item=><Image key={item.id} url={item.urls.thumb}/>):
                <p></p>}
        </div>
    )
};
/*
{console.log(props.data)}
import apple from '../assets/apple.jpeg';
import apple1 from '../assets/apple1.jpeg';
import apple2 from '../assets/apple2.png';
import apple3 from '../assets/apple3.jpeg';
    let image = [
                {id:1,url:props.data[0].image},
                {id:2,url:apple1},
                {id:3,url:apple2},
                {id:4, url:apple3},
                {id:5,url:apple},
                {id:6,url:apple1},
                {id:7,url:apple2},
                {id:8, url:apple3},
                {id:9,url:apple},
                {id:10,url:apple1},
                {id:11,url:apple2},
                {id:12, url:apple3},]
 */

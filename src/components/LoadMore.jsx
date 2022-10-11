import React from 'react';
import '../styles/loadmore.css';
import { useSelector } from 'react-redux';

//This Component is for Load Button
export const LoadMore = () => {
    const data = useSelector((state)=> state);

    //Load Button function which when activated print data of the state on the console
    function logdata(){
        console.log(`This is from load Button ${data.data.length}`);
    }
    return (
        <div className='loadmorecontainer'>
            {data.data.length !==0?<button onClick={logdata} className='loadMore'>Load More</button>:<p></p>}
        </div>
        
    )
}

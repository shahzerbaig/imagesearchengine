import React from 'react';
import '../styles/loadmore.css'
export const LoadMore = (props) => {
    const logdata=()=>{
        console.log(props.data)
    }
    return (
        <div className='loadmorecontainer'>
            <button onClick={logdata} className='loadMore'>Load More</button>
        </div>
        
    )
}

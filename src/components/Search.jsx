import React,{useState} from 'react';
import '../styles/search.css';
import { getSearch } from '../fetch/getSearch';
import { useDispatch } from 'react-redux';
import {actions} from '../store/index.js'


export const Search = () => {
    //Local State to handle component level data management
    const [searchText,getSearchText] = useState('');

    const dispatchData = useDispatch();
    
    async function handleForm(event){
        event.preventDefault();
        
        const response = getSearch(searchText);
        response.then(res => res.json())
                .then(res => dispatchData(actions.addData(res.results)))
                .catch(err => console.log(`this is the Error ${err}`))
    }
    
    return (
        <div className='search'>
            <form className='searchForm' onSubmit={handleForm}>
            <input 
            id='search'
            type='search'
            value={searchText}
            onChange={e=>getSearchText(e.target.value)}
            placeholder='Search for photos...'
            />
            <label id='submit'><input type='submit'/>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white"  viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg>
            </label>
            </form>
            
        </div>
    )
}

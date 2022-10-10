import React, { useState } from 'react';
import './App.css';
import { DisplayImages } from './components/DisplayImages';
import { Search } from './components/Search';
import {Stats} from './components/Stats.jsx'
import {LoadMore} from './components/LoadMore.jsx'
function App() {
  const [data,setData] = useState([]);
  
  return (
    <div className="App">
      <Search data={data} setData={setData}/>
      <Stats data={data}/>
      <DisplayImages data={data}/>
      <LoadMore data={data}/>
    </div>
  );
}

export default App;

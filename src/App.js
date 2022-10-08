import './App.css';
import { DisplayImages } from './components/DisplayImages';
import { Search } from './components/Search';
import {Stats} from './components/Stats.jsx'
import {LoadMore} from './components/LoadMore.jsx'
function App() {
  return (
    <div className="App">
      <Search/>
      <Stats/>
      <DisplayImages/>
      <LoadMore/>
    </div>
  );
}

export default App;

import {useState} from "react";

import './App.css';
import './minireset.css';

import Places from './components/Places.js';
import Weather from './components/Weather.js';
import PlaceInfo from './components/PlaceInfo.js';

const App = () => {
  const [place, setPlace] = useState([]);

  return (
    <>
      <Places handleClick={setPlace} />
      <div className="placeInfo">
        <PlaceInfo place={place}/>
        <Weather place={place}/>
      </div>
    </>
  )
}

export default App
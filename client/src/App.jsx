import React, {useState} from 'react';
import './App.css';
import Nav from './components/Nav'
import Cards from './components/Cards.jsx';


export default function App() {

  const [cities, setCities] = useState([]);
  function onSearch(ciudad) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=f56f233b04c9d4aea3d1eed044dc786e&units=metric`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            temp: Math.round(recurso.main.temp),
            name: recurso.name,
            feels_like:Math.round(recurso.main.feels_like)

            
          };
          console.log(recurso)
          setCities(oldCities => [...oldCities, ciudad]);
        } else {
          alert("City not found");
        }
      });
      
    }
    function onClose(id) {
      setCities(oldCities => oldCities.filter(c => c.id !== id));
    }


    console.log(cities)
  return (
    <div className="App">
    <Nav 
      onSearch={onSearch}/>
       <Cards 
       cities={cities}
       onClose={onClose} />
    </div>
  );
 

}


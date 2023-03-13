import React, {useState} from 'react';
import './App.css';
import Nav from './components/Nav'
import Cards from './components/Cards.jsx';

const {VITE_API_KEY}=import.meta.env


export default function App() {

  const [cities, setCities] = useState([]);
  function onSearch(ciudad) {
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${VITE_API_KEY}&units=metric`)
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


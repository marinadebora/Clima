import React from 'react';
import style from '../styles/cards.module.css'

import Card from './Card.jsx';

export default function Cards({cities, onClose}) {
  if(cities){
    return (
      <div className={style.contenedor}>
        {cities.map(c => <Card
            max={c.max}
            min={c.min}
            name={c.name}
            img={c.img}
            onClose={() => onClose(c.id)}
            id={c.id}
            temp={c.temp}
            feels_like={c.feels_like}
          /> )}
      </div>
    );
  } else {
    return(
      <div>Sin ciudades</div>
    )
  }
}

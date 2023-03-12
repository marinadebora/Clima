import React from 'react';
import a from '../styles/card.module.css'

export default function Card({ min, max, name, img, onClose, temp, feels_like })
{
  return (
    <div className={a.container}>
      <div id="closeIcon" className={a.data}>
        <button onClick={onClose} className={a.btn}>X</button>
      </div>
      <div className="card-body">
        <h2 className={a.title}>{name}</h2>
        <div className={a.containerData}>
          <div className={a.data}>
            <div className={a.temp}>
              <p>Min</p>
              <p>{min}°</p>
            </div>
            <div className={a.temp}>
              <p>Max</p>
              <p>{max}°</p>
            </div>
            <div className={a.temp}>
              <p>RealFeell</p>
              <p>{feels_like}°</p>
            </div>
          </div>
          <div className={a.tempAct}><p>{temp}°</p></div>
          <div className={a.logo}>
            
            <img className="iconoClima" src={"http://openweathermap.org/img/wn/" + img + "@2x.png"} width="80" height="80" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

import React, { useState } from "react";
import style from '../styles/search.module.css'

export default function SearchBar({onSearch}) {
  const [cities, setCities] = useState('');
  return (
    <div className={style.container}>
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(cities);
      setCities('')
    }}>
      <input
        type="text"
        placeholder="City..."
        value={cities}
        onChange= {e=>setCities(e.target.value) }
        className={style.city}
      />
      <input type="submit" value="Search"className={style.btn} />
    </form></div>
  );
}

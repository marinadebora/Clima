import React from 'react';

import SearchBar from './SearchBar.jsx';


function Nav({onSearch}) {
  return (
    <div>
  <br /><br /><br />
<SearchBar onSearch={onSearch}/>
    </div>
  );
 
};

export default Nav;

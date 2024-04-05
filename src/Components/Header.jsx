import React from 'react';
import NavBar from './NavBar';
import SearchBar from './SerchBar';

const Header = () => {
  return (
    <div className="mt-0 py-1 drop-shadow-md shadow-xl">
      <SearchBar />
      <NavBar />
    </div>
  );
};

export default Header;

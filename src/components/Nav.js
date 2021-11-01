import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';

import logo from './waves-music.svg';

const Nav = ({ setLibraryStatus, libraryStatus }) => {
  const openLibraryHandler = () => {
    setLibraryStatus(!libraryStatus);
  };

  return (
    <nav>
      <img src={logo} alt='Waves music logo' />
      <button
        className={libraryStatus ? 'library-active' : ''}
        onClick={openLibraryHandler}
      >
        <FontAwesomeIcon icon={faMusic}></FontAwesomeIcon>
      </button>
    </nav>
  );
};

export default Nav;

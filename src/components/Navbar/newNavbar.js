import React from 'react';
import * as Icons from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <>
      <div className='navbar'>
        <Link to='#' className='menu-bars'>
          <Icons.FaBars />
        </Link>
      </div>
    </>
  );
};

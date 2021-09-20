import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { MenuItems } from './MenuItems';
import './NavbarStyles.css';
import { IconContext } from 'react-icons';

const Navbar = () => {
  const [sidebar, setSideBar] = useState(false);
  const showSideBar = () => setSideBar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff', fontSize: '1.5rem' }}>
        <div className='navbar'>
          <span>MENU</span>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSideBar} />
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu nav-menu--active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSideBar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {MenuItems.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span className='menu-item-title'>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;

import React, { useContext, Fragment } from 'react';
import MenuItems from './MenuItems';
import { ModalContext } from '../../Helper/ModalProvider';
import useNavbarLogic from './NavbarLogic';

const Navbar = ({ children }) => {
  const newState = useContext(ModalContext);
  const { openMobileNav, toggleMobileNav } = useNavbarLogic();

  return (
    <Fragment>
      <div className='hamburger_menu' onClick={toggleMobileNav}>
        <div className='hamburger_line'></div>
        <div className='hamburger_line'></div>
        <div className='hamburger_line'></div>
      </div>
      <div className={`overlay ${openMobileNav ? 'overlay-blur' : ''}`}></div>

      <nav className={`${openMobileNav ? 'nav--open' : 'nav--close'}`}>
        <span className='close_nav' onClick={toggleMobileNav}>
          ×
        </span>
        <ul>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <button onClick={newState[item.openModal]}>{item.label}</button>
              </li>
            );
          })}
        </ul>
      </nav>
    </Fragment>
  );
};

export default Navbar;

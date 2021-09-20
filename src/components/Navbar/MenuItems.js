import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const MenuItems = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text',
  },
  {
    title: 'Projects',
    path: '/projects',
    icon: <FaIcons.FaHardHat />,
    cName: 'nav-text',
  },
  {
    title: 'About',
    path: '/about',
    icon: <FaIcons.FaUserCircle />,
    cName: 'nav-text',
  },
  {
    title: 'Resume',
    path: '/resume',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text',
  },
  {
    title: 'Contact',
    path: '/contact',
    icon: <AiIcons.AiFillContacts />,
    cName: 'nav-text',
  },
];

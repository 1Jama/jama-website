import React from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';
const Navbar = () => {
  return (
    <div className='navbar'>
      <ul>
        <li>
          <Link
            activeClass='active'
            to='sectionId'
            spy={true}
            smooth={true}
            duration={500}
          >
            section1
          </Link>
        </li>
        <li>
          <Link
            activeClass='active'
            to='about'
            spy={true}
            smooth={true}
            duration={500}
          >
            About
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;

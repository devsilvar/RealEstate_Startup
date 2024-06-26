import { useState } from 'react';
import './navbar.scss';
const Navbar = () => {
  const [isNavOpen, setisNavOpen] = useState(false);
  return (
    <nav>
      <ul className='left'>
        <span>
          <img src='/logo.png' alt='' />
          <p>RzHomes</p>
        </span>
        <li>
          <a href=' '>Home</a>
        </li>
        <li>
          <a href=' '>About</a>
        </li>
        <li>
          <a href=' '>Contact</a>
        </li>
        <li>
          <a href=' '>Message</a>
        </li>
      </ul>
      <div className='right-section'>
        <ul className='right'>
          <li>
            <a href=' '>Sign in</a>
          </li>
          <li>
            {' '}
            <button>
              {' '}
              <a href=' '>Sign up</a>
            </button>{' '}
          </li>

          <div className='smallNav'>
            <img
              src='./menu.png'
              alt=''
              onClick={() => setisNavOpen((prev) => !prev)}
            />
            <div className={isNavOpen ? 'menu active' : 'menu'}>
              <a href=''>Home</a>
              <a href=''>About</a>
              <a href=''>Contact</a>
              <a href=''>Message</a>
              <a href=''>Sign in</a>
              <a href=''>Sign Up</a>
            </div>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

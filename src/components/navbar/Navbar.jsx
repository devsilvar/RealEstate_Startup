import { useState, useEffect } from 'react';
import './navbar.scss';
import { FaBarsStaggered } from 'react-icons/fa6';
import { IoMdClose } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { userData } from '../../api/fakeData';
const Navbar = ({ refs }) => {
  const [isNavOpen, setisNavOpen] = useState(false);
  const [isActive, setisActive] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 30 ? setisActive(true) : setisActive(false);
    });
  });
  const user = true;

  return (
    <nav ref={refs} className={isActive && 'active'}>
      <ul className='left'>
        <Link to='/'>
          <span>
            <img src='/logo.png' alt='' />
            <p>RzHomes</p>
          </span>
        </Link>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/About'>About</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
        <li>
          <Link to='/message'>Message</Link>
        </li>
      </ul>
      <div className='right-section'>
        <ul className='right'>
          {user ? (
            <div className='user'>
              <img src={userData.img} alt='' />
              <span>{userData.name}</span>
              <Link to='/profile' className='profile'>
                <div className='notification'>3</div>
                <span>Profile</span>
              </Link>
            </div>
          ) : (
            <>
              <li>
                <Link to='/signin'>Sign in</Link>
              </li>
              <li>
                <button>
                  <Link to='/signout'>Sign up</Link>
                </button>
              </li>
            </>
          )}
          <div className='smallNav'>
            {isNavOpen == false && (
              <FaBarsStaggered
                className='imgIcon'
                onClick={() => setisNavOpen((prev) => !prev)}
              />
            )}

            <div className={isNavOpen ? 'menu active' : 'menu'}>
              {isNavOpen && (
                <IoMdClose
                  className='closeIcon'
                  onClick={() => setisNavOpen((prev) => !prev)}
                />
              )}
              <Link to=''>Home</Link>
              <Link to=''>Linkbout</Link>
              <Link to=''>ContLinkct</Link>
              <Link to=''>MessLinkge</Link>
              <Link to=''>Sign in</Link>
              <Link to=''>Sign Up</Link>
            </div>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

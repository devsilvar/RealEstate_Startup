import React from 'react';
import './footer.scss';
import { FooterLinks } from '../../api/utils';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer>
      <div className='wrapper'>
        <div className='inner-wrapper'>
          <div className='link'>
            <h4>Quick Links</h4>

            <ul>
              {FooterLinks.slice(0, 4).map((link) => {
                return (
                  <li>
                    <Link to={link.url}>{link.name} </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className='link'>
            <h4>Quick Links</h4>
            <ul>
              {FooterLinks.slice(4, 8).map((link) => {
                return (
                  <li>
                    <Link to={link.url}>{link.name} </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className='link'>
            <h4>Quick Links</h4>
            <ul>
              {FooterLinks.slice(8, FooterLinks.length).map((link) => {
                return (
                  <li>
                    <Link to={link.url}>{link.name} </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <section>
          <div className='icons'></div>
          <div className='copywright'>
            <p>
              <u> National Transaction Corporation</u> is a Registered MSP/ISO
              of Elavon, Inc.
            </p>
            <p>
              {' '}
              <b> © All right Reversed.Sunlimetech</b>
            </p>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;

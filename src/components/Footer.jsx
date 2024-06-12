import React from 'react';
import './footer.scss';

const Footer = () => {
  return (
    <footer>
      <div className='wrapper'>
        <div className='inner-wrapper'>
          <div className='link'>
            <h4>Quick Links</h4>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Faq</li>
              <li>Get Started</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className='link'>
            <h4>Quick Links</h4>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Faq</li>
              <li>Get Started</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className='link'>
            <h4>Quick Links</h4>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Faq</li>
              <li>Get Started</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        <section>
          <div className='icons'></div>
          <div className='copywright'>
            <p>
              <u> National Transaction Corporation</u> is a Registered MSP/ISO
              of Elavon, Inc. Georgia a wholly owned subsidiary of U.S. Bancorp,
              Minneapolis, MN
            </p>
            <p>
              {' '}
              <b> © All right Reversed.Sunlimetech</b>
            </p>
          </div>
        </section>
        Foooter
      </div>
    </footer>
  );
};

export default Footer;

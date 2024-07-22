import React from 'react';
import './layout.scss';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import { Outlet } from 'react-router-dom';

const Layout = ({refs}) => {
  return (
    <section className='layout'>
      <div className='navbar'>
        <Navbar refs={refs} />
      </div>
      <div className='content'>
        <Outlet />
      </div>
      <div className='footer'>
        <Footer />
      </div>
    </section>
  );
};
export default Layout;

import React from 'react';
import './layout.scss';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <section className='layout'>
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='conte'>
        <Outlet />
      </div>
      <Footer />
    </section>
  );
};
export default Layout;

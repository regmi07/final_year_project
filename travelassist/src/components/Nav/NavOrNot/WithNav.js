import React from 'react';
import Nav from '../Nav';
import Footer from '../../Footer/Footer'
import { Outlet } from 'react-router';

export default () => {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
};
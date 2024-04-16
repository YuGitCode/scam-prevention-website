import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/NavBar';
import styles from '../styles';

const MainLayout = () => {
  return (
    <>
      <Navbar />

      <Outlet />
    </>
  );
};

export default MainLayout;

import logo from './logo.svg';
import './App.css';
import { Link, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import { useState } from 'react';
import { Helmet } from 'react-helmet';

import PageContainer from './components/PageContainer';
import Footer from './components/Footer';
import MouseCursor from './components/MouseCursor';


export default function App() {

  const [darkMode, setDarkMode] = useState(1);


  return (
    <>

      <Helmet>
        <meta charSet="utf-8" />
        {/* <title>My Title</title> */}
        <style>
          {darkMode ? 'body {background: #191919}' : 'body {background: #fff}'}
        </style>
      </Helmet>

      <MouseCursor darkMode={darkMode}></MouseCursor>

      <div className={`${darkMode ? 'dark' : ''}`} >

        <Navbar darkMode={darkMode} swapDarkMode={() => setDarkMode(!darkMode)} />

        <PageContainer />

        <Footer darkMode={darkMode} />

      </div>


    </>
  );
}
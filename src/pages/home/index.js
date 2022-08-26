import React, { useEffect, useState } from 'react';
import Header from '../../common/components/Header';
import PostsList from './components/PostsList';
import '../../common/styles/Page.css';

const Home = () => {
  return <div className="Page">
    <Header/>
    <PostsList/>
  </div>;
};

export default Home;

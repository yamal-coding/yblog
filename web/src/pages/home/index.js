import React, { useEffect, useState } from 'react';
import PostPreview from './components/PostPreview';
import data from '../../common/mock/MockedPosts.json'
import Header from '../../common/components/Header';

const Home = () => {
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    setPosts(data);
  }, []);
  
  return <div>
    <Header/>
    {posts.map((post, index) =>
      <PostPreview 
        id={post.id} 
        title={post.title} 
        description={post.description} 
        key={index}
      />
    )}
  </div>;
};

export default Home;

import React from 'react';
import { useState } from 'react';
import PostPreview from './PostPreview';
import data from '../../../common/mock/MockedPosts.json'

const Home = () => {
    const [posts, setPosts] = useState([]);
  
    function fetchPosts() {
      setPosts(data);
    } 
  
    return <div>
      <button onClick={fetchPosts}>Fetch posts</button> // TODO still didnt figure out how to fetch on load
      {posts.map((post, index) =>
        <PostPreview 
          id={post.id} 
          title={post.title} 
          description={post.description} 
          key={index}
        />
      )}
    </div>;
}

export default Home;
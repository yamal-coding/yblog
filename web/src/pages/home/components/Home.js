import React from 'react';
import { useState } from 'react';
import PostPreview from './PostDetail';

const Home = () => {
    const [posts, setPosts] = useState([]);
  
    function fetchPosts() {
      setPosts([
        {id: 1, title: "First post", description: "First description"},
        {id: 2, title: "Second post", description: "Second description"},
        {id: 3, title: "Third post", description: "Third description"}
      ]);
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
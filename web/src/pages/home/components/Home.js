import React, { useEffect, useState } from 'react';
import PostPreview from './PostPreview';
import data from '../../../common/mock/MockedPosts.json'

const Home = () => {
    const [posts, setPosts] = useState([]);
  
    useEffect(() => {
      setPosts(data);
    }, []);
  
    return <div>
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

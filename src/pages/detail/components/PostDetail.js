import React, { useEffect, useState } from 'react';
import Box from '../../../common/components/Box';

const PostDetail = ({id}) => {
  const [post, setPost] = useState(null)

  useEffect(() => {
    try {
      const data = require('../../../posts/post_' + id + '.json')
      setPost(data)
    } catch (error) { }
  }, [id]);

  if (post) {
    return <div>
      <Box>
        <h3>{post.title} (id {post.id})</h3> 
        <p>{post.date}</p>
        <p>{post.shortDescription}</p>
        <p>{post.content}</p>
      </Box>
    </div>;
  } else {
    return <div/>
  }
};

export default PostDetail;

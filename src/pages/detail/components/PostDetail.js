import React, { useEffect, useState } from 'react';
import Box from '../../../common/components/Box';

const PostDetail = ({id}) => {
  const [post, setPost] = useState(null)

  useEffect(() => {
    setPost({
      id: id,
      title: "Mocked title",
      description: "Mocked description",
      date: "27/10/2020"
    })
  }, [id]);

  if (post) {
    return <div>
      <Box>
        <h3>{post.title} (id {post.id})</h3> 
        <p>{post.date}</p>
        <p>{post.description}</p>
      </Box>
    </div>;
  } else {
    return <div/>
  }
};

export default PostDetail;

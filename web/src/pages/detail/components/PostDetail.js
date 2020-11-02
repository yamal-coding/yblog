import React, { useEffect, useState } from 'react';
import Box from '../../../common/components/Box';

const PostDetail = ({id}) => {
  const [post, setPost] = useState(null)

  useEffect(() => {
    setPost({
      id: id,
      title: "Mocked title",
      description: "Mocked description"
    })
  }, [id]);

  if (post) {
    return <Box>
      <h2>{post.title} (id {post.id})</h2>
      <p>{post.description}</p>
    </Box>;
  } else {
    return <div>Loading...</div>
  }
};

export default PostDetail;

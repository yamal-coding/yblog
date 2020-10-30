import React, { useEffect, useState } from 'react';
import Box from '../../../common/components/Box';

const PostDetail = (props) => {
  const [post, setPost] = useState(null)

  useEffect(() => {
    setPost({
      id: props.match.params.id,
      title: "Mocked title",
      description: "Mocked description"
    })
  }, [props.match.params.id]);

  if (post) {
    return <Box>
      <h2>{post.title} (id {post.id})</h2>
      <p>{post.description}</p>
    </Box>;
  } else {
    return <div>Loading...</div>
  }
}

export default PostDetail;

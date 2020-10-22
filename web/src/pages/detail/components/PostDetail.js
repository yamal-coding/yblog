import React from 'react';
import Box from '../../../common/components/Box';

const PostDetail = (props) => {
  const { match: { params } } = props;

  return <Box>
    <h1>This is the detail of the post with id {params.id}</h1>
  </Box>;
}

export default PostDetail;
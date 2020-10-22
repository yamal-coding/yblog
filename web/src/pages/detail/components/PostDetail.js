import React from 'react';
import Box from '../../../common/components/Box';

const PostDetail = (props) => {
  return <Box>
    <h1>This is the detail of the post with id {props.match.params.id}</h1>
  </Box>;
}

export default PostDetail;

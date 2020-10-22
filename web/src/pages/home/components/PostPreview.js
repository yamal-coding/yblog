import React from 'react';
import { Link } from "react-router-dom";
import Box from '../../../common/components/Box';

const PostPreview = ({id, title, description}) => {
    return <Box>
      <strong>{title}</strong>
      <p>{description}</p>
      <Link to={`/${id}`}>See full post</Link>
    </Box>;
  };


  export default PostPreview;
  
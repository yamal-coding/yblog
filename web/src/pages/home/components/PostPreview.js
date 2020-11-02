import React from 'react';
import { createUseStyles } from 'react-jss';
import { Link } from "react-router-dom";
import Box from '../../../common/components/Box';

const useStyles = createUseStyles({
  link: {
      textAlign: "right",
      margin: '5px'
  }
});

const PostPreview = ({id, title, description}) => {
  const classes = useStyles()

  return <Box>
    <strong>{title}</strong>
    <p>{description}</p>
    <div className={classes.link}>
      <Link to={`/${id}`}>See full post</Link>
    </div>
  </Box>;
};

export default PostPreview;
  
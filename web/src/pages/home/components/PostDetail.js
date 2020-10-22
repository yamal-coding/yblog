import React from 'react';
import { Link } from "react-router-dom";

const PostPreview = ({id, title, description}) => {
    return <div>
      <strong>{title}</strong>
      <p>{description}</p>
      <Link to={`/${id}`}>See full post</Link>
    </div>;
  };


  export default PostPreview;
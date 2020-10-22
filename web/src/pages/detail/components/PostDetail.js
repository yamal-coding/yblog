import React from 'react';

const PostDetail = (props) => {
  const { match: { params } } = props;

  return <div>
    <h1>This is the detail of the post with id {params.id}</h1>
  </div>;
}

export default PostDetail;
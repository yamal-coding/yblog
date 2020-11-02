import React, { useEffect, useState } from 'react';
import Header from '../../common/components/Header';
import PostDetail from './components/PostDetail';

const Detail = (props) => {
    const postId = props.match.params.id;
    
    return <div>
        <Header/>
        <PostDetail id={postId}/>
    </div>;
};

export default Detail;

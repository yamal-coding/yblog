import React, { useEffect, useState } from 'react';
import Header from '../../common/components/Header';
import PostDetail from './components/PostDetail';
import '../../common/styles/Page.css';

const Detail = (props) => {
    const postId = props.match.params.id;
    
    return <div className="Page">
        <Header/>
        <PostDetail id={postId}/>
    </div>;
};

export default Detail;

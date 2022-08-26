import data from '../../../posts/posts.json'
import React, { useEffect, useState } from 'react';
import PostPreview from './PostPreview';

const PostsList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        setPosts(data);
    }, []);

    return <div>
        {
        posts.map((post, index) =>
            <PostPreview
                id={post.id}
                title={post.title}
                description={post.shortDescription}
                key={index}
            />
        )}
    </div>
}

export default PostsList;
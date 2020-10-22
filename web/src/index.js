import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = useState([]);

  function fetchPosts() {
    setPosts([
      {id: 1, title: "First post", description: "First description"},
      {id: 2, title: "Second post", description: "Second description"},
      {id: 3, title: "Third post", description: "Third description"}
    ]);
  } 

  return <div>
    <button onClick={fetchPosts}>Fetch posts</button> // TODO still didnt figure out how to fetch on load
    {posts.map((post, index) =>
      <PostPreview 
        id={post.id} 
        title={post.title} 
        description={post.description} 
        key={index}
      />
    )}
  </div>;
}

const PostPreview = ({id, title, description}) => {
  return <div>
    <strong>{title}</strong>
    <p>{description}</p>
    <Link to={`/${id}`}>See full post</Link>
  </div>;
};

const PostDetail = (props) => {
  const { match: { params } } = props;

  return <div>
    <h1>This is the detail of the post with id {params.id}</h1>
  </div>;
}

ReactDOM.render(
  <Router>
     <div>
    <Route exact path="/" component={Home} />
    <Route path="/:id" component={PostDetail} />
    </div>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

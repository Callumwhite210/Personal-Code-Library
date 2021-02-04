import React, { useEffect } from "react";
import { List, ListItem } from "../List";
import DeleteBtn from "../DeleteBtn";
import { Link } from "react-router-dom";
import { useStoreContext } from "../../utils/GlobalState";
import { REMOVE_POST, UPDATE_POSTS, LOADING } from "../../utils/actions";
import API from "../../utils/API";
import { useState } from 'react';
import { Card, Container } from "react-bootstrap";

import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';

SyntaxHighlighter.registerLanguage('javascript', js)

function PostsList() {
  const [state, dispatch] = useStoreContext();

  //Function removes post by ID then calls to API.js (to be removed)
  const removePost = id => {
    API.deletePost(id)
      .then(() => {
        dispatch({
          type: REMOVE_POST,
          _id: id
        });
      })
      .catch(err => console.log(err));
  };

  //Gets Posts / Updates them
  const getPosts = () => {
    dispatch({ type: LOADING });
    API.getPosts()
      .then(results => {
        dispatch({
          type: UPDATE_POSTS,
          posts: results.data
        });
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      <h1 className="text-center post-card">Posts</h1>
      {state.posts.length ? (
        <Card className='justify-content-md-center' style={{ marginTop: 1 }}>
          {state.posts.map(post => (
            <ListItem key={post._id}>
              <Link to={"/posts/" + post._id}>
                <h4>{post.title}</h4> 
                <h6>by {post.author}</h6>                                                                   
              </Link>
              <SyntaxHighlighter>{post.body}</SyntaxHighlighter>
               
            </ListItem>
          ))}
        </Card>
        
      ) : (
        <h1> Currently no Posts </h1>
      )}
    </div>
  );
}

export default PostsList;
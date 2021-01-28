import React, { useEffect } from "react";
import { ListItem } from "../List";
import DeleteBtn from "../DeleteBtn";
import { Link } from "react-router-dom";
import { useStoreContext } from "../../utils/GlobalState";
import { REMOVE_POST, UPDATE_POSTS, LOADING } from "../../utils/actions";
import API from "../../utils/API";
import { useState } from 'react';
import { Card, Container, Row } from "react-bootstrap";
import { Form , FormControl , Button } from 'react-bootstrap';


function PostsList() {
  const [state, dispatch] = useStoreContext();

  //Function removes post by ID then calls to API.js
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
      <Form inline style={{ margin: 15 }}>
          <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
      </Form>
      {state.posts.length ? (
        <Container fluid>
        <Card style={{ margin: 15, color: '#5F918E' }}>
          {state.posts.map(post => (
            <ListItem key={post._id}>
              <Link to={"/posts/" + post._id}>
                <h5>
                  {post.title} by User {post.author}
                </h5>                
              </Link>
              <p> {post.body} </p>
               <DeleteBtn onClick={() => removePost(post._id)} />
            </ListItem>
          ))}
        </Card>
        </Container>
        
      ) : (
        <h1> Currently no Posts </h1>
      )}
    </div>
  );
}

export default PostsList;
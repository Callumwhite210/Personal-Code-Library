import React, { useEffect, Component } from "react";
import { ListItem } from "../List";
import DeleteBtn from "../DeleteBtn";
import { Link } from "react-router-dom";
import { useStoreContext } from "../../utils/GlobalState";
import { REMOVE_POST, UPDATE_POSTS, LOADING } from "../../utils/actions";
import API from "../../utils/API";
import { useState } from 'react';
import { Card, Container, Row } from "react-bootstrap";
import { Form , FormControl , Button } from 'react-bootstrap';

import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';

SyntaxHighlighter.registerLanguage('javascript', js)

function PostsList() {
  const [state, dispatch] = useStoreContext();
  const [posts] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);

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

  //Search
   useEffect(() => {
     setFilteredPosts(
       posts.filter((post) =>
         post.body.toLowerCase().includes(search.toLowerCase())
     )
   );
  }, [search, posts]);


  return (
    <div>
      {/* search input  */}
      <input style={{ margin: 15 }} type='text' placeholder='search' onChange={(e) => setSearch(e.target.value)}/>
      {filteredPosts.map((post, idx) => (
        //I think this line is the problem. connect to render
        <posts key={idx} {...post} />
      ))}

      {state.posts.length ? (
        <Container fluid>
        <Card style={{ margin: 15 }}>
          {state.posts.map(post => (
            <ListItem key={post._id}>
              <Link to={"/posts/" + post._id}>
                <h4> {post.title} </h4> <h5> by {post.author} </h5>                             
              </Link>
              <SyntaxHighlighter>{post.body}</SyntaxHighlighter>
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
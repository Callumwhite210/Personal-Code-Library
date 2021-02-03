import React, { useRef } from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_POST, LOADING } from "../../utils/actions";
import API from "../../utils/API";
import { Button, Container } from 'react-bootstrap';


function CreatePostForm() {
  const titleRef = useRef();
  const bodyRef = useRef();
  const authorRef = useRef();
  const [state, dispatch] = useStoreContext();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: LOADING });
    API.savePost({
      title: titleRef.current.value,
      body: bodyRef.current.value,
      author: authorRef.current.value
    })
      .then(result => {
        dispatch({
          type: ADD_POST,
          post: result.data
        });
      })
      .catch(err => console.log(err));

    titleRef.current.value = "";
    bodyRef.current.value = "";
  };

  return (
    <Container fluid>
      <h1 className='post-card'>Create a post</h1>
      <form className="form-group mt-3 mb-2" onSubmit={handleSubmit}>
        <input className="form-control mb-2" required ref={titleRef} placeholder="Post title" />
        <textarea className="form-control mb-2" required ref={bodyRef} style={{ height: 300 }} placeholder="Code"/>
        <input className="form-control mb-2" ref={authorRef} placeholder="User Name"/>   
        <Button className="btn btn-success mt-3 mb-5" disabled={state.loading} type="submit">
          Post!
        </Button>                         
      </form>
    </Container>
  );
}

export default CreatePostForm;

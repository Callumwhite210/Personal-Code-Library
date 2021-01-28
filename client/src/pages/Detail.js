import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { useStoreContext } from "../utils/GlobalState";
import { SET_CURRENT_POST, ADD_FAVORITE, REMOVE_FAVORITE } from "../utils/actions";
import { Card } from "react-bootstrap";
import { Button } from 'react-bootstrap';

const Detail = props => {
  const [state, dispatch] = useStoreContext();

  useEffect(() => {
    API.getPost(props.match.params.id)
      .then(res => dispatch({ type: SET_CURRENT_POST, post: res.data }))
      .catch(err => console.log(err));
  }, []);

  const addFavorite = () => {
    dispatch({
      type: ADD_FAVORITE,
      post: state.currentPost
    });
  };

  const removeFavorite = () => {
    dispatch({
      type: REMOVE_FAVORITE,
      _id: state.currentPost._id
    });
  };

  return (
    <>{state.currentPost ? (
      <Container fluid>
        <Row>
          <Col size="md-10">
          <Card style={{ margin: 10 }}>
            <article>
              <h2>{state.currentPost.title} by {state.currentPost.author}</h2>
              <p>{state.currentPost.body}</p>
            </article>
          </Card>
          </Col>
          {state.favorites.indexOf(state.currentPost) !== -1 ? (
            <Button className="btn btn-danger" onClick={removeFavorite}>
                Remove from Favorites!
            </Button>
          ) : (
            <Button className="btn" onClick={addFavorite}>
               Add to Favorites
            </Button>
          )}
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Posts</Link>
          </Col>
        </Row>
      </Container>
    ) : (
      <div>loading...</div>
    )}</>
  );
};

export default Detail;

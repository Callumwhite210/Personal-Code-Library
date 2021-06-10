import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";
import { useStoreContext } from "../utils/GlobalState";
import { SET_CURRENT_POST, ADD_FAVORITE, REMOVE_FAVORITE } from "../utils/actions";
import { Card } from "react-bootstrap";
import { Button } from 'react-bootstrap';

import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';

SyntaxHighlighter.registerLanguage('javascript', js)

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
          <Card style={{ margin: 15}}>
              <Card.Title style={{margin: 10}}>
              <h3 className="post-card">{state.currentPost.title}</h3><h4 className="post-card"> by {state.currentPost.author}</h4>
              </Card.Title>
              <Card.Body>
              <SyntaxHighlighter>
                {state.currentPost.body}
              </SyntaxHighlighter>
            </Card.Body>
          </Card>
         </Col>
              {/* create is authenticated state for buttons */}
          {state.favorites.indexOf(state.currentPost) !== -1 ? (
            <Button variant="danger" size="sm" className="btn" onClick={removeFavorite}>
                Remove from Favorites!
            </Button>
          ) : (
            <Button variant="primary" size="sm" className="btn" onClick={addFavorite}>
               Add to Favorites
            </Button>
          )}
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/"> Back to Posts</Link>
          </Col>
        </Row>
      </Container>
    ) : (
      <div>loading...</div>
    )}</>
  );
};

export default Detail;

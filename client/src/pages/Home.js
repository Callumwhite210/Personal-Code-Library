import React from "react";
import { Col, Row, Container } from "../components/Grid";
import PostsList from "../components/PostsList";

const Home = () => {
  return (
    <Container fluid>
      <Row>
        <Col size="md-6 sm-12">
          <PostsList />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;

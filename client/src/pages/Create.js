import React from "react";
import { Col, Row, Container } from "../components/Grid";
import CreatePostForm from "../components/CreatePostForm";
import PostsList from "../components/PostsList";

const Create = () => {
  return (
    <Container fluid>
      <Row>
        <Col size="md-6">
          <CreatePostForm />
        </Col>
      </Row>
    </Container>
  );
};

export default Create;
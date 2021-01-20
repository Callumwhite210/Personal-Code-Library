import React from "react";
import { Col, Row, Container } from "../components/Grid";
import PostsList from "../components/PostsList";

const Login = () => {
  return (
    <Container fluid>
      <Row>
        <Col size="md-6 sm-12">
            <h1>Log In</h1>
        </Col>
      </Row>
    </Container>
  );
};
export default Login;
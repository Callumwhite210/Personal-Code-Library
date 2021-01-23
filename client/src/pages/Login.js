import React from "react";
import { Col, Row, Container } from "../components/Grid";
import LoginForm from "../components/LoginForm/LoginForm.js"
const Login = () => {
  return (
    <Container fluid>
      <Row>
        <Col size="md-6 sm-12">
            <h1>Log In</h1>
        </Col>
      </Row>
      <LoginForm />
    </Container>
  );
};
export default Login;
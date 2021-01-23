import React from "react";
import { Col, Row, Container } from "../components/Grid";
import RegisterForm from '../components/RegisterForm/RegisterForm.js';


const Register = () => {
  return (
    <Container fluid>
      <Row>
        <Col size="md-6 sm-12">
          <h1> Register </h1>
        </Col>
      </Row>
      <RegisterForm />
    </Container>
  );
};
export default Register;
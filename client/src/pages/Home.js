import React from "react";
import { Col, Row, Container } from "../components/Grid";
import PostsList from "../components/PostsList";

const Home = () => {
  return (
    <Container>   
      <PostsList />          
    </Container>
  );
};

export default Home;

import React from "react";
import { useStoreContext } from "../../utils/GlobalState";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AuthNav from "../AuthNav/AuthNav";
import Profile from '../Profile/Profile';
import { Container } from "react-bootstrap";
import '../../App.css';


function NavigationBar() {
  const [store] = useStoreContext();

  return (
    <Container className="p-0"fluid={true}>
      <Navbar collapseOnSelect bg="dark" variant="dark" expand='lg'>
      <Navbar.Brand className="navbar-brand" href="/">Personal Code Library</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link className="nav-link" href="/home">Home</Nav.Link>
                <Link className="nav-link" to="/favorites">Favorites</Link>
                <Nav.Link className="nav-link" href="/create">Creat Post</Nav.Link>          
              </Nav>
                <Nav className="ml-auto">
                <AuthNav/>
              </Nav>          
            </Navbar.Collapse>
        <Profile />
      </Navbar>
    </Container>
  );
}

export default NavigationBar;

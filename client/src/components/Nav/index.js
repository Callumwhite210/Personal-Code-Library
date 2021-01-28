import React from "react";
import { useStoreContext } from "../../utils/GlobalState";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AuthNav from "../AuthNav/AuthNav";
import Profile from '../Profile/Profile';
import { Container } from "react-bootstrap";
import '../../App.css';


function NavigationBar() {
  const [store] = useStoreContext();

  return (
    <Container className="p-0"fluid={true}>
      <Navbar bg="dark" variant="dark">
      <a className="navbar-brand" href="/">
        Personal Code Library
      </a>
      <Navbar.Toggle className="border-0 dropdown" aria-controls="navbar-toggle"/>
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="mr-auto">
                <Link className="nav-link" to="/home">Home</Link>
                <Link className="nav-link" to="/favorites">Favorites</Link>
                <Link className="nav-link" to="/create">Creat Post</Link>          
              </Nav>
                <Nav className="ml-auto">
                <AuthNav />
              </Nav>          
            </Navbar.Collapse>
      
      <Profile />
    </Navbar>
    </Container>
  );
}

export default NavigationBar;

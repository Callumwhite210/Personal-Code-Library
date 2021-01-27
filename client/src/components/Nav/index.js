import React from "react";
import { useStoreContext } from "../../utils/GlobalState";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AuthNav from "../AuthNav/AuthNav";
import { Form , FormControl , Button } from 'react-bootstrap';


function NavigationBar() {
  const [store] = useStoreContext();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        Personal Code Library
      </a>
      <Navbar bg="dark" variant="dark">
      <Navbar.Toggle className="border-0 dropdown navbar-dark" aria-controls="navbar-toggle"/>
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/home">Home</Link>
                <Link className="nav-link" to="/favorites">Favorites</Link>
                <Link className="nav-link" to="/create">Creat Post</Link>          
              </Nav>
                <Form inline>
                  <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                  <Button variant="light">Search</Button>
                </Form>
                <Nav className="ml-auto">
                <AuthNav />
              </Nav>           
            </Navbar.Collapse>
      </Navbar>
    </nav>
  );
}

export default NavigationBar;

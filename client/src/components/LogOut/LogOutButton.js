import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Nav } from 'react-bootstrap';
const LogOutButton = () => {
    const { logout } = useAuth0();
    return (
        <Nav.Link variant="light" onClick={() => logout()}>
            Log out
        </Nav.Link>
    )
}

export default LogOutButton;
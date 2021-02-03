import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Nav } from 'react-bootstrap';

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();
    return (
        <Nav.Link variant="light" onClick={() => loginWithRedirect()}>
            Log in
        </Nav.Link>
    )
}

export default LoginButton;
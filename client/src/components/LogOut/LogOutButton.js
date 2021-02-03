import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from 'react-bootstrap';
const LogOutButton = () => {
    const { logout } = useAuth0();
    return (
        <Button variant="light" onClick={() => logout()}>
            Log out
        </Button>
    )
}

export default LogOutButton;
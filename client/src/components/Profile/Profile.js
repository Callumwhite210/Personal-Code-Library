import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Image } from 'react-bootstrap';

const Profile = () => {
    const { user, isAuthenticated } = useAuth0();
    return (
        isAuthenticated && (
 
        <Image src={user.picture} alt={user.name} roundedCircle style={{ height: 50, width: 50, marginLeft: 15}}/>  
    ))
}

export default Profile;
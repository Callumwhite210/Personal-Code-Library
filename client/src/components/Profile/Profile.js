import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Image, Row, Col } from 'react-bootstrap';

const Profile = () => {
    const { user, isAuthenticated } = useAuth0();
    return (
        isAuthenticated && (
    <Row>
        <Col>
            <h5 style={{color: '#ffff' }}>{user.name}</h5>
        </Col>
         
        <Col>
            <Image src={user.picture} alt={user.name} roundedCircle style={{ height: 50, width: 50}}/>
        </Col>  
    </Row>   
    ))
}

export default Profile;
import React from 'react';
import { Col, Row, Container } from "../Grid/index";
import LoginButton from '../LoginButton/LoginButton';
import LogOutButton from '../LogOut/LogOutButton';
import Profile from '../Profile/Profile';
function LoginForm() {

    return (
        <div>
            <Row>
            <input type='text' placeholder='Email' />
            </Row>
            <Row>
            <input type='text' placeholder='Password' />
            </Row>
            <Row>
            <LoginButton />
            <LogOutButton />
            <Profile />
            </Row>           
        </div>
    )
}
export default LoginForm;
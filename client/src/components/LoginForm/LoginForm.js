import React from 'react';
import { Col, Row, Container } from "../Grid/index";
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
            <button>Login</button>
            </Row>           
        </div>
    )
}
export default LoginForm;
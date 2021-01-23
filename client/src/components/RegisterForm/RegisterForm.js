import React from 'react';
import { Col, Row, Container } from "../Grid/index";
function RegisterForm() {

    return (
        <div>
            <Row>
            <input type='text' placeholder='Username' />
            </Row>
            <Row>
            <input type='text' placeholder='Email' />
            </Row>
            <Row>
            <input type='text' placeholder='Password' />
            </Row>
            <Row>
            <button>Register</button>
            </Row>           
        </div>
    )
}

export default RegisterForm;
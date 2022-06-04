import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Shipment = () => {
    const [user] = useAuthState(auth)
    const [name, setName] = useState('')
    const [adderss, setAdderss] = useState('')
    const [phone, setPhone] = useState('')
    const [error, setError] = useState('')


    const handleNameBlur = event => {
        setName(event.target.value)
    }
    const handleAddressBlur = event => {
        setAdderss(event.target.value)
    }
    const handlePhoneBlur = event => {
        setPhone(event.target.value)
    }


    const handleonSubmit = event => {
        event.preventDefault();
        console.log(name, adderss, phone);

    }
    return (
        <div className='form-container'>
            <h2 className='from-title'>Your ShipMent</h2>
            <Form onSubmit={handleonSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name :</Form.Label>
                    <Form.Control onBlur={handleNameBlur} type="text" placeholder="Enter Your Name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Email :</Form.Label>
                    <Form.Control value={user?.email} type="email" readOnly required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Address</Form.Label>
                    <Form.Control onBlur={handleAddressBlur} type="text" placeholder="Enter Your Address" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Phone Number :</Form.Label>
                    <Form.Control onBlur={handlePhoneBlur} type="text" placeholder="Enter Your Phone" required />
                </Form.Group>
                <p style={{ color: 'red'}}>{error}</p>
                <Button className='loginbutton' variant="primary" type="submit">
                    Shiping Now
                </Button>
            </Form>
        </div>
    );
};

export default Shipment;
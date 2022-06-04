import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css'
import img from '../../img/download.png'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const handleEmail = event => {
        setEmail(event.target.value)
    }
    const handlePassword = event => {
        setPassword(event.target.value)
    }

    if (user) {
        navigate(from, { replace: true })
    }
    const handleSubmit = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);

    }

    return (
        <div className='form-container'>
            <h2 className='from-title'>LogIn !!</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePassword} type="password" placeholder="Password" required />
                </Form.Group>
                <p style={{ color: 'red' }}>{error?.message}</p>
                {
                    loading && <p className='loading'>Loading....</p>
                }
                <p>
                    New To Ema-John??<Link className='register' to='/singup'>Create New Account</Link>
                </p>
                <Button className='loginbutton' variant="primary" type="submit">
                    LogIn
                </Button>
                <div className='underLineDiv'>
                    <div className='underLineLeft'></div>
                    or
                    <div className='underLineRight'></div>
                </div>

                <p className='googleLogin'>
                    <img className='googleLogo' src={img} alt="" />Continue To Google
                </p>

            </Form>
        </div>
    );
};

export default Login;
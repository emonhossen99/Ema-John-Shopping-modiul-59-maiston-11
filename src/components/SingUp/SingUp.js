import {React,useState} from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './SingUp.css'
import img from '../../img/google.jpg'
import auth from '../../firebase.init';

const SingUp = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [confirm,setConfirm] = useState('')
    const [error,setError] = useState('')
    const navigate = useNavigate()
    const [
        createUserWithEmailAndPassword,
        user,
      ] = useCreateUserWithEmailAndPassword(auth);

    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }
    const handlePasswordlBlur = event => {
        setPassword(event.target.value)
    }
    const handleConfirmlBlur = event => {
        setConfirm(event.target.value)
    }

    if(user){
        navigate('/')
    }
    const handleonSubmit = event => {
        event.preventDefault();
        if(password !== confirm){
            setError('Your Confirm Password Is Incurrent')
            return;
        }
        if(password.length < 6){
            setError('Password Should Be A 6 Charecther')
            return;
        }
        createUserWithEmailAndPassword(email,password);
    }
    return (
        <div className='form-container'>
        <h2 className='from-title'>Places Register!!</h2>
        <Form onSubmit={handleonSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" required/>
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control onBlur={handlePasswordlBlur} type="password" placeholder="Password" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Conform Password</Form.Label>
                <Form.Control onBlur={handleConfirmlBlur} type="password" placeholder="Conform Password" required />
            </Form.Group>
            <p style={{color:'red'}}>{error}</p>
            <Button className='loginbutton' variant="primary" type="submit">
                Register
            </Button>
            <p className='linkLogin'>
            Already Register??<Link className='register' to='/login'>Login</Link>
            </p>
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

export default SingUp;
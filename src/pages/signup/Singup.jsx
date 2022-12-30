// codes from 
// https://react-bootstrap.github.io/forms/overview/

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './signup.css'

import { Link, useNavigate } from "react-router-dom";

const Signup = ()=>{
    return (
     <div className='signup'>
     <Form className='board'>
        <h2 className='mb-5'>Sign up</h2>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Enter username" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicConfirmation">
        <Form.Label>Password Confirmation</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <p>* If you have an account, please <Link to='/login' className='link'>log in</Link></p>
      <Button className='mt-3' variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  );
}

export default Signup;
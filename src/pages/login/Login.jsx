// codes from 
// https://react-bootstrap.github.io/forms/overview/

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './login.css'

import { Link, useNavigate } from "react-router-dom";

const Login = ()=>{
    return (
     <div className='login'>
     <Form className='board'>
        <h2 className='mb-5'>Login</h2>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <p>* If you don't have an account, please <Link to='/signup' className='link'>signg up</Link></p>
      <Button className='mt-3' variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  );
}

export default Login;
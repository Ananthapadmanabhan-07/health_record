import React, { useState } from 'react'
import Header from '../components/Header'
import { Form } from 'react-bootstrap'
import { RegistrationApi } from '../API/Allapi'
import { Link, useNavigate } from 'react-router-dom'
import { loginApi } from '../API/Allapi'

function Homes({ register }) {

  const [Register, setRegister] = useState({ username: "", email: "", password: "" })

  const isRegistration = register ? true : false;
  const navigate = useNavigate();

  const handleRegistration = async (e) => {
    e.preventDefault();

    const { username, email, password } = Register;
    const strongPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    try {
      if (!username || !email || !password) {
        return alert("Please fill all the fields");
      }
      if (!strongPassword.test(password)) {
        return alert("Password must be 8 characters and include uppercase, lowercase, number, and special character");
      }

      const result = await RegistrationApi({ username, email, password });

      if (result.status === 201 || result.status === 200) {
        alert("Registration Successful");
      } else {
        alert("Registration Failed");
      }

    } catch (err) {
      console.log(err);
      alert("Something went wrong");
    }
  }

 const handlelogin = async (e) => {
  e.preventDefault();

  const { username, password } = Register;

  if (!username || !password) {
    return alert("Please fill all the fields");
  }

  try {
   
    const result = await loginApi({ username, password });

    console.log(result);

    if (result.status === 200) {
      sessionStorage.setItem("username", result.data.existingUser.username);
      sessionStorage.setItem("token", result.data.token);

      alert("Login Successful");
      navigate('/hospitalregistration');  
    }else{
      alert("Login Failed or Invalid credentials");
    }

  } catch (err) {
    console.log(err);
    alert("Something went wrong during login");
  }
};

  return (
    <>
      <Header />
      <div style={{ marginTop: "100px", width: "50%", marginLeft: "25%", height: "450px", border: "2px solid black", padding: "20px", borderRadius: "10px" }}>
        <p style={{ textAlign: "center", fontSize: "24px", fontWeight: "bold" }}>HEALTH RECORD</p>

        <Form onSubmit={handleRegistration}>
          <p style={{color: "blue"}}> {isRegistration ? 'sign-up to your account' : 'sign-in to your account'}</p>
          
          <Form.Group className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="eg: Ananthan"
              onChange={(e) => setRegister({ ...Register, username: e.target.value })} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="enter your password"
              onChange={(e) => setRegister({ ...Register, password: e.target.value })} />
          </Form.Group>
         { 
          isRegistration &&
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com"
              onChange={(e) => setRegister({ ...Register, email: e.target.value })} />
          </Form.Group>}
          {isRegistration ?
            <div className='mt-3'>
              <button className='btn btn-warning' onClick={handleRegistration}>Register</button>
              <p> already have an account ? click here to <Link to={'/login'} style={{ textDecoration: 'none', color: 'blue' }}>login</Link></p>
            </div> : <div className='mt-3'>
              <button className='btn btn-warning' onClick={handlelogin}>Login</button>
              <p> New user click here to <Link to={'/register'} style={{ textDecoration: 'none', color: 'blue' }}>register</Link></p>
            </div>
          }
        </Form>
      </div>
    </>
  )
}

export default Homes


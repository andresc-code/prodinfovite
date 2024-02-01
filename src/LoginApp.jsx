import {
  MDBBtn, MDBContainer, MDBCard,
  MDBCardBody,  MDBCardImage,  MDBRow,
  MDBCol,  MDBIcon,  MDBInput
}
from 'mdb-react-ui-kit';
import logoImg from './ZF3.png';
import logoImglogin from './imglogin.png';
import React, { useState } from 'react';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
 // const [error, setError] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // Verifica aquí la lógica de validación del usuario y contraseña
    if (username === 'u' && password === '1') {
      setLoggedIn(true);
    } else {
      //setError('Nombre de usuario o contraseña incorrectos');
    }
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
    //setError('');
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    //setError('');
  };

  if (loggedIn) {
    return (
      <>
        <App />
        {registerServiceWorker()}
      </>
    );
  }

  return (
    <MDBContainer className="my-5">

      <MDBCard>
        <MDBRow className='g-0'>

          <MDBCol md='6'>
            <MDBCardImage src={logoImglogin} alt="login form" className='rounded-start w-100'/>
          </MDBCol>

          <MDBCol md='6'>
            <MDBCardBody className='d-flex flex-column'>

            <div className='d-flex flex-row mt-2'>
              <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }} />
              <div className="h5 fw-regular mb-0 d-flex flex-row mt-2 align-items-center">
                <img
                  src={logoImg}
                  alt="Logo"
                  height="50"
                  className="d-inline-block align-top mr-4"
                />

                <span className='mx-2'>Habillez votre style, vivez votre mode</span>
              </div>
            </div>


              <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>Sign into your account</h5>

                <MDBInput 
                  wrapperClass='mb-4' 
                  label='Email address' 
                  id='username' 
                  type='email' 
                  value={username}
                  size="lg"
                  onChange={handleUsernameChange}
                />
                <MDBInput 
                  wrapperClass='mb-4' 
                  label='Password' 
                  id='formControlLg' 
                  type='password' 
                  value={password}
                  size="lg"
                  onChange={handlePasswordChange}
                />

              <MDBBtn 
                className="mb-4 px-5" 
                color='dark' 
                size='lg'
                onClick={handleLogin}
              >Login
              </MDBBtn>
             
              <a className="small text-muted" href="#!">Forgot password?</a>
              <p className="mb-5 pb-lg-2" style={{color: '#393f81'}}>Don't have an account? <a href="#!" style={{color: '#393f81'}}>Register here</a></p>

              <div className='d-flex flex-row justify-content-start'>
                <a href="#!" className="small text-muted me-1">Terms of use.</a>
                <a href="#!" className="small text-muted">Privacy policy</a>
              </div>

            </MDBCardBody>
          </MDBCol>

        </MDBRow>
      </MDBCard>

    </MDBContainer>
  );
}
export default Login;
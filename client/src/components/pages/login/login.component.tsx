import React, { useState, useEffect } from 'react';
import * as accountRemote from '../../../remote/account.remote';
import './login.component.css';
import { useHistory } from 'react-router';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner';
import Background from '../../../background/gallery-6.png';



export const LoginComponent:React.FC = ()=>{

    const history = useHistory(); // Access history for Login redirect


    const [inputLoginUsertName, setLoginUsertName] = useState('');
    const [inputLoginPassword, setLoginPassword] = useState('');

    
    const [inputRegisterFirstName, setRegisterFirstName] = useState ('');
    const [inputRegisterLastName, setRegisterLastName] = useState ('');
    const [inputRegisterEmail, setRegisterEmail] = useState ('');
    const [inputRegisterUsername, setRegisterUsername] = useState('');
    const [inputRegisterPassword, setRegisterPassword] = useState('');
    
    const [showRegister, setShowRegister] = useState(false);
    const [showAlert, setShowAlert] =useState(false);
    const [showLoading, SetShowLoading] = useState(false);

    const [validated, setValidated] = useState(false);

    const [windowWidth, setWindowWidth ] = useState(window.innerWidth);

    useEffect(() => {
        const handleWindowResize = () => {
          setWindowWidth(window.innerWidth);
        }
        window.addEventListener('resize', handleWindowResize);
        return () => {            
          window.removeEventListener('resize', handleWindowResize);  
        }
    }, []);


    let response: any;
    const setInformation = async () => {
    
    
      setLoginUsertName(''); //clear fields
      setLoginPassword('');

    localStorage.setItem('userName', response.data.userName);
    localStorage.setItem('firstName', response.data.firstName);
    localStorage.setItem('lastName', response.data.lastName);
    localStorage.setItem('userRole', response.data.userRole);
    localStorage.setItem('userImage', response.data.userImage);
    localStorage.setItem('accessToken', response.data.jwt);

    if (localStorage.getItem('userRole') === 'Admin') {
      history.push('/employee');
    }else if(localStorage.getItem('userRole') === 'Employee'){
      history.push('/administrator');
    }else{
      history.push('/'); //route path to app.ts
    }
  }

    /**Register User */
    const registerUser = async () => {
        const payload = {
            firstName: inputRegisterFirstName,
            lastName: inputRegisterLastName,
            email: inputRegisterEmail,
            userName: inputRegisterUsername,
            userPassword: inputRegisterPassword
        };

        alert('Website is down for maintenance at this time.');//?Maintenance Patch

        const response = await accountRemote.createUser(payload); //SEnd POST
        setLoginUsertName(''); //clear fields
        setLoginPassword('');
    };


    /**Login User */
    const loginUser = async () => {
        const payload = {
            userName: inputLoginUsertName,
            userPassword: inputLoginPassword
        };

        if( inputLoginUsertName  == '' || inputLoginPassword == ''){
          alert('Please fill in required username & password');
        }else{
          setLoginUsertName(''); //?Maintenance Patch
          setLoginPassword('');
          alert('Website is down for maintenance at this time.'); 
        }
        

        try {
          response = await accountRemote.createToken(payload); //SEnd POST
          await setInformation();
        } catch {
          console.log('Server not active at this time.'); //?Maintenance Patch

          // alert('Invalid username or password');
        }
        
        // loadCredentails();
    };

    // const loadCredentails = () => {


    //    usersRemote.getAllUserTable().then(user => { 
    //     setReimbursements(user);
    //     console.log('Recieved authentication request: ', user);
    //     });

    // };


    const registerSubmit = () => {
        if (inputRegisterFirstName && inputRegisterLastName && inputRegisterEmail && inputRegisterUsername && inputRegisterPassword) {
            registerUser();
            registerClose();
        } else {
            setShowAlert(true);
        }
        // create new user object here to send to database (need user model)
        
        // SetShowLoading(true);
    };

    const registerShow = () => setShowRegister(true);
    const registerClose = () => {
        setShowRegister(false);
        setShowAlert(false);
    }

    return(
        <div>
            <div id="background" style={{backgroundImage: `url(${Background})` }}>
            <div className="main-container">

            {/* <section id="header-container">
              <div id="logo-container"></div>
              <label className="font-white"> Logo </label>
            </section> */}
            
            <h1 className="font-white title-container h1">Welcome to Ask IT Intranet</h1>
            
            {/* Main Login Page */}
            <section className="login-container">
            
                {/* Semantic-ui form*/}
                <div className="ui form">
                  <div className="field width-container">
                    <input className="field-color" type="text" name="first-name" placeholder="Username"  value={inputLoginUsertName} onChange={e => setLoginUsertName(e.target.value)}/>
                  </div>
                  <div className="field width-container">
                    <input className="field-color" type="password" name="last-name" placeholder="Password" value={inputLoginPassword} onChange={e => setLoginPassword(e.target.value)}/>
                  </div>
                  <div className="button-container">
                    <button className="ui button width-container button-color" type="submit" onClick={() => loginUser()}>Login</button>
                  </div>
                  <div className="field center">
                {/* <div className="ui checkbox">
                  <input type="checkbox" className="hidden" /> */}
                  
                  
                  <label className="text-align"> <a href="https://github.com/chriscastaneda/rev-p2-internal-ticketing-system#anchor" style={{color: "#878591"}} target="_blank">
                    Forgot Password </a></label>
                  <label className="text-align cursor" onClick={registerShow}> <span className="font-grey">Register</span></label>  
                {/* </div> */}
                
                  </div>
                  
                </div>
              </section>

              <section>
                <footer className="footer font-white">Please advise the website will be down temporarily for maintenance. Please check back in at a later time. Thank you! </footer>
            
              </section> 
            </div>

















             {/* User Registration Modal */}
             <Modal show={showRegister} onHide={registerClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Register</Modal.Title>
                </Modal.Header>
                <Modal.Body>


                    {/* "Incomplete Form" Alert */}
                    <Alert show={showAlert} variant="danger">
                        <Alert.Heading id="registerwarning">Please Complete Registration</Alert.Heading>
                        <p>All fields are required.</p>
                        <hr />
                        <div className="d-flex justify-content-end">
                        </div>
                    </Alert>


                    <Form>
                        <Form.Group controlId="formNewUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="Username" name="text" value={inputRegisterUsername} onChange={e => setRegisterUsername(e.target.value)} />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formName">
                            <Form.Label>Name</Form.Label>
                            <Row>
                            <Col><Form.Control type="text" placeholder="First Name" name="First Name" value={inputRegisterFirstName} onChange={e => setRegisterFirstName(e.target.value)}/></Col>
                            <Col><Form.Control type="text" placeholder="Last Name" name="Last Name" value={inputRegisterLastName} onChange={e => setRegisterLastName(e.target.value)}/></Col>
                            </Row>
                        </Form.Group>
                        <Form.Group controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Email" name="email" value={inputRegisterEmail} onChange={e => setRegisterEmail(e.target.value)}/>
                        </Form.Group>
                        <Form.Group controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" name="password" value={inputRegisterPassword} onChange={e => setRegisterPassword(e.target.value)}/>
                            </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={registerClose}>Cancel</Button>
                    <Button variant="primary" type="submit" onClick={registerSubmit}>Register</Button>
                </Modal.Footer>
            </Modal>
          </div>
        </div>
    );
};
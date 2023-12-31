<<<<<<< HEAD
import React from 'react';
import myImage from './bg.jpg';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
// import tele from './tele.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import Snippet from './Snippet.png';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleClick = () => {
    // Redirect to a new page
    window.location.href = '/courses';
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    // Add your logic for form submission here
    console.log('Form submitted:', this.state);
  };

  render() {
    const { email, password } = this.state;

    return (
        <div>
        <img src={Snippet} style={{width:'100%'}}/> 
        <Navbar bg="light" expand="lg">   
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link href="#">HOME</Nav.Link>
            <Nav.Link href="#">ABOUT</Nav.Link>
            <Nav.Link href="#">WHAT WE DO</Nav.Link>
            <Nav.Link href="#">ALL CAMPAIGN</Nav.Link>
            <Nav.Link href="#">PROJECT</Nav.Link>
            <Nav.Link href="#">VOLUNTEERS</Nav.Link>
            
            {/* <NavDropdown title="REGISTER" id="register-dropdown">
            <NavDropdown.Item href="https://forms.gle/13mCom2jDYK83ZRLA">STUDENT</NavDropdown.Item>
            <NavDropdown.Item href="https://forms.gle/vfUK7pAMKwke1xuW9">VOLUNTEERS</NavDropdown.Item>
          </NavDropdown> */}
          <NavDropdown title="CONNECT" id="connect-dropdown">
          <div className="telegram-link">
                {/* <img src={tele} alt="Telegram" style={{ width: '15%' }} className="tele-logo" /> */}
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Telegram
                </a>
              </div>
          </NavDropdown>
          
            <Nav.Link href="#">CONTACTS</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div>
        <img src={myImage} style={{ width: '100%', height: 'auto'}}></img>
        <style>
          {`
            .login-container {
              top : '40%';
              width: 300px;
              margin: 0 auto;
              padding: 20px;
              background-color: #f4f4f4;
              border-radius: 4px;
              box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
            }

            h2 {
              text-align: center;
              margin-bottom: 20px;
            }

            .form-group {
              margin-bottom: 20px;
            }

            label {
              display: block;
              margin-bottom: 5px;
            //   font-weight: bold;
            }

            input {
              width: 100%;
              padding: 8px;
              border-radius: 4px;
              border: 1px solid #ccc;
            }

            button {
              width: 100%;
              padding: 8px;
              border: none;
              border-radius: 4px;
              cursor: pointer;
              background-color: rgb(255, 230, 243);
              color: black;
            }

            button:hover {
              background-color: rgb(51, 0, 51);
              color:white;
            }
          `}
        </style>
        <div className="login-container" 
            style={{
            position: 'absolute',
            top : '40%',
            left:'40%'}}>
          <h2>Hi Student!</h2>
          <form onSubmit={this.handleFormSubmit}>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={this.handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={this.handleInputChange}
                required
              />
            </div>
            <button type="submit" className ='submit' onClick={this.handleClick}>LOGIN</button>
          </form>
        </div>
      </div>
      </div>
    );
  }
}

export default Login;
=======
import React from 'react';
import myImage from './bg.jpg';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
// import tele from './tele.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import Snippet from './Snippet.png';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleClick = () => {
    // Redirect to a new page
    window.location.href = '/courses';
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    // Add your logic for form submission here
    console.log('Form submitted:', this.state);
  };

  render() {
    const { email, password } = this.state;

    return (
        <div>
        <img src={Snippet} style={{width:'100%'}}/> 
        <Navbar bg="light" expand="lg">   
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link href="#">HOME</Nav.Link>
            <Nav.Link href="#">ABOUT</Nav.Link>
            <Nav.Link href="#">WHAT WE DO</Nav.Link>
            <Nav.Link href="#">ALL CAMPAIGN</Nav.Link>
            <Nav.Link href="#">PROJECT</Nav.Link>
            <Nav.Link href="#">VOLUNTEERS</Nav.Link>
            
            {/* <NavDropdown title="REGISTER" id="register-dropdown">
            <NavDropdown.Item href="https://forms.gle/13mCom2jDYK83ZRLA">STUDENT</NavDropdown.Item>
            <NavDropdown.Item href="https://forms.gle/vfUK7pAMKwke1xuW9">VOLUNTEERS</NavDropdown.Item>
          </NavDropdown> */}
          <NavDropdown title="CONNECT" id="connect-dropdown">
          <div className="telegram-link">
                {/* <img src={tele} alt="Telegram" style={{ width: '15%' }} className="tele-logo" /> */}
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Telegram
                </a>
              </div>
          </NavDropdown>
          
            <Nav.Link href="#">CONTACTS</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div>
        <img src={myImage} style={{ width: '100%', height: 'auto'}}></img>
        <style>
          {`
            .login-container {
              top : '40%';
              width: 300px;
              margin: 0 auto;
              padding: 20px;
              background-color: #f4f4f4;
              border-radius: 4px;
              box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
            }

            h2 {
              text-align: center;
              margin-bottom: 20px;
            }

            .form-group {
              margin-bottom: 20px;
            }

            label {
              display: block;
              margin-bottom: 5px;
            //   font-weight: bold;
            }

            input {
              width: 100%;
              padding: 8px;
              border-radius: 4px;
              border: 1px solid #ccc;
            }

            button {
              width: 100%;
              padding: 8px;
              border: none;
              border-radius: 4px;
              cursor: pointer;
              background-color: rgb(255, 230, 243);
              color: black;
            }

            button:hover {
              background-color: rgb(51, 0, 51);
              color:white;
            }
          `}
        </style>
        <div className="login-container" 
            style={{
            position: 'absolute',
            top : '40%',
            left:'40%'}}>
          <h2>Hi Student!</h2>
          <form onSubmit={this.handleFormSubmit}>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={this.handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={this.handleInputChange}
                required
              />
            </div>
            <button type="submit" className ='submit' onClick={this.handleClick}>LOGIN</button>
          </form>
        </div>
      </div>
      </div>
    );
  }
}

export default Login;
>>>>>>> 7b39565f18fe5334a9ea052437f7ff8b24ec3069

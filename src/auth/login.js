import React, { useState, useEffect, useContext } from 'react';
import './login.css';
import email from '../Assets/email.png';
import password from '../Assets/password.png';
import person from '../Assets/person.png';
import { AuthContext } from './Auth';
import { useNavigate } from 'react-router-dom';

function Login({ handle }) {
  const [action, setAction] = useState('Sign Up');
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [nameInput, setNameInput] = useState('');
  
  const navigate = useNavigate();

  const { setloggedIn, setUser } = useContext(AuthContext);

  useEffect(() => {
    setAction(handle === 'SignUp' ? 'Sign Up' : 'Login');
  }, [handle]);

  const handleSignUp = () => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const newUser = { name: nameInput, email: emailInput, password: passwordInput };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    setloggedIn(true);
    setUser(newUser);
  };

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find((user) => user.email === emailInput && user.password === passwordInput);

    if (user) {
      setloggedIn(true);
      setUser(user);
    } else {
      alert('Invalid email or password');
    }
    // Navigate to the homepage
    navigate('/');
  };

  const handleSubmit = () => {
    if (action === 'Sign Up') {
      handleSignUp();
    } else {
      handleLogin();
    }
  };

  const toggleAction = () => {
    setAction(action === 'Sign Up' ? 'Login' : 'Sign Up');
  };

  return (
    <>
      <div className="container">
        <div className="header">
          <div className="text">{action}</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          {action === 'Sign Up' && (
            <div className="input">
              <img src={person} alt="Person Icon" />
              <input
                type="text"
                placeholder="Name"
                value={nameInput}
                onChange={(e) => setNameInput(e.target.value)}
              />
            </div>
          )}
          <div className="input">
            <img src={email} alt="Email Icon" />
            <input
              type="text"
              placeholder="Email"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
            />
          </div>
          <div className="input">
            <img src={password} alt="Password Icon" />
            <input
              type="password"
              placeholder="Password"
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
            />
          </div>
        </div>
        {action === "Login" && (
          <div className="forgot-password">
            Forgot Password? <span>Click here!</span>
          </div>
        )}
        <div className="submit-container">
          <button className="submit" onClick={handleSubmit}>
            {action}
          </button>
          {action === 'Sign Up' && (
            <button className="toggle-action" onClick={toggleAction}>
              Already Logged In?
            </button>
          )}
          {action === 'Login' && (
            <button className="toggle-action" onClick={toggleAction}>
              Not a User?
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default Login;

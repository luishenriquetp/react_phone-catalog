/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-shadow */
// LoginPage.tsx
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import StyledLoginPage from './StyledLoginPage.ts';

interface LoginPageProps {
  // Define here props of this Component if needed
}

function LoginPage(props: LoginPageProps): React.ReactNode {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State for password visibility
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate(); // Use the useNavigate hook

  async function mockLoginApi(username: string, password: string): Promise<boolean> {
    const fileName = `${username}_${password}.json`;
    const filePath = `/api/users/${fileName}`;

    try {
      const response = await fetch(filePath);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const userData = await response.json();
      return userData.some(
        (user: { userName: string; passwd: string }) =>
          user.userName === username && user.passwd === password,
      );
    } catch (error) {
      console.error('Failed to fetch user data:', error);
      return false;
    }
  }

  function handleUsernameChange(event: React.ChangeEvent<HTMLInputElement>) {
    setUsername(event.target.value);
  }

  function handlePasswordChange(event: React.ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  function togglePasswordVisibility() {
    setShowPassword(prevShowPassword => !prevShowPassword);
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    // Reset error message
    setErrorMessage('');

    // Check credentials with mock API
    const isAuthenticated = await mockLoginApi(username, password);

    if (isAuthenticated) {
      toast.success(`Loading successfull...`, {
        position: 'bottom-center',
        autoClose: 1000,
        hideProgressBar: false,
        closeButton: false,
      });
      setTimeout(() => {
        // Redirect to home page
        navigate('/home');
      }, 1000); // Delay to allow toast to show
    } else {
      toast.error('Invalid username or password', {
        position: 'bottom-center',
        autoClose: 1000,
        hideProgressBar: false,
        closeButton: false,
      });
    }
  }

  return (
    <StyledLoginPage className="login">
      <h1 className="login-title">Nice gadgets login</h1>
      <div className="login-container">
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
              placeholder="Enter you name here"
              required
            />
          </div>
          <div className="form-group password-group">
            <label htmlFor="password">Password:</label>
            <div className="password-group-container">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="Enter your password here"
                required
              />
              <span className="password-toggle-icon" onClick={togglePasswordVisibility}>
                {showPassword ? '🙈' : '👁️'}
              </span>
            </div>
          </div>
          <button type="submit">Login</button>
          {errorMessage && <p className="error">{errorMessage}</p>}
        </form>
        <ToastContainer />
      </div>
    </StyledLoginPage>
  );
}

export default LoginPage;

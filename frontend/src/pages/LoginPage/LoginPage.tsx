import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import StyledLoginPage from './StyledLoginPage.ts';

function LoginPage(): React.ReactNode {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  async function mockLoginApi(mockedUser: string, mockedPassword: string): Promise<boolean> {
    const fileName = `${mockedUser}_${mockedPassword}.json`;
    const filePath = `/api/users/${fileName}`;

    try {
      const response = await fetch(filePath);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const userData = await response.json();
      return userData.some(
        (user: { userName: string; passwd: string }) =>
          user.userName === mockedUser && user.passwd === mockedPassword,
      );
    } catch (error) {
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
    setErrorMessage('');

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
        autoClose: 2000,
        hideProgressBar: false,
        closeButton: false,
      });
    }
  }

  return (
    <StyledLoginPage className="login">
      <ToastContainer />
      <div className="background">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
      <h1 className="login-title">Nice gadgets login</h1>
      <div className="login-container">
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form login-group">
            <label className="form-label" htmlFor="username">
              Username:
              <div className="password-login-container">
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={handleUsernameChange}
                  placeholder="Enter you name here"
                  required
                />
              </div>
            </label>
          </div>
          <div className="form password-group">
            <label className="form-label" htmlFor="password">
              Password:
              <div className="password-group-container">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  value={password}
                  onChange={handlePasswordChange}
                  placeholder="Enter your password here"
                  required
                />
                <button
                  aria-label="password-toggle"
                  type="button"
                  className="password-toggle-icon"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? '🙈' : '👁️'}
                </button>
              </div>
            </label>
          </div>
          <div className="form-buttons">
            <button className="form-btn" type="submit">
              Login
            </button>
            <span>or</span>
            <button className="form-btn" type="button">
              Create account
            </button>
          </div>
          {errorMessage && <p className="error">{errorMessage}</p>}
        </form>
      </div>
    </StyledLoginPage>
  );
}

export default LoginPage;

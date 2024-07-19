import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StyledLoginPage from './StyledLoginPage.ts';
import { authUser } from '../../api/getAll.ts';
import { useAppDispatch } from '../../context/hooks.ts';
import { setUserDataSession } from '../../context/userContext/userSlice.ts';
import { toast } from 'react-toastify';
import StyledToastContainer from '../../components/ToastContainer/StyledToastContainer.ts';


function LoginPage(): React.ReactNode {
  const [email, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function handleUsernameChange(event: React.ChangeEvent<HTMLInputElement>) {
    setUsername(event.target.value);
  }

  function handlePasswordChange(event: React.ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  function togglePasswordVisibility() {
    setShowPassword(prevShowPassword => !prevShowPassword);
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    authUser({email, password} )
      .then(data => {
        dispatch(setUserDataSession(data));
        navigate('/home');
      })
      .then(() => {
      })
      .catch((error) => {
        toast.error(error.message, {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeButton: false,
        });
      });
  }

  return (
    <StyledLoginPage className="login">
      <StyledToastContainer />
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
              Email:
              <div className="password-login-container">
                <input
                  type="text"
                  id="username"
                  value={email}
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
          </div>
        </form>
      </div>
    </StyledLoginPage>
  );
}

export default LoginPage;

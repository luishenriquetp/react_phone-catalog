import styled from 'styled-components';

const StyledLoginPage = styled.div`
  .login-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: var(--rstyle1-gray-background);
  }

  .login-form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }

  .form-group {
    margin-bottom: 15px;
    position: relative;
  }

  .password-group {
    display: flex;
    flex-direction: column;
  }

  label {
    display: block;
    margin-bottom: 5px;
  }

  input {
    padding: 10px;
    font-size: 16px;
    width: 300px;
    margin-bottom: 10px;
  }

  #password {
    padding: 10px 9px;
  }

  .password-group input {
    flex: 1;
  }

  .password-toggle-icon {
    margin-left: -30px;
    cursor: pointer;
  }

  button {
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
  }

  .error {
    color: red;
    margin-top: 10px;
  }
`;

export default StyledLoginPage;

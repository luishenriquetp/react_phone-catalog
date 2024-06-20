import styled from 'styled-components';
import { letterStyleH1DesktoAndTable } from '../../styles/GlobalStyles.ts';

const StyledLoginPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-height: 100vh;

  .login-title {
    ${letterStyleH1DesktoAndTable}
  }

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
    width: 100%;
    height: 48px;
    border-radius: 48px;
    background-color: var(--rstyle1-accent);
    border: none;
    color: #fff;
    text-align: center;
    padding: 0;
    transition: box-shadow 300ms;

    &:hover {
      cursor: pointer;
      box-shadow: 0px 3px 13px 0px #17203166;
    }

    &:active {
      transform: scale(0.95);
    }
  }

  .error {
    color: red;
    margin-top: 10px;
  }
`;

export default StyledLoginPage;

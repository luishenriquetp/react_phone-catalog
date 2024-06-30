import styled from 'styled-components';
import {
  letterStyleBodyTextDesktoAndTable,
  letterStyleH1DesktoAndTable,
} from '../../styles/GlobalStyles.ts';

const StyledLoginPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-height: 70vh;

  .login-title {
    ${letterStyleH1DesktoAndTable}
    z-index: 2;
    width: 100vw;
    text-align: center;
    border-radius: 48px;
    background: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.25);
    padding: 25px 5px;
    margin-bottom: 0;

    @media (min-width: 640px) and (max-width: 1199px) {
      width: 50vw;
    }

    @media (min-width: 1200px) {
      width: 30vw;
    }
  }

  .login-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 100vh;
    background-color: var(--rstyle1-gray-background);
  }

  .login-form {
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 48px;
    padding: 30px 10px;
    background: rgba(255, 255, 255, 0.5);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.25);
  }

  .form.login-group,
  .form.password-group {
    margin-bottom: 15px;
    position: relative;
  }

  .form-label {
    ${letterStyleBodyTextDesktoAndTable}
    margin: 0;
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

  #username {
    width: 80vw;
    border-radius: 48px;
    border: 1px solid var(--rstyle1-primary);

    @media (min-width: 640px) and (max-width: 1199px) {
      width: 45vw;
    }

    @media (min-width: 1200px) {
      width: 30vw;
    }
  }

  #password {
    width: 80vw;
    border-radius: 48px;
    border: 1px solid var(--rstyle1-primary);

    @media (min-width: 640px) and (max-width: 1199px) {
      width: 45vw;
    }

    @media (min-width: 1200px) {
      width: 30vw;
    }
  }

  .password-group input {
    flex: 1;
  }

  .password-toggle-icon {
    position: absolute;
    top: 30px;
    right: 20px;

    border: none;
    background-color: transparent;
    cursor: pointer;
  }

  .form-buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    @media (min-width: 640px) and (max-width: 1199px) {
      flex-direction: column;
    }

    @media (min-width: 1200px) {
      flex-direction: column;
    }

    .form-btn {
      width: 30vw;
      height: 48px;
      border-radius: 48px;
      background-color: var(--rstyle1-accent);
      border: none;
      color: #fff;
      text-align: center;
      padding: 5px;
      transition: box-shadow 300ms;

      @media (min-width: 640px) and (max-width: 1199px) {
        width: 45vw;
      }

      @media (min-width: 1200px) {
        width: 30vw;
      }

      &:hover {
        cursor: pointer;
        box-shadow: 0px 3px 13px 0px #17203166;
      }

      &:active {
        transform: scale(0.95);
      }
    }
  }

  .error {
    color: red;
    margin-top: 10px;
  }

  @keyframes move {
    100% {
      transform: translate3d(0, 0, 1px) rotate(360deg);
    }
  }

  .background {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background: var(--rstyle1-gray-background);
    overflow: hidden;
    z-index: 0;
  }

  .background span {
    width: 12vmin;
    height: 12vmin;
    border-radius: 12vmin;
    backface-visibility: hidden;
    position: absolute;
    animation: move;
    animation-duration: 25;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }

  .background span:nth-child(0) {
    color: #89939a;
    top: 75%;
    left: 85%;
    animation-duration: 89s;
    animation-delay: -161s;
    transform-origin: 9vw 7vh;
    box-shadow: 24vmin 0 3.59895379260875vmin currentColor;
  }
  .background span:nth-child(1) {
    color: #4219d0;
    top: 7%;
    left: 65%;
    animation-duration: 112s;
    animation-delay: -144s;
    transform-origin: 4vw 3vh;
    box-shadow: 24vmin 0 3.427460961381782vmin currentColor;
  }
  .background span:nth-child(2) {
    color: #4219d0;
    top: 60%;
    left: 84%;
    animation-duration: 120s;
    animation-delay: -132s;
    transform-origin: -22vw -23vh;
    box-shadow: -24vmin 0 3.2959502086042907vmin currentColor;
  }
  .background span:nth-child(3) {
    color: #89939a;
    top: 78%;
    left: 60%;
    animation-duration: 72s;
    animation-delay: -73s;
    transform-origin: -21vw 12vh;
    box-shadow: -24vmin 0 3.608966376499507vmin currentColor;
  }
  .background span:nth-child(4) {
    color: #f4ba47;
    top: 45%;
    left: 90%;
    animation-duration: 29s;
    animation-delay: -20s;
    transform-origin: 7vw -5vh;
    box-shadow: -24vmin 0 3.75743889927484vmin currentColor;
  }
  .background span:nth-child(5) {
    color: #f4ba47;
    top: 54%;
    left: 37%;
    animation-duration: 111s;
    animation-delay: -175s;
    transform-origin: 21vw -3vh;
    box-shadow: -24vmin 0 3.3613945049006664vmin currentColor;
  }
  .background span:nth-child(6) {
    color: #89939a;
    top: 37%;
    left: 98%;
    animation-duration: 241s;
    animation-delay: -38s;
    transform-origin: 16vw -19vh;
    box-shadow: -24vmin 0 3.8872353073191244vmin currentColor;
  }
  .background span:nth-child(7) {
    color: #4219d0;
    top: 34%;
    left: 70%;
    animation-duration: 99s;
    animation-delay: -129s;
    transform-origin: -12vw 5vh;
    box-shadow: 24vmin 0 3.874737148047789vmin currentColor;
  }
  .background span:nth-child(8) {
    color: #4219d0;
    top: 71%;
    left: 57%;
    animation-duration: 141s;
    animation-delay: -24s;
    transform-origin: 23vw -9vh;
    box-shadow: -24vmin 0 3.448832249630961vmin currentColor;
  }
  .background span:nth-child(9) {
    color: #f4ba47;
    top: 23%;
    left: 83%;
    animation-duration: 192s;
    animation-delay: -28s;
    transform-origin: -15vw 12vh;
    box-shadow: 24vmin 0 3.6921686209665507vmin currentColor;
  }
`;

export default StyledLoginPage;

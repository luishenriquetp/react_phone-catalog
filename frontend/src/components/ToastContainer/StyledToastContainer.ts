import { ToastContainer } from 'react-toastify';
import styled from 'styled-components';

const StyledToastContainer = styled(ToastContainer).attrs({
  autoClose: 3000,
  hideProgressBar: false,
  closeButton: false,
  position: 'top-right',
})`
  .Toastify__toast {
    background-color: #333;
    color: #fff;
  }
  .Toastify__toast--info {
    background-color: #3498db;
  }
  .Toastify__toast--success {
    background-color: #2ecc71;
  }
  .Toastify__toast--warning {
    background-color: #f1c40f;
  }
  .Toastify__toast--error {
    background-color: #e74c3c;
  }
  .Toastify__progress-bar--wrp {
    background-color: #fff;
  }
  .Toastify__toast-icon {
    background-color: #fff;
    border-radius: 50%;
    padding: 1px;
  }
`;

export default StyledToastContainer;

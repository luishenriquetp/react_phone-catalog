import styled from 'styled-components';

const StyledNotFoundPage = styled.div`
  height: 100vh;
  .error-container {
    text-align: center;
    padding: 50px;
    font-family: Arial, sans-serif;
  }

  .error-container img {
    margin-bottom: 20px;
  }

  .error-container h1 {
    font-size: 72px;
    color: #ff6347;
    margin-bottom: 10px;
  }

  .error-container p {
    font-size: 24px;
    color: #555;
    margin-bottom: 30px;
  }

  .error-container a {
    display: inline-block;
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s ease;
  }

  .error-container a:hover {
    background-color: #0056b3;
  }
`;

export default StyledNotFoundPage;

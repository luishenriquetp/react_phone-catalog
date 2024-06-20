import React from 'react';
import StyledNotFoundPage from './StyledNotFoundPage.ts';

function NotFoundPage(): React.ReactNode {
  return (
    <StyledNotFoundPage>
      <div className="error-container">
        <h1>404</h1>
        <p>Oops! Página não encontrada.</p>
        <a href="/">Voltar para a página inicial</a>
      </div>
    </StyledNotFoundPage>
  );
}

export default NotFoundPage;

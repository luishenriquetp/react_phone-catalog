import React from 'react';
import StyledPageTemplate from './StyledPageTemplate.ts';

/* interface PageTemplateProps {
  // Define here props of this Component
} */

function PageTemplate(/* props: PageTemplateProps */): React.ReactNode {
  /* const {
    // someProps
  } = props;
  */

  return (
    <StyledPageTemplate>
      <h1>PageTemplate Page Created!</h1>
    </StyledPageTemplate>
  );
}

export default PageTemplate;

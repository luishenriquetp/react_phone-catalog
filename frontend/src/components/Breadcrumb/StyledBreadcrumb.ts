import styled from 'styled-components';

const StyledBreadcrumb = styled.nav`
  display: flex;
  align-items: center;
  align-self: start;
  .breadcrumb-nav__list {
    display: flex;
    margin: 24px 16px;
    padding: 0;
    gap: 8px;
    justify-content: flex-start;
    align-items: flex-end;

    @media (min-width: 640px) and (max-width: 1199px) {
      margin: 24px;
    }

    @media (min-width: 1200px) {
      margin: 24px 16px 24px 0;
    }
  }

  .breadcrumb-nav__list-item {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 8px;

    font-family: Mont;
    font-size: 12px;
    font-weight: 600;
    line-height: 15.34px;
    text-align: left;
    color: var(--rstyle1-gray-secondary);
  }

  a {
    text-decoration: none;
    color: var(--rstyle1-gray-secondary);
  }
`;

export default StyledBreadcrumb;

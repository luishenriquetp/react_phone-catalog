import styled from 'styled-components';

const StyledBreadcrumb = styled.nav`
  display: flex;
  align-items: center;
  .breadcrumb-nav__list {
    display: flex;
    margin: 25px 40px 32px;
    padding: 0;
    gap: 8px;
    justify-content: flex-start;
    align-items: center;
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

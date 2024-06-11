// src/components/Breadcrumb.tsx

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import StyledBreadcrumb from './StyledBreadcrumb.ts';
import Icon from '../Icon/Icon.tsx';
import { IconType } from '../Icon/Icon.ts';

function Breadcrumb() {
  const location = useLocation();

  const pathnames = location.pathname.split('/').filter(x => x);

  if (pathnames.length === 0) {
    return null;
  }

  return (
    <StyledBreadcrumb className="breadcrumb-nav">
      <ol className="breadcrumb-nav__list">
        <li className="breadcrumb-nav__list-item">
          <Link to="/">
            <Icon icon={IconType.HOME} fill="black" />
          </Link>
        </li>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          const capitalizedValue = value.charAt(0).toUpperCase() + value.slice(1);

          return (
            <li key={to} className="breadcrumb-nav__list-item">
              <Icon icon={IconType.ARROW_RIGHT} />
              {isLast ? <span>{capitalizedValue}</span> : <Link to={to}>{capitalizedValue}</Link>}
            </li>
          );
        })}
      </ol>
    </StyledBreadcrumb>
  );
}

export default Breadcrumb;

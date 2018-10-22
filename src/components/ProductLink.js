import React from 'react';
import { Link } from 'react-router-dom';
// import { productPropTypes } from '../common/propTypes';
import { number, string } from 'prop-types';
import { formatRoute } from 'react-router-named-routes'; 
import { routes } from '../routes';

export const ProductLink = ({ title, id }) => {
  return (
    <div>
      <Link to={formatRoute(routes.adminProduct, { id })}>{title}</Link>
    </div>
  );
}

ProductLink.propTypes = {
  id: number.isRequired,
  title: string.isRequired,
};

// export const ProductLink = ({ title }) => {
//   return (
//     <div>{title}</div>
//   );
// }
// ProductLink.propTypes = productPropTypes;



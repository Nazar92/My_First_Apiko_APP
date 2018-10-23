import React from 'react';
import { Route } from 'react-router-dom';
import { arrayOf, shape, string, number } from 'prop-types';
import { productPropTypes } from '../../common/propTypes';
import { ProductLink } from '../../components/ProductLink';
import { routes } from '../../routes';
import { ProductConteiner } from '../../components/ProductComponent';

export const AdminPage = ({ productList, match, updateProduct }) => (
  // <div>
  //   {productList.map((p) => 
  //     <ProductLink key={p.id} {...p}
  //     // id={id} title={title} 
  //     />)}
  // </div>
  <div>
    <Route 
      path={match.path} 
      exact
      render={() => productList.map(({title, id}) => 
        <ProductLink 
          key={id}
          id={id} 
          title={title} 
        />
      )}  
    />
    <Route 
      path={routes.adminProduct} 
      render={(renderProps) => 
        <ProductConteiner 
          updateProduct={updateProduct}
          productList={productList} {...renderProps} /> } 
    />
  </div>
);
AdminPage.propTypes = {
  productList: arrayOf(productPropTypes).isRequired
};
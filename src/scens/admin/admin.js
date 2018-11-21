import React from 'react';
import { Route, Redirect } from 'react-router-dom';
// import T from 'prop-types';
import { arrayOf } from 'prop-types';
import { productPropTypes } from '../../common/propTypes';
// import { ProductLink } from '../../components/ProductLink';
import Header from '../../components/Header';
// import { routes } from '../../routes';
// import { ProductConteiner } from '../../components/ProductComponent';
import ProductList from '../ProductList/ProductListScene'
import * as Api from '../../api/Api';


const AdminScene = ({ productList, match, updateProduct }) => (
  
  <div>
    {!Api.isAuthenticated() && (<Redirect to="/login" /> )}
    <Header admin />
    

  </div>
);
AdminScene.propTypes = {
  productList: arrayOf(productPropTypes).isRequired,
};




export default AdminScene;
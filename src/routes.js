import React from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
// import { history as historyPropTypes } from 'history-prop-types';
import * as Api from './api/Api';

import AdminScene from './scens/admin/admin'; 
import StoreScene from './scens/store/storeScene';
import NotFound from './scens/notFound/notFound';
import Cart from './scens/cart/cartScene';
import LoginScene from './scens/login/loginScene';


// import connect from 'react-redux';
// import styled from 'styled-components';

export const routes = {
  admin: '/admin',
  adminProduct: '/admin/products/:id',
  home: '/',
  product: '/products/:id',
  cart: '/cart',
  auth: '/auth',
};

function ProtectedRoute(props) {
  if (!Api.isAuthenticated()) {
    return <Redirect to="/login" />;
  }  
  return <Route {...props} />
};

// render() {
// const { location } = this.props;

// const isModal = !!(
//   location.state &&
//   location.state.modal &&
//   this.previpusLocation !== location
// );


function Routes() {
  return (
    <React.Fragment>
      <Switch>
        <Route path={routes.admin} component={AdminScene} />
        {/* <ProtectedRoute path={routes.admin} component={AdminScene} /> */}
        <Route path={routes.home} component={StoreScene} />
        <Route path={routes.auth} component={LoginScene} />
        
        <Route path="*" component={NotFound} />
      
      </Switch>
      {/* <Route exact path="/cart" component={Cart} />} */}
    </React.Fragment>
  )
}
// }
export default withRouter(Routes);






// class Routes extends React.Component {
//   static propTypes = {
//     history: historyPropTypes,
//     location: locationPropTypes,
//   }
//   previousLocation = null;

// componentDidUpdate(prevProps) {
//   const { location } = prevProps;
//   if (
//     this.props.history.action !== 'POP' &&
//     (!location.state || !location.state.modal)
//   ) {
//     this.previousLocation = prevProps.location;
//   }
// }

// render () {
//   const { location } = this.props;

//   const isModal = !!(
//     location.state &&
//     location.state.modal &&
//     this.previousLocation !== location
//   );

//   return (
//     <React.Fragment>
//       <Switch location={isModal ? this.previousLocation: location}>
//         <Route path={routes.admin} component={Admin} />
//         <Route path={routes.home} component={Store} />
//         <Route path="*" component={NotFound} />
//         <Route exact path="/cart" component={Cart} />
//       </Switch>
//     </React.Fragment>
//   );
// }
// }

// export default withRouter(Routes);